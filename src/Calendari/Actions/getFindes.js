import { add, format } from "date-fns";

export default function getFinesDeSemana(mes, any) {
  if (mes < 10) {
    mes = "0" + mes;
  } else {
    mes = "" + mes;
  }

  let date = new Date(`${mes}/01/${any}`);

  let diesN;

  if (format(new Date(date), "EEEEEE") === "Mo") {
    diesN = 5;
  }
  if (format(new Date(date), "EEEEEE") === "Tu") diesN = 4;
  if (format(new Date(date), "EEEEEE") === "We") diesN = 3;
  if (format(new Date(date), "EEEEEE") === "Th") diesN = 2;
  if (format(new Date(date), "EEEEEE") === "Fr") diesN = 1;
  if (format(new Date(date), "EEEEEE") === "Sa") diesN = 0;
  if (format(new Date(date), "EEEEEE") === "Su") diesN = 6;

  let finde = add(date, { days: diesN });

  let res = [];

  for (let x = 0; x < 5; x++) {
    if (format(finde, "MM") === mes) {
      let sabado = format(finde, "MM/dd/yyyy");
      let domingo = format(add(finde, { days: 1 }), "MM/dd/yyyy");

      res.push(sabado);
      res.push(domingo);
      finde = add(finde, { days: 7 });
    }
  }

  return res;
}
