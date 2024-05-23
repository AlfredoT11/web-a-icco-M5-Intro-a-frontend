import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCardComponent from './components/PokemonCardComponent'

function App() {
  const [count, setCount] = useState(0);
  const [listaPokemones, setListaPokemons] = useState([{name: 'Pikachu'}]);

  useEffect(() => {
    console.log('Hook de effect ejecutándose');
    // endpoint a consumir: https://pokeapi.co/api/v2/pokemon
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      // Se está creando un nuevo arreglo, por lo tanto, React piensa que los valores fueron modificados.
      setListaPokemons(json.results);
    }).catch(error => {
      console.log('Error al consumir el endpoit');
    });
  }, [count]);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Pokedex</h1>
          <button onClick={(e) => {setCount(count + 1)}}>Presióname</button>
        </div>
        <div className="row">{
          listaPokemones.map((pokemon, index) => {
            const idPokemon = pokemon.url.split('/')[6];
            return (<PokemonCardComponent nombre={pokemon.name} idPokemon={idPokemon} />)
          })
        }
        </div>
      </div>





    </>
  )
}

export default App
