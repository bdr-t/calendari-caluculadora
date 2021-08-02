import { Box, Flex, Grid, HStack } from "@chakra-ui/react";
import Form from "./Form";
import {useState} from 'react'
import getDies from "../getDiesHabils"
import Info from './Info'

const Content = () => {
  const [nom, setNom] = useState()
  const [dia, setDia] = useState()
  const [mes, setMes] = useState()
  const [any, setAny] = useState()
  const [data, setData] = useState()
  const [form, setForm] = useState(true)

  function handleNom(e){
    setNom(e.target.value)
  }
  function handleDia(e){
    let num = e
    num >= 10 ? num = num : num = '0' + num
    setDia(num)
  }
  function handleMes(e){
    let num = e
    num >= 10 ? num = num : num = '0' + num
    setMes(num)
  }
  function handleAny(e){
    setAny(e)
  }

  function handleSubmit(){
    setData(getDies(`${mes}/${dia}/${any}`))
    setForm(false)
  }

  return (
    <>
      {form && <Form handleNom={handleNom} handleDia={handleDia} handleMes={handleMes} handleAny={handleAny} handleSubmit={handleSubmit}/>}
      {!form && <Info data={data}/>}
    </>
  );
};

export default Content;
