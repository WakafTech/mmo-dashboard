import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Heading,
  Box,
  InputGroup,
  InputLeftAddon
} from "@chakra-ui/react";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { AppShell } from "../ui/AppShell";
import {Db} from "../external-api/supabase/db";
import {Cookie, COOKIE_KEY_ORGANISATION_ID, COOKIE_KEY_USER_ID} from "../configs/cookie";
import {getCookie} from "cookies-next";
import {useRouter} from "next/router";

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });

const CreateShortLink = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values: any) => {
    const {path, destination} = values
    const organisation = getCookie(COOKIE_KEY_ORGANISATION_ID) as string
    const created_by = getCookie(COOKIE_KEY_USER_ID) as string

    const response = await Db.insertShortLink({organisation, destination, path, created_by})
    await router.push("/short-links")
  };

  return (
    <AppShell>
      <Heading>Create a new short link</Heading>
      <Box bg={"white"} mt="8" p="8" rounded={"8"} maxW="4xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.path}>
            <FormLabel htmlFor="path">Short Link</FormLabel>
            <InputGroup>
              <InputLeftAddon minW="110" color="gray.600">
                go.mmo.sg
              </InputLeftAddon>
              <Input
                id="path"
                placeholder="Your custom link"
                {...register("path", {
                  required: "This is required",
                  }
                )}
              />
            </InputGroup>
            <FormErrorMessage>
              <>{errors?.path?.message as string}</>
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.destination} mt={6}>
            <FormLabel htmlFor="destination">Destination Link</FormLabel>
            <InputGroup>
              <InputLeftAddon minW="110" color="gray.600">
                https://
              </InputLeftAddon>
              <Input
                id="path"
                placeholder="The link users should be redirected to"
                {...register("destination", {
                  required: "This is required",
                  pattern: {
                    value: new RegExp("^([a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)+.*)$"),
                    message: "Invalid url"
                  }
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              <>{errors?.destination?.message as string}</>
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={8}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
            loadingText='Creating short link'
          >
            Create
          </Button>
        </form>
      </Box>
    </AppShell>
  );
};

export default CreateShortLink;
