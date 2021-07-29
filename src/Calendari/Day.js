import { useState, useEffect } from "react";


const Day = ({ day, index, start, addFestivos, festivos, mes, mesNum, any }) => {
  const [color, setColor] = useState(false);
  const [diaFestivo, setDiaFesitvo] = useState()

  if (mesNum < 10) {
    mesNum = "0" + mesNum;
  } else {
    mesNum = "" + mesNum;
  }

  if(festivos) setDiaFesitvo(festivos)


  useEffect(()=>{
    console.log(festivos)

  },[diaFestivo])

  function handleClick() {
    setColor(!color);
    addFestivos(index);
  } 

  return (
    <p
      onClick={() => handleClick()}
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
