const { format, differenceInDays, add } = require("date-fns");

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
];

function addDays(fecha, numDays) {
  let date = fecha;
  let dias = 1;
  
  console.log(fecha)
  while (dias < numDays) {
    date = new Date(date.setDate(date.getDate() + 1));
    if (format(date, "PPPP").includes("Saturday")) {
      date = new Date(date.setDate(date.getDate() + 2));
    }

    if (festius.includes(format(date, "dd/MM/yyyy"))) {
      date = new Date(date.setDate(date.getDate() + 1));
      if (festius.includes(format(date, "dd/MM/yyyy"))) {
        date = new Date(date.setDate(date.getDate() + 1));
      }
    }

    if (format(date, "dd/MM/yyyy") === "30/07/2021") {
      date = new Date(date.setDate(date.getDate() + 38));
    }

    if (format(date, "dd/MM/yyyy") === "17/12/2021") {
      date = new Date(date.setDate(date.getDate() + 14));
    }

    console.log(date)
    ++dias;
    
  }

 
  console.log('FINAL DATE', date)
  return date;
}

let date = new Date();

function getDates(date) {
  const sprint1 = addDays(date, 15)
  console.log('----------------------')
  const sprint2 = addDays(add(sprint1, {days: 1}), 15);
  // const sprint3 = addDays(sprint2, 15);
  // const sprint4 = addDays(sprint3, 21);
  // const sprint5 = addDays(sprint4, 21);
  return {
      // sprint1: format(sprint1, "dd/MM/yyyy"),
      // sprint2: format(sprint2, "dd/MM/yyyy"),
      // sprint3: format(sprint3, "dd/MM/yyyy"),
      // sprint4: format(sprint4, "dd/MM/yyyy"),
      // sprint5: format(sprint5, "dd/MM/yyyy"),
  }
}

console.log(getDates(new Date('05/31/2021')))




// console.log(
//   "L'sprint 1 s'hauria d'acabar el dia",
//   format(sprint1, "dd/MM/yyyy")
// );
// console.log(
//   "L'sprint 2 s'hauria d'acabar el dia",
//   format(sprint2, "dd/MM/yyyy")
// );
// console.log(
//   "L'sprint 3 s'hauria d'acabar el dia",
//   format(sprint3, "dd/MM/yyyy")
// );
// console.log(
//   "L'sprint 4 s'hauria d'acabar el dia",
//   format(sprint4, "dd/MM/yyyy")
// );
// console.log(
//   "L'sprint 5 s'hauria d'acabar el dia",
//   format(sprint5, "dd/MM/yyyy")
// );



