import { useState, useEffect } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  let $divContainer = null;

  const addValue = () => {
    // Ejecuta una funcion y esa funcion ejecuta un useState y este hace que el componente se actualice
    setCount(count + 1);
  };
  const removeValue = () => {
    setCount(count + 1);
  };

  const updateWidth = () => {
    const width = document.body.clientWidth;
    setWidth(width);
    console.log("width", width);
  };

  useEffect(() => {
    console.log("Mounted ...");

    return () => {
      console.log("Unmounted ...");
    };
  }, []);

  useEffect(() => {
    // Actualizamos el width al montar el componente
    updateWidth();

    // Nos subcribimos al evento resize del document o window
    window.addEventListener("resize", updateWidth);
  });
  return (
    <div>
      <h1>Home Page</h1>
      El ancho de la página es {width}px
      <div id="button-containers">
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
      </div>
    </div>
  );
};

export default Home;
