import React, { useEffect, useState } from "react";
import { GiBoomerangSun } from "react-icons/gi";
import Span from "../miniComp/Span";
import H3 from "../miniComp/H3";
import Div from "../miniComp/Div";

const Navbar = () => {
  const [date, setdate] = useState(null);
  const [time, settime] = useState(null);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setdate(date.toLocaleDateString());
      settime(date.toLocaleTimeString());
    }, 1000);
  });

  return (
    <Div className="nav">
      <H3>
        <GiBoomerangSun color="yellow" />
        <Span>Weather Forecast</Span>
      </H3>
      <H3>{/* Real date and time */}
        <Span>{date}</Span>
        <Span>{time}</Span>
      </H3>
    </Div>
  );
};

export default Navbar;
