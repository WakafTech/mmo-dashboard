import {
  Box, Text
} from "@chakra-ui/react";

interface Props {
  path: string;
  destination: string;
}

export const ShortLinkItem = ({ path, destination }: Props) => {
  return (
    <Box bg="white" rounded={8} shadow={4} p={4} minW={"200"}>
      <Text fontWeight={"bold"} fontSize={"xl"}>
        go.mmo.sg/
        <Text as="span" color={"teal.500"}>
          {path}
        </Text>
      </Text>
      <Text color="gray.600" fontSize={"sm"}>
        {destination}
      </Text>
    </Box>
  );
};
