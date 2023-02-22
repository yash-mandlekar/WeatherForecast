import React from "react";

const H3 = (props) => {
  return (
    <h3 className={props?.className} onClick={props?.onClick}>
      {props?.children}
    </h3>
  );
};

export default H3;
