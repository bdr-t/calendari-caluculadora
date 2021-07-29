import { Box, Badge, Grid, VStack, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Calendari from "./Calendari/Calendari";
import CalendariLayout from "./Calendari/CaledariLayout";



function App() {




  return (
    <Grid bgColor="gray.200" minH="100vh">

      
      <CalendariLayout />
    </Grid>
  );
}

export default App;
