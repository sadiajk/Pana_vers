import {
  Heading,

  Box,
  Center,
  Text,
  Stack,
  Button,
 
  useColorModeValue,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export default function SocialProfileSimple() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
<>
   <SimpleGrid spacing={8} 
    templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
    alignContent={'center'} alignItems={'center'} scrollSnapAlign={'center'}
    >
    <Center py={9} ml={'34px'}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'8xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
       
        <Heading fontSize={'2xl'} fontFamily={'body'}>
        Web3 Metaverse
        </Heading>
       
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
       
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
          Enroll Now
          </Button>
          <Button
          onClick={onOpen}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'red.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
         Read more
          </Button>
          <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
 
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Stack>
      </Box>
    </Center>

    <Center py={9}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'8xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
       
        <Heading fontSize={'2xl'} fontFamily={'body'}>
     Artificial Intelligence
        </Heading>
       
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
       
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
          Enroll Now
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'red.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
         Read more
          </Button>
        </Stack>
      </Box>
    </Center>

    <Center py={9}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'8xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
       
        <Heading fontSize={'2xl'} fontFamily={'body'}>
       development
        </Heading>
       
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
       
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
          Enroll Now
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'red.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
         Read more
          </Button>
        </Stack>
      </Box>
    </Center>

    <Center py={9}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'8xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
       
        <Heading fontSize={'2xl'} fontFamily={'body'}>
      Cloud Native
        </Heading>
       
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
       
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
          Enroll Now
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'red.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
         Read more
          </Button>
        </Stack>
      </Box>
    </Center>

    <Center py={9}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'8xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
       
        <Heading fontSize={'2xl'} fontFamily={'body'}>
       Blockchain
        </Heading>
       
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
       
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
          Enroll Now
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'red.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
         Read more
          </Button>
        </Stack>
      </Box>
    </Center>
    </SimpleGrid>
   </>
  );
}