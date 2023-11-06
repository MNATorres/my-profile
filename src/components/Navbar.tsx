import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import cv from "./../../React-Developer-Matias-Torres.pdf";

const Links = [
  {
    title: "GitHub",
    url: "https://github.com/MNATorres",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/matias-torres-react/",
    icon: <FaLinkedin />,
  },
  {
    title: "Curriculum",
    url: cv,
    icon: <HiOutlineDocumentArrowDown />,
  },
];

export default function Navbar() {
  return (
    <Flex
      justify={"center"}
      bg={"#202123fa"}
      w={"full"}
      position={"fixed"}
      top={0}
      zIndex={99}
      opacity={25}
      id="inicio"
    >
      <Box color={"white"} px={4} w={"full"} maxW={"7xl"}>
        <Flex h={16}>
          <HStack spacing={8} w={'full'} alignItems={"center"} display={'flex'} justifyContent={{ base: "space-between", sm: "space-between", lg: "start" }}>
            <Box>Logo</Box>
            <HStack as={"nav"} spacing={4} display={"flex"}>
              {Links.map((link) => (
                <Link
                  href={link.url}
                  bg={"none"}
                  padding={"5px"}
                  borderRadius={"3px"}
                  color={"white"}
                  key={link.title}
                  _hover={{ background: "#40414f" }}
                  isExternal
                >
                  <Box fontSize={25}>{link.icon}</Box>
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
}
