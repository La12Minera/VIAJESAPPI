import React from "react";

const Body = (props) => {
  return (
    <>
      <p>
        {props.content.part1} - Tiene un total de {props.content.exercise1} {""}
        ejercicios
      </p>
      <p>
        {props.content.part2} - Tiene un total de {props.content.exercise2} {""}
        ejercicios
      </p>
      <p>
        {props.content.part3} - Tiene un total de {props.content.exercise3} {""}
        ejercicios
      </p>
    </>
  );
};

export default Body;
