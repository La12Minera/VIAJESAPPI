/* eslint-disable */

import { useContext } from "react";

import { Context } from "../Context/DataContext";

const newData = {
  name: "Yanina",
  age: 20,
};

const ButtonChangeData = () => {
  const { setData } = useContext(Context);

  const handleChangeData = () => {
    setData(newData);
  };

  return (
    <div>
      <button onClick={handleChangeData}>Cambiar Data</button>
    </div>
  );
};

export default ButtonChangeData;
