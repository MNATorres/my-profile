import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Heading,
  Button,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { AiOutlineGlobal } from "react-icons/ai";

interface CardProjectProps {
  title: string;
  technologies: React.ReactElement;
  urlPreview: string;
  urlFront: string;
  urlBack: string;
  srcImage: string;
  stack: string;
}

export default function CardProject({
  title,
  stack,
  technologies,
  srcImage,
  urlPreview,
  urlFront,
  urlBack,
}: CardProjectProps) {
  return (
    <Card
      color={"white"}
      bg={"#202123"}
      w={{ base: "47%", sm: "45%", lg: "30%" }}
      minW={"169px"}
      mx={1}
      my={2}
      transition={"all 500ms"}
      zIndex={1}
      boxShadow= {'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
      _hover={{
        background: "#18191a",
      }}
    >
      <CardHeader p={{ base: "10px 10px 3px", sm: "20px 20px 0", lg: "20px" }}>
        <Flex>
          <Flex flex="1" alignItems="center" flexWrap="wrap">
            <Box color={"#1484e1"}>
              <Heading size="sm" zIndex={2}>
                {title}
              </Heading>
              <Text fontSize={14}>{stack}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody p={{ base: "5px 10px 3px", sm: "20px 20px 0", lg: "20px" }}>
        <Box color={"#d9d9e3"} fontSize={{ base: 14, sm: 18, lg: 18 }}>
          <Text>Proyecto realizado con:</Text>
          <Flex fontSize={{ base: 23, sm: 30, lg: 30 }} wrap={'wrap'}> {technologies}</Flex>
        </Box>
      </CardBody>
      <Link href={urlPreview} isExternal>
        <Image
          padding={{ base: "10px 10px 3px", sm: "20px 20px 0", lg: "20px" }}
          objectFit="cover"
          src={srcImage}
          alt={title}
          transition={"all 500ms"}
          _hover={{
            padding: 1,
          }}
        />
      </Link>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
        p={{ base: 0 }}
      >
        <Link href={urlPreview} flex="1" isExternal>
          <Button
            color={"white"}
            w={"full"}
            fontSize={25}
            _hover={{ background: "#1484e1" }}
            flex="1"
            variant="ghost"
          >
            <AiOutlineGlobal />
          </Button>
        </Link>
        <Link href={urlFront} flex="1" isExternal>
          <Button
            color={"white"}
            w={"full"}
            _hover={{ background: "#1484e1" }}
            variant="ghost"
          >
            Front
          </Button>
        </Link>
        <Link href={urlBack} flex="1" isExternal>
          <Button
            color={"white"}
            w={"full"}
            _hover={{ background: "#1484e1" }}
            flex="1"
            variant="ghost"
          >
            Back
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
