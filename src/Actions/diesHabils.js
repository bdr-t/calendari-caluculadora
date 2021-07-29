import { format, differenceInDays } from "date-fns";
import id from "date-fns/esm/locale/id/index.js";
import { convertTime } from "./convertTime";

let festius = [
  "01/01/2021",
  "06/01/2021",
  "02/04/2021",
  "05/04/2021",
  "24/05/2021",
  "24/06/2021",
  "24/09/2021",
  "11/10/2021",
  "12/10/2021",
  "06/12/2021",
  "07/12/2021",
  "08/12/2021",
  "09/12/2021",
  "01/09/2021",
  "02/09/2021",
  "03/09/2021",
];

export function diesHabils(inici, final) {
  // inici = convertTime(inici);
  // final = convertTime(final);

  let dies = differenceInDays(new Date(final), new Date(inici));
  console.log("dies", dies);

  let date = new Date(inici);

  let res = dies;

  for (let x = 0; x < dies; x++) {
    date = new Date(date.setDate(date.getDate() + 1));
    if (
      format(date, "PPPP").includes("Saturday") ||
      format(date, "PPPP").includes("Sunday") ||
      format(date, "PPPP").includes("August") ||
      festius.includes(format(date, "dd/MM/yyyy")) ||
      (format(date, "PPPP").includes("January") && format(date, "d") >= 20)
    ) {
      res--;
    }

    if (format(date, "dd/MM") === "31/01") {
      console.log(format(date, "PPPP"));
      res++;
    }
  }

  return res;

  // let dies
  // let date = inici

  // while(true){
  //     if(date === final){
  //         break
  //     }

  //     if (festius.includes(format(date, "dd/MM/yyyy"))) {
  //         --dias;
  //       }
  //       date = new Date(date.setDate(date.getDate() + 1));
  //       if (format(date, "PPPP").includes("Saturday")) {
  //         date = new Date(date.setDate(date.getDate() + 2));
  //       }

  //       if (festius.includes(format(date, "dd/MM/yyyy"))) {
  //         date = new Date(date.setDate(date.getDate() + 1));
  //         if (festius.includes(format(date, "dd/MM/yyyy"))) {
  //           date = new Date(date.setDate(date.getDate() + 1));
  //         }
  //       }

  //       if (format(date, "dd/MM/yyyy") === "30/07/2021") {
  //         date = new Date(date.setDate(date.getDate() + 38));
  //       }

  //       if (format(date, "dd/MM/yyyy") === "17/12/2021") {
  //         date = new Date(date.setDate(date.getDate() + 14));
  //       }

  //       ++dias;

  // }
}
