import {
  FormLabel,
  Input,
  HStack,
  NumberInput,
  NumberInputField,
  FormControl,
  Button,
  VStack,
} from "@chakra-ui/react";

const Form = ({ handleDia, handleNom, handleMes, handleAny, handleSubmit }) => {
  return (
    <VStack bgColor="white" w="450px" p={5}>
      <FormControl id="Name" w="100%">
        <FormLabel htmlFor="username">Nom</FormLabel>
        <Input onChange={(e) => handleNom(e)} id="nom" placeholder="nom" />
      </FormControl>

      <HStack justify="space-between" w="100%">
        <FormControl id="Dia" w="fit-content">
          <FormLabel>Dia</FormLabel>
          <NumberInput
            onChange={(e) => handleDia(e)}
            size="md"
            maxW={24}
            max={31}
            min={1}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <FormControl id="Mes" w="fit-content">
          <FormLabel>Mes</FormLabel>
          <NumberInput
            onChange={(e) => handleMes(e)}
            size="md"
            maxW={24}
            max={12}
            min={1}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <FormControl id="Any" w="fit-content">
          <FormLabel>Any</FormLabel>
          <NumberInput
            onChange={(e) => handleAny(e)}
            size="md"
            maxW={24}
            max={9999}
            min={2020}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </HStack>

      <Button type="submit" value="Submit" onClick={() => handleSubmit()}>
        GET DATES
      </Button>
    </VStack>
  );
};

export default Form;
