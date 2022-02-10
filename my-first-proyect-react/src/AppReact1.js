/* import reactDom from "react-dom"; */
import "./App.css";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Total from "./Components/Total";

const course = "Half stack application";
const part1 = "Fundamentals of react";
const exercise1 = 10;
const part2 = "Using props to pass data";
const exercise2 = 7;
const part3 = "States of a component";
const exercise3 = 14;
const totalExercises = exercise1 + exercise2 + exercise3;

const content = [
  {
    title: part1,
    exercise: exercise1,
  },
  {
    title: part2,
    exercise: exercise2,
  },
  {
    title: part3,
    exercise: exercise3,
  },
];

function App() {
  return (
    <div className="App">
      <Header course={course} />
      <Body content={content} />
      <Total totalExercises={totalExercises} />
    </div>
  );
}

export default App;
