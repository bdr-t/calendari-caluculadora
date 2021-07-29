import { Box, Grid } from "@chakra-ui/react";
import { format, compareAsc, differenceInDays } from "date-fns";
import { convertTime } from "./Actions/convertTime";
import { diesHabils } from "./Actions/diesHabils";

const Columna = ({ nom, data }) => {
  diesHabils(data.sprint1, data.sprint2);
  function validate(sprint, sprint2) {
    sprint = convertTime(sprint);
    sprint2 = convertTime(sprint2);

    let comparison = compareAsc(new Date(sprint), new Date());

    if (comparison === -1) {
      return "completat";
    } else {
      return differenceInDays(new Date(sprint), new Date(sprint2));
    }
  }
  return (
    <Grid
      templateColumns="repeat(7, 1fr)"
      textAlign="center"
      w="100%"
      gap={6}
      p={2}
    >
      <Box w="100%">{nom}</Box>
      <Box w="100%">{validate(data.sprint1, data.inici)}</Box>
      <Box w="100%">{validate(data.sprint2, data.sprint1)}</Box>
      <Box w="100%">{validate(data.sprint3, data.sprint2)}</Box>
      <Box w="100%">{validate(data.sprint4, data.sprint3)}</Box>
      <Box w="100%">{validate(data.sprint5, data.sprint4)}</Box>
      <Box w="100%">{data.sprint5}</Box>
    </Grid>
  );
};

export default Columna;
