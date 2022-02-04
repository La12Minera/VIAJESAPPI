import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { valueName } = props;
  const { name } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const fetchApi = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resp) => resp.json())
      .then((pikachu) => {
        setPokemonInfo(pikachu);
      });
  };

  useEffect(fetchApi, [name]);

  return (
    <div>
      <h1>Pokemon {name}</h1>
      <p>{pokemonInfo ? pokemonInfo.name : ""}</p>
    </div>
  );
};

export default Detail;
