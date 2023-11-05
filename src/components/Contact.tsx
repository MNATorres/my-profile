import { Link, Text, Box } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";

interface ContactProps {
    urlContact: string,
    dataContact: string,
    iconContact: React.ReactElement
}

export default function Contact({urlContact, iconContact,dataContact} : ContactProps) {
  return (
    <Box
      w={{ base: "48%", sm: "22%", lg: "22%" }}
      minW={{ base: "unset", sm: "197.11px", lg: "unset" }}
      marginBottom={4}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      border={"1px solid #e2e8f0"}
      padding={2}
      borderRadius={10}
      transition={"all 200ms"}
      _hover={{
        background: "#0000004f",
      }}
    >
      <Link p={3} href={urlContact} _hover={{color:'#1484e1'}}>
        {iconContact}
      </Link>
      <Text fontSize={{ base: 15, sm: 18, lg: 18 }}>{dataContact}</Text>
    </Box>
  );
}

