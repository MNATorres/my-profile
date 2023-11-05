import { Box, Flex, Text } from "@chakra-ui/react";

export default function TitleSection() {
  return (
    <Flex width={"full"} justify={"center"} my={10}>
      <Box width={"full"} px={4} maxW={"7xl"} zIndex={3}>
        <Text
          as="b"
          fontSize={{ base: 25, sm: 30, lg: 35 }}
          ml={{ base: 2, sm: 5, lg: 10 }}
          position={'relative'}
          
          _after={{
            content: "''",
            width: "full",
            height: "10px",
            position: "absolute",
            left: 1,
            top: '70%',
            bg: "#4299e1",
            zIndex: -1,
          }}
        >
          Soy un Título
        </Text>
      </Box>
    </Flex>
  );
}
