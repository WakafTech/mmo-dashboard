import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
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
              <Link href="/dashboard">
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
