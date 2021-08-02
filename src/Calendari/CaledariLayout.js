import { Grid, Button, VStack } from "@chakra-ui/react";
import Calendari from "./Calendari";
import getDay from "./Actions/getDay";

import { useState, useEffect } from "react";

import { meses } from "./data";

const CalendariLayout = () => {
  const [any, setAny] = useState(2021);
  const [festivos, setFestivos] = useState([]);

  let newFestivos = JSON.parse(JSON.stringify(festivos));

  useEffect(() => {
    async function fetchFestivos() {
      let response = await fetch(
        `https://calendari-api.herokuapp.com/${any}`
      ).then((response) => response.text());
      let { 0: festes } = JSON.parse(response);
      setFestivos(festes.festius[0]);
    }
    fetchFestivos();
  }, []);

  useEffect(() => {
    console.log("festivos ha cambiado");
    console.log(festivos);
  }, [festivos]);

  function addFestivos(mesNom, dia, mes, any) {
    let newDay = getDay(dia, mes, any);
    if (newFestivos[mesNom].includes(newDay)) {
      console.log("removing");
      newFestivos[mesNom] = newFestivos[mesNom].filter((day) => day !== newDay);
    } else {
      console.log("pushing");
      newFestivos[mesNom].push(newDay);
    }
  }

  function handleClick() {
    var raw = JSON.stringify({ any: any, festius: newFestivos });

    fetch(`https://calendari-api.herokuapp.com/${any}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: raw,
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      {!festivos && <h1>Loading...</h1>}
      {festivos && (
        <VStack>
          <Button
            w="fit-content"
            justify="center"
            onClick={() => handleClick()}
          >
            AFEGEIX FESTIUS
          </Button>
          <Grid
            justifySelf="center"
            h="500px"
            minW="1000px"
            templateColumns="repeat(6, 1fr)"
          >
            {meses.map((x, i) => (
              <Calendari
                key={++i}
                mes={x}
                any={any}
                mesNum={++i}
                festes={true}
                festivos={festivos[x]}
                addFestivos={addFestivos}
              />
            ))}
          </Grid>
        </VStack>
      )}
    </>
  );
};

export default CalendariLayout;
