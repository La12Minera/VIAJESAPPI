/* import reactDom from "react-dom"; */
import "./App.css";
import { useState } from "react";
import Email from "./Components/Email";

const App = () => {
  let [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Email />
      <Email />
    </div>
  );
};

export default App;
