import { useEffect, useState,Suspense } from "react";
import { useParams, Outlet } from "react-router-dom";
import apiCast from "../../services/apiCast";
import css from './MovieCast.module.css';

const MovieCast = () => {
        const [cast, setCast] = useState([]);
        const { movieId } = useParams();

        useEffect(() => {
            const fetchCast = async () => {
                try {
                  const data = await apiCast(movieId);
                  // console.log(data);
                  setCast(data.filter(item => item.profile_path));
                    
                } catch (error) {
                    console.log(error);
                }
            };
            fetchCast();
        }, [movieId])
  
  if (cast.length == 0) return (<p>We don't have any information for this movie.</p>);
    
    return (<ul className={css.castGallery}>
    {cast.map((card) => {

      return (<li key={card.id} className={css.castItem}>
           <div className={css.castDl}>
                <img src={'https://image.tmdb.org/t/p/w500' + card.profile_path} alt={card.name} className={css.castImage} />
                <div>
                  <p className={css.castInfo}>{card.name}</p>
                </div>
            </div>
        </li>);
    })}
    
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </ul>);
  }

export default MovieCast;