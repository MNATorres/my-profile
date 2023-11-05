import { Flex } from "@chakra-ui/react";
import CardProject from "./CardProject";
import Chat from "./../assets/Chat.png";
import Amazon from "./../assets/amazon.png";
import CoffeAndCoke from "./../assets/coffeAndCoke.png";
import OrderManagerDashboard from "./../assets/dashboardorders.png";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io5";
import { SiMongodb, SiChakraui, SiMui } from "react-icons/si";
import { FaLess } from "react-icons/fa6";

const dataProject = [
  {
    title: "Chat Multiusuario",
    stack: "Full Stack",
    technologies: (
      <>
        <FaReact style={{ color: "#149eca", marginRight: "2px" }} />
        <FaNodeJs style={{ color: "green", marginRight: "2px" }} />
        <BiLogoJavascript style={{ color: "#f7e018", marginRight: "2px" }} />
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
  {
    title: "Order Management Dashboard",
    stack: "Full Stack",
    technologies: (
      <>
        <FaReact style={{ color: "#149eca", marginRight: "2px" }} />
        <FaNodeJs style={{ color: "green", marginRight: "2px" }} />
        <FaDocker style={{ color: "#1d63ed", marginRight: "2px" }} />
        <BiLogoJavascript style={{ color: "#f7e018", marginRight: "2px" }} />
        <BiLogoTypescript style={{ color: "#3178c6", marginRight: "2px" }} />
        <SiMongodb style={{ color: "green", marginRight: "2px" }} />
        <IoLogoSass style={{ color: "#c04484", marginRight: "2px" }} />
        <SiMui style={{ color: "#007fff", marginRight: "2px" }}/>
      </>
    ),
    srcImage: OrderManagerDashboard,
    urlPreview: "https://ubiquitous-jelly-924be3.netlify.app/",
    urlFront: "https://github.com/MNATorres/order-management-dashboard",
    urlBack: "https://github.com/MNATorres/order-management-back",
  },
  {
    title: "Amazon",
    stack: "Full Stack",
    technologies: (
      <>
        <FaReact style={{ color: "#149eca", marginRight: "4px" }} />
        <SiChakraui style={{ color: "#38B2AC", marginRight: "3px" }}/>
        <FaNodeJs style={{ color: "green", marginRight: "2px" }} />
        <BiLogoJavascript style={{ color: "#f7e018", marginRight: "2px" }} />
        <BiLogoTypescript style={{ color: "#3178c6", marginRight: "2px" }} />
        <SiMongodb style={{ color: "green", marginRight: "2px" }} />
      </>
    ),
    srcImage: Amazon,
    urlPreview: "https://mnatorres.github.io/amazon-front/",
    urlFront: "https://github.com/MNATorres/amazon-front",
    urlBack: "https://github.com/MNATorres/amazon-back",
  },
  {
    title: "Coffe and Coke",
    stack: "Frontend",
    technologies: (
      <>
        <BiLogoJavascript style={{ color: "#f7e018", marginRight: "2px" }} />
        <BiLogoHtml5 style={{ color: "#ff5c35", marginRight: "2px" }}/>
        <BiLogoCss3 style={{ color: "#1e7bbf", marginRight: "2px" }}/>
        <FaLess style={{ color: "#1d365d", marginRight: "2px" }}/>
      </>
    ),
    srcImage: CoffeAndCoke,
    urlPreview: "https://mnatorres.github.io/Coffe-and-Coke/",
    urlFront: "https://github.com/MNATorres/Coffe-and-Coke",
    urlBack: "https://mnatorres.github.io/Coffe-and-Coke/",
  },
];

export default function Portfolio() {
  return (
    <Flex zIndex={33} w={"full"} justify={"center"}>
      <Flex maxW={"7xl"} justify={{ base: "center", sm: "space-around", lg: "center" }} wrap={"wrap"}>
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
