import { useState } from "react";
import {Link} from 'react-router-dom'

const MovieCard = ({titleName, posterPath, movieId}) => {

    const [posterPathImageUrl, setPosterPathImageUrl] = useState(`https://image.tmdb.org/t/p/w500/${posterPath}`);


    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={posterPathImageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/movieDetail/${movieId}/${titleName}`}>{titleName}</Link></h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
        </div>
    )
}

export default MovieCard;