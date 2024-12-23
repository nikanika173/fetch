import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Pokemon Data</h1>
      {pokemon && (
        <div>
          <p>Name: {pokemon.name}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
};

export default App;
