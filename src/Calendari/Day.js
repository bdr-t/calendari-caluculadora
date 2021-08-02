import { useState, useEffect } from "react";

const Day = ({ day, index, start, festivos, mes, mesNum, any, selected, addFestivos}) => {
  const [color, setColor] = useState(false);
  const [diaFestivo, setDiaFesitvo] = useState();


  if (mesNum < 10) {
    mesNum = "0" + mesNum;
  } else {
    mesNum = "" + mesNum;
  }

  useEffect(() => {
    if (festivos) {
      if (festivos.includes(`${mesNum}/${day}/${any}`)) setColor(true);
      if (selected) setColor(true);
    }
  }, [festivos]);

  function handleClick() {
    console.log(mes, day, mesNum, any)
    if (festivos.includes(`${mesNum}/${day}/${any}`) || selected) return;
    setColor(!color);
    addFestivos(mes, day, mesNum, any)
  }

  return (
    <p
      onClick={() => handleClick() }
      style={{
        backgroundColor: color ? "pink" : "white",
        borderRadius: "200px",
        cursor: "pointer",
        userSelect: "none",
        gridColumnStart: start,
      }}
    >
      {day}
    </p>
  );
};

export default Day;
