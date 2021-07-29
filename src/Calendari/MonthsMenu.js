import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const MonthsMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button}>Prueba</MenuButton>
      <MenuList>
        <menuItem>Gener</menuItem>
        <menuItem>Febrer</menuItem>
        <menuItem>Març</menuItem>
        <menuItem>Abril</menuItem>
        <menuItem>Maig</menuItem>
        <menuItem>Juny</menuItem>
        <menuItem>Juliol</menuItem>
        <menuItem>Agost</menuItem>
        <menuItem>Setembre</menuItem>
        <menuItem>Octubre</menuItem>
        <menuItem>Novembre</menuItem>
        <menuItem>Desembre</menuItem>
       
      </MenuList>
    </Menu>
  );
};

export default MonthsMenu;
