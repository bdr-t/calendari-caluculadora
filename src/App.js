import { Box, Badge, Grid, VStack, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Calendari from "./Calendari/Calendari";
import CalendariLayout from "./Calendari/CaledariLayout";


import {useState} from 'react'
import Content from "./Content/Content";



function App() {
  const [calendari, setCalendari] = useState(false)

  function toggleCalendari() {
    setCalendari(!calendari)
  }


  return (
    <Grid bgColor="gray.200" minH="100vh" placeContent='center' gap={2}>
      <Button bgColor="tomato" onClick={() => toggleCalendari()}>Calendari</Button>
      {calendari && <CalendariLayout />}
      {!calendari && <Content/>}
    </Grid>
  );
}

export default App;
