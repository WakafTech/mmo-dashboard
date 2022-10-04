import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { clientConfig } from "../configs/app-config";

export const Navbar = () => {
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container maxW={"6xl"} py={{ base: "4", lg: "5" }}>
          <HStack justify="space-between">
            <Heading
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
              fontWeight="extrabold"
            >
              MMO Toolkit
            </Heading>
            <HStack>
              <Button variant="ghost" fontSize={{ base: "sm", sm: "md" }}>
                Request Access
              </Button>
              <Link
                href={`https://auth.mmo.sg/login?redirectTo=${clientConfig.app.baseUrl}`}
              >
                <Button colorScheme="teal" fontSize={{ base: "sm", sm: "md" }}>
                  Sign In
                </Button>
              </Link>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
