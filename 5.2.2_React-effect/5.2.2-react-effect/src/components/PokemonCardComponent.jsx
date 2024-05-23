const PokemonCardComponent = (props) => {
    return (
        <div className="col p-2">          
            <div className="card" style={{ width: '18rem' }}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.idPokemon}.png`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
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

export default PokemonCardComponent;