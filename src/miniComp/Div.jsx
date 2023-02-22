import React from "react";

const Div = (props) => {
  return (
    <div key={props?.key} className={props?.className} onClick={props?.onClick}>
      {props?.children}
    </div>
  );
};

export default Div;
