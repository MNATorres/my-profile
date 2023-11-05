import { Box, Text } from "@chakra-ui/react";

export default function TitleSection() {
  return (
    <Box width={"full"}  my={10}>
      <Box px={4} m={'0 auto'} maxW={"7xl"}>
        <Text>Soy un Título</Text>
      </Box>
    </Box>
  );
}
