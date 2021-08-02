import axios from "axios";
import { format, add, compareAsc, differenceInDays } from "date-fns";

let realData = (async function () {
  let any = new Date().getFullYear();
  const response = await axios
    .get(`https://calendari-api.herokuapp.com/${any}`)
    .then((response) => response);
  return response.data[0].festius[0];
})().then((res) => (realData = res));

const meses = [
  "Gener",
  "Febrer",
  "Març",
  "Abril",
  "Maig",
  "Juny",
  "Juliol",
  "Agost",
  "Septembre",
  "Octubre",
  "Novembre",
  "Desembre",
];

function getDays(data, dies) {
  let inici = new Date(data);
  let mes = format(inici, "MM");
  let date = inici;

  let days = 1;

  while (days < dies) {
    if (format(date, "eee") === "Fri") {
      date = add(date, { days: 3 });
      mes = format(date, "MM");
      days++;
    } else if (realData[meses[mes - 1]].includes(format(date, "MM/dd/yyyy"))) {
      date = add(date, { days: 1 });
      mes = format(date, "MM");
    } else {
      date = add(date, { days: 1 });
      mes = format(date, "MM");
      days++;
    }
  }
  while (realData[meses[mes - 1]].includes(format(date, "MM/dd/yyyy"))) {
    date = add(date, { days: 1 });
    mes = format(date, "MM");
  }
  return date;
}

function getEverything(inici) {
  let sprint1 = getDays(inici, 15);
  let sprint2 = getDays(add(sprint1, { days: 1 }), 15);
  let sprint3 = getDays(add(sprint2, { days: 1 }), 15);
  let sprint4 = getDays(add(sprint3, { days: 1 }), 21);
  let sprint5 = getDays(add(sprint4, { days: 1 }), 21);

  let res = {
    sprint1: format(sprint1, "MM/dd/yyyy"),
    sprint2: format(sprint2, "MM/dd/yyyy"),
    sprint3: format(sprint3, "MM/dd/yyyy"),
    sprint4: format(sprint4, "MM/dd/yyyy"),
    sprint5: format(sprint5, "MM/dd/yyyy"),
  };
  return res;
}

function diasFestivos(inici, final, naturals) {
  let res = 0;

  for (let x = 0; x < naturals; x++) {
    let date = add(new Date(inici), { days: x });
    let comparison = compareAsc(new Date(date), new Date());
    if (format(date, "MM/dd/yyyy") === format(new Date(), "MM/dd/yyyy")) res--;
    let mes = format(date, "MM");

    if (comparison === -1) res++;
    else {
      if (realData[meses[mes - 1]].includes(format(date, "MM/dd/yyyy"))) res++;
    }
  }

  return res;
}

// let fechasEntrega = getEverything('05/01/2021');

function remainingDays(data, data2) {
  let comparison = compareAsc(new Date(data), new Date());

  if (comparison === -1) {
    return 0;
  } else {
    let difference = differenceInDays(new Date(data), new Date(data2));
    let noHabils = diasFestivos(data2, data, difference);
    return difference - noHabils;
  }
}

export default function getDias(inici) {
  let fechasEntrega = getEverything(inici);
  let res = {
    sprint1: {
      dias: remainingDays(fechasEntrega.sprint1, inici),
      final: format(new Date(fechasEntrega.sprint1), 'dd/MM/yyyy'),
    },
    sprint2: {
      dias: remainingDays(fechasEntrega.sprint2, fechasEntrega.sprint1),
      final: format(new Date(fechasEntrega.sprint2), 'dd/MM/yyyy'),
    },
    sprint3: {
      dias: remainingDays(fechasEntrega.sprint3, fechasEntrega.sprint2),
      final: format(new Date(fechasEntrega.sprint3), 'dd/MM/yyyy'),
    },
    sprint4: {
      dias: remainingDays(fechasEntrega.sprint4, fechasEntrega.sprint3),
      final: format(new Date(fechasEntrega.sprint4), 'dd/MM/yyyy'),
    },
    sprint5: {
      dias: remainingDays(fechasEntrega.sprint5, fechasEntrega.sprint4),
      final: format(new Date(fechasEntrega.sprint5), 'dd/MM/yyyy'),
    },
  };

  console.log(res);
  return res;
}
