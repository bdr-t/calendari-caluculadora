import { Box, Badge, Flex, VStack } from "@chakra-ui/react";
const Info = ({ data }) => {
  console.log(data);
  return (
    <VStack bgColor='white' w='500px' p={5}>
        <Flex justify='space-between' width='100%' borderBottom='1px solid lightgray'>
            <Badge fontSize='18px' colorScheme='blue' h='fit-content' alignSelf='center'>SPRINT 1</Badge>
            <VStack p={3}>
                <h1>{data.sprint1.dias}</h1>
                <Badge variant='outline' fontSize='14px' colorScheme='purple' >{data.sprint1.final}</Badge>
            </VStack>
        </Flex>
        <Flex justify='space-between' width='100%' borderBottom='1px solid lightgray'>
            <Badge fontSize='18px' colorScheme='blue' h='fit-content' alignSelf='center'>SPRINT 2</Badge>
            <VStack p={3}>
                <h1>{data.sprint2.dias}</h1>
                <Badge variant='outline'fontSize='14px' colorScheme='purple'>{data.sprint2.final}</Badge>
            </VStack>
        </Flex>
        <Flex justify='space-between' width='100%' borderBottom='1px solid lightgray'>
            <Badge fontSize='18px' colorScheme='blue' h='fit-content' alignSelf='center'>SPRINT 3</Badge>
            <VStack p={3}>
                <h1>{data.sprint3.dias}</h1>
                <Badge variant='outline' fontSize='14px' colorScheme='purple'>{data.sprint3.final}</Badge>
            </VStack>
        </Flex>
        <Flex justify='space-between' width='100%' borderBottom='1px solid lightgray'>
            <Badge fontSize='18px' colorScheme='blue' h='fit-content' alignSelf='center'>SPRINT 4</Badge>
            <VStack p={3}>
                <h1>{data.sprint4.dias}</h1>
                <Badge variant='outline' fontSize='14px' colorScheme='purple'>{data.sprint4.final}</Badge>
            </VStack>
        </Flex>
        <Flex justify='space-between' width='100%' borderBottom='1px solid lightgray'>
            <Badge fontSize='18px' colorScheme='blue' h='fit-content' alignSelf='center'>SPRINT 5</Badge>
            <VStack p={3}>
                <h1>{data.sprint5.dias}</h1>
                <Badge variant='outline' fontSize='14px' colorScheme='purple'>{data.sprint5.final}</Badge>
            </VStack>
            
        </Flex>
    </VStack>
  );
};

export default Info;
