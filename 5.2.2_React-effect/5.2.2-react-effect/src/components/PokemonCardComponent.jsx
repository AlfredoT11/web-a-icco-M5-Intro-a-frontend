import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

TypeScript


const PokemonCardComponent = (props) => {
    return (
        <div className="col p-2">  
            <div className="card" style={{ width: '18rem' }}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.idPokemon}.png`} className="card-img-top" alt="..." />
                <div className="card-body">
                <Link to={`/pokemonDetail/${props.idPokemon}/${props.nombre}`}>
                    <h5 className="card-title">{props.nombre}</h5>
                </Link>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Ataque: 5</li>
                    <li className="list-group-item">Defensa: 10</li>
                    <li className="list-group-item">Velocidad: 15</li>
                </ul>
            </div>
        </div>
        )
}

PokemonCardComponent.propTypes = {
    idPokemon: PropTypes.number,
    nombre: PropTypes.string
}

export default PokemonCardComponent;