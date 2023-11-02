import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justify={"center"}
      bg={"#202123fa"}
      w={"full"}
      position={"fixed"}
      top={0}
      zIndex={99}
      opacity={25}
    >
      <Box color={"white"} px={4} w={"full"} maxW={"7xl"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
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
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList color={"black"}>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link
                  href={link.url}
                  display={"flex"}
                  alignItems={"center"}
                  key={link.title}
                >
                  <Box fontSize={25}>{link.icon}</Box>{" "}
                  <Box m={2}>{link.title}</Box>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Flex>
  );
}
