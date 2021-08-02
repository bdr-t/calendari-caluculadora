import { format } from "date-fns";
import { Box, Center, HStack, Grid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { diasMes, meses } from "./data";
import Day from "./Day";
import getFindes from "./Actions/getFindes";
import esBisiesto from "./Actions/bisiesto";
import firstDay from "./Actions/firstDay";
import setNumDays from "./Actions/setNumDays";
import getDay from "./Actions/getDay";

const Calendari = ({ mes, any, mesNum, festivos, addFestivos}) => {
  const [start, setStart] = useState(0);
  const [days, setDays] = useState(null);

  useEffect(() => {
    setStart(firstDay(`${mesNum}/01/${any}`));
    setDays(setNumDays(mesNum, any));
  }, []);

  return (
    <>
      {!days && <h1>LOADING...</h1>}
      {days && (
        <Center fontSize="14px" textAlign="center">
          <Box w={200}  h={230} bgColor="white" borderRadius="md" margin="2" overflow="hidden" >
            <HStack fontSize="16px" justify="center" gap="10px" fontWeight="700" bgColor="#DA007F" color="white" p={1}>
              <h4>{mes}</h4>
              <h4>{any}</h4>
            </HStack>
            <Grid px="3" templateColumns="repeat(7, 1fr)" py="2" justify="space-between"gap="1">
              <p>L</p>
              <p>M</p>
              <p>M</p>
              <p>J</p>
              <p>V</p>
              <p>S</p>
              <p>D</p>
            </Grid>
            <Grid px="3" templateColumns="repeat(7, 1fr)" py="2" justify="space-between" gap="1">
              <Day key={'01'} start={start} day={"01"} mesNum={mesNum} any={any} mes={mes} index={1} selected={start >= 6 ? true : false} festivos={festivos} addFestivos={addFestivos}/>

              {days.map((x, i) => {
                return (
                  <Day key={x}  day={x}  any={any} index={i + 2}  mes={mes} mesNum={mesNum} festivos={festivos} addFestivos={addFestivos}/>
                );
              })}
            </Grid>
          </Box>
        </Center>
      )}
    </>
  );
};

export default Calendari;
