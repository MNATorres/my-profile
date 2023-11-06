import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import { useScroll } from "../hooks/useScroll";

export default function Hero() {
  const { scrollToSection } = useScroll();

  return (
    <Container maxW={"7xl"} mt={"1%"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack zIndex={2} flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            zIndex={1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              color={"#d9d9e3"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#4299e1",
                zIndex: -1,
              }}
            >
              Hola! soy
            </Text>
            <br />
            <Text as={"span"} color={"#4299e1"}>
              Matias Torres
            </Text>
          </Heading>
          <Text color={"#d9d9e3"}>
            ¡Hola! Soy Matias Torres, un apasionado desarrollador web con más de
            2 años de experiencia en la creación de aplicaciones y
            funcionalidades. Me especializo en Front End development y he
            contribuido a la construcción de interfaces de usuario atractivas y
            soluciones eficientes. Mis habilidades principales incluyen: - React
            - TypeScript - Node.js - AWS - GraphQL - MongoDB
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"#4299e1"}
              _hover={{ bg: "#015397" }}
              onClick={() => scrollToSection("portfolio")}
            >
              Get started
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
            >
              Contact
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
          zIndex={1}
        >
          <Blob
            w={"100%"}
            h={{ base: "300%", sm: "140%", lg: "150%" }}
            position={"absolute"}
            top={{ base: "-100%", sm: "-25%", lg: "-20%" }}
            left={0}
            zIndex={-1}
            color={"#4299e1"}
          />
          <Box
            position={"relative"}
            height={{ base: "240px", sm: "280px", lg: "300px" }}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.ctfassets.net/txbhe1wabmyx/15Xk8FlZKdsdxofRlToDUP/ac8cafed5b9c3f2e2e8057ca6c17f5f7/christopher-gower-m_hrflhgabo-unsplash.jpg"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
