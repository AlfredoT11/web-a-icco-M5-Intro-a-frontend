import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {

    const params = useParams();

    const [detailPokemon, setDetailPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
            .then(response => response.json())
            .then(responseJson => setDetailPokemon(responseJson))
            .catch(error => console.log('Ocurrió un error'));
    })

    return (<>
        <h1>Name: {params.name}</h1>
        <table className="table" >
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {
                    detailPokemon.stats?.map((stat, index) => {
                        return (
                            <tr>
                                <td>{stat.stat.name}</td>
                                <td>{stat.base_stat}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default PokemonDetail;