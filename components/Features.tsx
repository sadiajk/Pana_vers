import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from "@chakra-ui/react"
  import {  IoShareSocial,IoLocation ,IoLogoInstagram,IoSchoolSharp,IoCash} from "react-icons/io5"
  import { ReactElement } from "react"
  
  interface FeatureProps {
    text: string
    iconBg: string
    icon?: ReactElement
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    )
  }
  
  export default function SplitWithImage() {
    return (
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "/c.jpg"
              }
              objectFit={"cover"}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
             About Panaverse
            </Text>
            <Heading>Certified Web 3.0 and Metaverse Developer: A Nationwide Program </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon as={IoCash} color={"red.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"Earn+Learn"}
              />
              <Feature
                icon={<Icon as={IoLocation} color={"red.500"} w={5} h={5} />}
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"Training cities"}
              />
              <Feature
                icon={
                  <Icon as={IoShareSocial} color={"red.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"Enroll now"}
              />
               <Feature
                icon={
                  <Icon as={IoSchoolSharp} color={"red.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"Courses"}
              />
               <Feature
                icon={
                  <Icon as={IoLogoInstagram} color={"red.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"Follow us on social media"}
              />
            </Stack>
          </Stack>
          
        </SimpleGrid>
      </Container>
    )
  }