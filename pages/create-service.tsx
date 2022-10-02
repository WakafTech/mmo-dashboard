import {Box, Heading, FormControl, FormLabel, Input, FormErrorMessage, Textarea} from "@chakra-ui/react";
import {AppShell} from "../ui/AppShell";
import {useForm} from "react-hook-form";

const CreateService = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values: any) => {

  }

  return (
    <AppShell>
      <Heading>Create a new service</Heading>
      <Box bg={"white"} mt="8" p="8" rounded={"8"} maxW="4xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              placeholder="Your service title"
              {...register("title", {
                  required: "This is required",
                }
              )}
            />
            <FormErrorMessage>
              <>{errors?.title?.message as string}</>
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.c} mt={6}>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              placeholder="Your service description"
              {...register("description", {
                  required: "This is required",
                }
              )}
            />
            <FormErrorMessage>
              <>{errors?.description?.message as string}</>
            </FormErrorMessage>
          </FormControl>
        </form>
      </Box>
    </AppShell>
  )
}

export default CreateService