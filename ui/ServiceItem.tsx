import {Box, Text} from "@chakra-ui/react";

interface Props {
  title: string,
  description: string,
  images: string[]

}

export const ServiceItem = ({title, description, images}: Props) => {
  return (
    <Box bg="white" rounded={8} shadow={4} p={4} minW={"200"}>
      <Text fontWeight={"bold"} fontSize={"xl"}>
        go.mmo.sg/
        <Text as="span" color={"teal.500"}>
          {title}
        </Text>
      </Text>
      <Text color="gray.600" fontSize={"sm"}>
        {description}
      </Text>
    </Box>
  );
};
