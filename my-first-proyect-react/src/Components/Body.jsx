import React from "react";
import Part from "./Part";

const Body = (props) => {
  return (
    <>
      {props.content.map((item, idx) => {
        return <Part key={idx} {...item} />;
      })}
    </>
  );
};

export default Body;
