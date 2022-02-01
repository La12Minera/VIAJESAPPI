/* import reactDom from "react-dom"; */
import "./App.css";

import Header from "./Components/Header";
import Body from "./Components/Body";

const course = "Half stack application";
const part1 = "Fundamentals of react";
const exercise1 = 10;
const part2 = "Using props to pass data";
const exercise2 = 7;
const part3 = "States of a component";
const exercise3 = 14;
const totalExercises = exercise1 + exercise2 + exercise3;

const content = {
  part1,
  exercise1,
  part2,
  exercise2,
  part3,
  exercise3,
};

function App() {
  return (
    <div className="App">
      <Header course={course} />
      <Body content={content} />
    </div>
  );
}

export default App;
