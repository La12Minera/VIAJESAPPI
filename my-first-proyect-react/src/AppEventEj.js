/* import reactDom from "react-dom"; */
import "./App.css";

const CITIES = ["Buenos Aires", "Mendoza", "San Juan", "Neuquen", "Formosa"];

const App = () => {
  const handleSelectCity = (evt) => {
    console.log(evt.target.value);
  };

  const handleClickButton = () => {
    console.log("Click Button");
  };
  return (
    <div>
      <h1>Hola Mundo</h1>

      <button onClick={handleClickButton}>Click me!!</button>

      <select name="cities" onChange={handleSelectCity}>
        {CITIES.map((city, idx) => (
          <option key={idx} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
