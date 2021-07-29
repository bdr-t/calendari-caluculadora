import { diasMes, meses } from "../data";
import esBisiesto from "./bisiesto";

export default function setNumDays(mesNum, any) {
  if (mesNum === 2) {
    return esBisiesto(mesNum, any);
  }
  return diasMes[mesNum - 1];
}
