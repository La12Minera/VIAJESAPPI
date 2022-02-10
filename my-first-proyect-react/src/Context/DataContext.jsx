/* eslint-disable */

import { createContext, useState } from "react";

const initData = {
  name: "Fede Abeldaño",
  age: 25,
};

export const Context = createContext(initData);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initData);

  const context = {
    data,
    setData,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
