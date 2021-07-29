import { diasMes, meses } from "../data";

export default function esBisiesto(mesNum,any) {
    if (new Date(`${mesNum}/29/${any}`).getDate() === 29)
      return diasMes[mesNum - 1].mes29;
    return diasMes[mesNum - 1].mes28;
  }