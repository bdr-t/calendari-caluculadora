import { format } from "date-fns";

export default function firstDay(date) {
    let firstDayMonth = format(new Date(date), "EEEEEE");

    if (firstDayMonth === "Mo") return 1;
    if (firstDayMonth === "Tu") return 2;
    if (firstDayMonth === "We") return 3;
    if (firstDayMonth === "Th") return 4;
    if (firstDayMonth === "Fr") return 5;
    if (firstDayMonth === "Sa") return 6;
    if (firstDayMonth === "Su") return 7;
  }