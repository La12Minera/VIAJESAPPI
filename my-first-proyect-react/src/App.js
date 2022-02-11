/* eslint-disable */

import { useEffect, useReducer } from "react";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";

const initialState = {
  count: 0,
  users: [{ name: "Fede" }, { name: "adrian" }],
};

const cambiarEstado = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrementar":
      return {
        ...state,
        count: state.count - 1,
      };

    case "custom":
      return {
        ...state,
        users: state.users.concat(action.payload),
      };

    default:
      return { ...state };
  }
};

function App() {
  const [{ count, users }, dispatch] = useReducer(cambiarEstado, initialState);

  const addValue = () => {
    dispatch({ type: "incrementar" });
  };

  const removeValue = () => {
    dispatch({ type: "decrementar" });
  };

  const customValue = () => {
    dispatch({ type: "custom", payload: { name: "yani" } });
  };

  useEffect(() => {
    console.log("render");
  });

  return (
    <div>
      {/* <p>{count}</p>
      <p>{JSON.stringify(users, null, 2)}</p>
      <button onClick={addValue}>+1</button>
      <button onClick={removeValue}>-1</button>
      <button onClick={customValue}>10</button> */}
      <Form1 />
      <hr />
      <Form2 />
    </div>
  );
}

export default App;
