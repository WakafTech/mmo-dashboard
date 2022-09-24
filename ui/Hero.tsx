import {
  Box,
  Button,
  Container,
  Heading,
  HStack as VStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container centerContent maxW={"3xl"}>
      <Stack textAlign={"center"} spacing={"8"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          fontWeight={"extrabold"}
        >
          The Essential Toolkit for
          <br />
          <Text as="span" color={"teal"}>
            MMOs in Singapore
          </Text>
        </Heading>
        <Text fontSize={{ base: "sm", sm: "xl", md: "2xl" }} fontWeight={"semibold"} color={"gray.600"}>
           Built to equip MMOs in Singapore with data-centric tools that delightful for end-users.
        </Text>
        <Stack
          py="8"
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
        >
          <Button colorScheme='teal' size='lg' px={12} fontWeight="bold">
            <Link href={"/login"}>
    Sign In
            </Link>
  </Button>
          <Button variant="ghost">Request Access</Button>
        </Stack>
      </Stack>
    </Container>
  );
};
