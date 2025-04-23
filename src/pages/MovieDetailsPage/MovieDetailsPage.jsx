import { useEffect, useState, useRef, Suspense } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom';
import fetchById from "../../services/apiById";
import css from './MovieDetailsPage.module.css';
import  BackLink  from "../../components/BackLink/BackLink";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.list || '/movies');

    // console.log(location);
    // console.log(backLinkRef);


    useEffect(() => {

        const fetchMovie = async () => {
            try {
                const data = await fetchById(movieId);
                setMovie(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovie();
    }, [movieId])
         
    // console.log(movie);
    if (!movie) return <p>Loading details page...</p>

    const genre = () => movie.genres.map((item) => item.name).join(", ");


    return (
    <>
        <div className={css.containerMovie}>

            <BackLink to={backLinkRef.current} className={css.backLink}>Go back</BackLink>
            
            <div className={css.infoMovie}>
                <div>
                    <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt={movie.title} className={css.movieImage} />
                </div>
                <div>
                    <h2>{movie.title} ({movie.release_date})</h2>
                    <p><b>User Score:</b>  {Math.round(movie.vote_average * 10)}%</p>
                    <p><b>Overview:</b><br />{movie.overview}</p>
                    <p><b>Genres:</b><br/>{ genre() }</p>
                </div>
            </div>
        </div>
           
        <div className={css.detailsList}>
            <p> Additional information:</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
        </div>
        <Suspense fallback={<p>Loading additional...</p>}>
            <Outlet />
        </Suspense>
    </>
    )
            
    };


export default MovieDetailsPage;