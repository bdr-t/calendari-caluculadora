import { format } from "date-fns";
import { Box, Center, HStack, Grid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { diasMes, meses } from "./data";
import Day from "./Day";
import getFindes from "./Actions/getFindes";
import esBisiesto from "./Actions/bisiesto";
import firstDay from "./Actions/firstDay";
import setNumDays from "./Actions/setNumDays";

const Calendari = ({ mes, any, mesNum }) => {
  const [start, setStart] = useState(0);
  const [days, setDays] = useState(null);
  const [festivos, setFestivos] = useState(null);;

  useEffect(() => {
    setFestivos(getFindes(mesNum, any));
    setStart(firstDay(`${mesNum}/01/${any}`));
    setDays(setNumDays(mesNum, any));
  }, []);


  function addFestivos(newFestivos) {
    let dayToAdd = `${`${
      mesNum < 10 ? 0 : ""
    }${mesNum}`}/${newFestivos}/${any}`;
    if (festivos.includes(dayToAdd)) {
      setFestivos(festivos.filter((x) => x !== dayToAdd));
    } else {
      setFestivos([...festivos, dayToAdd]);
    }
  }


  return (
    <>
      {!days && <h1>LOADING...</h1>}
      {days && (
        <Center fontSize="14px" textAlign="center">
          <Box
            w={200}
            h={230}
            bgColor="white"
            borderRadius="md"
            margin="2"
            overflow="hidden"
          >
            <HStack
              fontSize="16px"
              justify="center"
              gap="10px"
              fontWeight="700"
              bgColor="#DA007F"
              color="white"
              p={1}
            >
              <h4>{mes}</h4>
              <h4>{any}</h4>
            </HStack>
            <Grid
              px="3"
              templateColumns="repeat(7, 1fr)"
              py="2"
              justify="space-between"
              gap="1"
            >
              <p>L</p>
              <p>M</p>
              <p>M</p>
              <p>J</p>
              <p>V</p>
              <p>S</p>
              <p>D</p>
            </Grid>
            <Grid
              px="3"
              templateColumns="repeat(7, 1fr)"
              py="2"
              justify="space-between"
              gap="1"
            >
              <Day
                start={start}
                day={"01"}
                mesNum={mesNum}
                any={any}
                addFestivos={addFestivos}
                index={1}
              />

              {days.map((x, i) => {
                let color;

                var festivos = JSON.parse(localStorage.getItem("festius"));

                // if(festivos[mes].includes(`${x}/${`${mesNum < 10 ? 0 : ''}${mesNum}`}/${any}`)) console.log(`${x}/${`${mesNum < 10 ? 0 : ''}${mesNum}`}/${any}`)

                return (
                  <Day
                    key={x}
                    day={x}
                    addFestivos={addFestivos}
                    any={any}
                    index={i + 2}
                    festius={festivos}
                    mes={mes}
                    mesNum={mesNum}
                    color={true}
                  />
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
