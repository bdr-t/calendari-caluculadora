import { Grid } from "@chakra-ui/react";
import Calendari from "./Calendari";

import { useState, useEffect } from "react";

import { meses } from "./data";

const CalendariLayout = () => {
  const [any, setAny] = useState(2021);
  const [festivos, setFestivos] = useState();

  // COGER FESTIVOS DE LOCAL STORAGE
  useEffect(() => {
    var festes = JSON.parse(localStorage.getItem("festivos"));
    setFestivos(festes);
  }, []);

  useEffect(() => {
    localStorage.setItem("festius", JSON.stringify(festivos));
  }, [festivos]);

  function updateFestivos(festivos) {
    setFestivos(festivos)
  }

  return (
    <>
      <Grid justifySelf="center" w="1000px" templateColumns="repeat(4, 1fr)">
        {meses.map((x, i) => (
          <Calendari key={++i} mes={x} any={any} mesNum={++i} festes={true} updateFestivos={updateFestivos}/>
        ))}
      </Grid>
    </>
  );
};

export default CalendariLayout;
