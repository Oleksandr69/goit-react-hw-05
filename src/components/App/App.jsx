import './App.css';
import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom'; 
import Navigation from '../Navigation/Navigation';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

// import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import HomePage from '../../pages/HomePage/HomePage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
// import MovieList from '../MovieList/MovieList';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieList = lazy(() =>import('../MovieList/MovieList'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));

function App() {

  return (
    <div className='container'>
      <Navigation />
      <Suspense fallback={<div>LOADING PAGE</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} >
              {/* <Route path='list' element={<MovieList />} /> */}
          </Route>
          <Route path='/movies' element={<MoviesPage />} />
           
          
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}  />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/movies/*' element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App;
