import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { Auth } from "../external-api/supabase/auth";
import { GetServerSideProps } from "next";
import { getUser } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const { query } = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const showToast = (status: "success" | "error", title: string) => {
    const id = "toast-id";
    if (!toast.isActive(id)) {
      toast({ id, title, status });
    }
  };

  const onLogin = async () => {
    setLoading(true);
    try {
      const { error } = await Auth.handleSignIn(
        email,
        query?.redirectTo as string | undefined
      );
      setLoading(false);
      if (error) throw error;
      showToast("success", "Successfully sent magic link to your email!");
    } catch (error: any) {
      showToast("error", error.error_description || error.message);
    }
  };
  return (
    <Flex py={20} minH={"100vh"} justify={"center"} bg={"gray.100"}>
      <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"} textAlign="center">
            No passwords required. We{`'`}ll send you a magic link to login
            instead!
          </Text>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} bg={"white"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                isLoading={loading}
                loadingText="Sending magic link"
                onClick={onLogin}
                colorScheme={"teal"}
              >
                Send my magic link
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await getUser(context);
  if (user) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
