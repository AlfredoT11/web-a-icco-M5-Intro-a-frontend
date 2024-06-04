import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {

    const {id, title} = useParams();
    
    const [isRequestDone, setIsRequestDone] = useState(false);
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        // Sustituir <api_key> por su api_key generada propia
        const request = fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=<api_key>`)
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                setMovieDetail(json);
                setIsRequestDone(true);
            })
            .catch(error => {
                console.log('An error ocurred');
                console.log(error);
            });
    }, [isRequestDone]);

    return (
        <>
            <h1>{title}</h1>
            <p>{movieDetail.overview}</p>
            <p>Rating: {movieDetail.vote_average}</p>
        </>
    )
}

export default MovieDetail;