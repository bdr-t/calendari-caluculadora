import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Badge,
  IconButton 
} from "@chakra-ui/react";

import { SearchIcon } from '@chakra-ui/icons'
import { useState} from "react";

const BtnPrueba = () => {
  let [num, setNum] = useState(10);
  function handleClick () {
    setNum(++num)
  }

  return (
    <Popover matchWidth='true'>
      <PopoverTrigger>
        <Badge>{num}</Badge>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody width="fit-conent">
            <IconButton onClick={()=> handleClick()} icon={<SearchIcon />} />
        </PopoverBody>
      </PopoverContent>
    </Popover>

  );
};

export default BtnPrueba;
