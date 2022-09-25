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
  InputLeftAddon,
} from "@chakra-ui/react";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { AppShell } from "../ui/AppShell";

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });

const Dashboard = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: any) => {
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
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              <>{errors?.path?.message}</>
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
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              <>{errors?.name?.message}</>
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={8}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Create
          </Button>
        </form>
      </Box>
    </AppShell>
  );
};

export default Dashboard;
