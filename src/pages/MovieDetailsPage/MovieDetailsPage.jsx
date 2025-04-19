import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchById from "../../services/apiById";
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await fetchById(movieId);
                console.log(data);
                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovie();
    }, [movieId])
    console.log(movie);
    return (
        <div className={css.ConyainerMovie}>
            <div>GO BACK</div>
            <div className={css.infoMovie}>
                <div>
                    <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt={movie.title} className={css.movieImage} />
                </div>
                <div>
                    <h2>{movie.title}</h2>
                    <p>{ movie.overview}</p>
                </div>
            </div>


        </div>
        // <p>MovieDetailsPage + {movieId}</p>
    )
}

export default MovieDetailsPage;