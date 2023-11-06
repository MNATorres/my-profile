import {
  Box,
  chakra,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { ReactNode } from "react";
import Perfil from "./../assets/profile.png";
import cv from "./../../React-Developer-Matias-Torres.pdf";

const Logo = () => {
  return (
    <Flex alignItems={"center"}>
      <Image src={Perfil} alt="perfil" w={41} />
      <Text mx={2} as="b" fontSize="xl">
        Matias Torres
      </Text>
    </Flex>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "#1484e1",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"#202123"} color={"#d9d9e3"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Box as="a" href={"#"} _hover={{ color: "#1484e1" }}>
            Inicio
          </Box>
          <Box as="a" href={cv} _hover={{ color: "#1484e1" }}>
            Curriculum
          </Box>
          <Box
            as="a"
            href={"https://www.linkedin.com/in/matias-torres-react/"}
            _hover={{ color: "#1484e1" }}
          >
            LinkedIn
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>☺ 2022 Perfil de Matias Torres</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://www.linkedin.com/in/matias-torres-react/"}
            >
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={"https://github.com/MNATorres"}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://api.whatsapp.com/send?phone=5491126328057"}
            >
              <FaWhatsapp />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
