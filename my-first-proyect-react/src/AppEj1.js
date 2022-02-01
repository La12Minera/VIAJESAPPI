/* import reactDom from "react-dom"; */
import "./App.css";

const Hello = () => {
  return (
    <div>
      <p> Hola Fede</p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  const style = { color: "red", fontSize: 24 };
  const names = ["Fede", "Carlos", "Joaquin", "Marcos"];
  const age = 19;
  const condition =
    age >= 18 && age <= 28
      ? "Acceso permitido"
      : "Vuelva cuando cumpla con los requisitos";

  return (
    <div className="container">
      <p style={style}> Hello World {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <p>{condition}</p>
      <Hello />
      <ul>
        {names.map((identification, idx) => (
          <li key={idx}>
            <p>{identification}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* function App() {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
} */

export default App;
