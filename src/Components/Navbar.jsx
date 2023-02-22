import React from "react";
import { GiBoomerangSun } from "react-icons/gi";
import Span from "../miniComp/Span";
import H3 from "../miniComp/H3";
import Div from "../miniComp/Div";

const Navbar = () => {
  return (
    <Div className="nav">
      <H3>
        <GiBoomerangSun color="yellow" />
        <Span>Weather Forecast</Span>
      </H3>
    </Div>
  );
};

export default Navbar;
