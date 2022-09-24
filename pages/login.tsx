import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Login: NextPage = () => {
    return (
        <Flex
          py={20}
          minH={"100vh"}
          justify={'center'}
          bg={"gray.100"}>
          <Stack spacing={8} mx={'auto'} maxW={'2xl'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to your account</Heading>
              <Text fontSize={'lg'} color={'gray.600'} textAlign="center">
                No passwords required. We'll send you a magic link to login instead! 
              </Text>

            </Stack>
            <Box
              rounded={'lg'}
              boxShadow={'lg'}
              bg={'white'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                   colorScheme={"teal"}>
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
