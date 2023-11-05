import { Box, Flex } from "@chakra-ui/react";
import Contact from "./Contact";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import TitleSection from "./TitleSection";

const contactInformation = [
  {
    urlContact: "mailto:mtri21019@gmail.com",
    iconContact: <AiOutlineMail style={{ fontSize: "40px" }} />,
    dataContact: "mtri21019@gmail.com",
  },
  {
    urlContact: "https://www.linkedin.com/in/matias-torres-react/",
    iconContact: <AiOutlineLinkedin style={{ fontSize: "40px" }} />,
    dataContact: "Matias Nehuen Torres",
  },
  {
    urlContact: "https://github.com/MNATorres",
    iconContact: <AiOutlineGithub style={{ fontSize: "40px" }} />,
    dataContact: "MNATorres",
  },
  {
    urlContact: "https://api.whatsapp.com/send?phone=5491126328057",
    iconContact: <AiOutlineWhatsApp style={{ fontSize: "40px" }} />,
    dataContact: "+54 9 11 2632-8057",
  },
];

export default function DatasContact() {
  return (
    <Flex w={"full"} marginBottom={20} direction={'column'} align={'center'} >
      <TitleSection />
      <Box w={"full"} maxW={"7xl"}>
        <Flex
          justify={"space-around"}
          px={1}
          
          wrap={"wrap"}
        >
          {contactInformation.map((information, i) => {
            return (
              <>
                <Contact
                  key={i}
                  urlContact={information.urlContact}
                  iconContact={information.iconContact}
                  dataContact={information.dataContact}
                />
              </>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
}
