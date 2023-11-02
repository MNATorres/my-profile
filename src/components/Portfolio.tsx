import { Flex } from "@chakra-ui/react";
import CardProject from "./CardProject";
import Chat from "./../assets/Chat.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

const dataProject = [
  {
    title: "Chat Multiusuario",
    stack: "Full Stack",
    technologies: (
      <>
        <FaReact style={{ color: "#149eca", marginRight: "2px" }} />
        <FaNodeJs style={{ color: "green", marginRight: "2px" }} />
        <BiLogoTypescript style={{ color: "#3178c6", marginRight: "2px" }} />
        <SiMongodb style={{ color: "green", marginRight: "2px" }} />
        <IoLogoSass style={{ color: "#c04484", marginRight: "2px" }} />
      </>
    ),
    srcImage: Chat,
    urlPreview: "https://main--luminous-jelly-479ac5.netlify.app/",
    urlFront: "https://github.com/MNATorres/Chat",
    urlBack: "https://github.com/MNATorres/chatBack",
  },
];

export default function Portfolio() {
  return (
    <Flex zIndex={33} w={"full"} justify={"center"}>
      <Flex maxW={"7xl"} justify={"center"} wrap={"wrap"}>
        {dataProject.map((card, i) => {
          return (
            <CardProject
              key={i}
              title={card.title}
              stack={card.stack}
              technologies={card.technologies}
              srcImage={card.srcImage}
              urlPreview={card.urlPreview}
              urlFront={card.urlFront}
              urlBack={card.urlBack}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
