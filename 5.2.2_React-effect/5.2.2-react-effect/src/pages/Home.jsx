import { useEffect, useState } from "react";
import PokemonCardComponent from './../components/PokemonCardComponent'
import { Link } from 'react-router-dom'

const Home = () => {
    const [count, setCount] = useState(0);
    const [listaPokemones, setListaPokemons] = useState([{name: 'Pikachu', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}]);
  
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
        console.log('Error al consumir el endpoint');
      });
    }, [count]);
  
    return (
      <>
        <div className="container">
          <div className="row">
            <h1>Pokedex</h1>
            <button onClick={(e) => {setCount(count + 1)}}>Presióname</button>
            <p><Link to='/about'>About us</Link></p>
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

export default Home;