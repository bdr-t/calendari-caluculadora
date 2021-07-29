import { Box, Grid, Badge } from "@chakra-ui/react";

const ColumnaSprint = ({ one, two, three, four, five, six, seven }) => {
  return (
    <Grid
      templateColumns="repeat(7, 1fr)"
      textAlign="center"
      borderBottom="1px solid black"
      w="100%"
      gap={6}
      p={2}
    >
      <Box w="100%"></Box>
      <Box w="100%">
        <Badge fontSize={15} variant="solid" colorScheme="blue">
          SPRINT 1
        </Badge>
      </Box>
      <Box w="100%">
        <Badge fontSize={15} variant="solid" colorScheme="blue">
          SPRINT 2
        </Badge>
      </Box>
      <Box w="100%">
        <Badge fontSize={15} variant="solid" colorScheme="blue">
          SPRINT 3
        </Badge>
      </Box>
      <Box w="100%">
        <Badge fontSize={15} variant="solid" colorScheme="blue">
          SPRINT 4
        </Badge>
      </Box>
      <Box w="100%">
        <Badge fontSize={15} variant="solid" colorScheme="blue">
          SPRINT 5
        </Badge>
      </Box>
      <Box w="100%">
        <Badge fontSize={15} variant="solid" colorScheme="blue">
          Finalitzar
        </Badge>
      </Box>
    </Grid>
  );
};

export default ColumnaSprint;
