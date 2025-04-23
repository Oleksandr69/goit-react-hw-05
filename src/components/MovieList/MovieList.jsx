import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'


const MovieList = ({ moviesList }) => {
  const location = useLocation();

  return (<ul className={css.gallery}>

      {moviesList.map((card) => {

      return (<li key={card.id} className={css.galleryItem}>
        <Link to={'/movies/' + card.id.toString()} state={{ list: location }} className={css.galleryLink}>
                <img src={'https://image.tmdb.org/t/p/w500' + card.poster_path} alt={card.title} className={css.galleryImage} />
              </Link>
              <div className={css.galleryDl}>
                <div>
                  <p className={css.galleryInfo}>title: {card.title}</p>
                </div>
                <div>
                  <p className={css.galleryInfo}>popularity: {card.popularity}</p>
                </div>
              </div>
        </li>);
    })}
    
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </ul>);
  }

export default MovieList;