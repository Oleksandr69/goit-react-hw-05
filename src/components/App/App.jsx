// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import clsx from 'clsx';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import HomePage from '../../pages/HomePage/HomePage'

function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route />
          <Route />
        </Routes>  
    </>
  )
}

// Ключ API 164b5691e513b8ed8ded230d43979340
// Токен доступу для читання API  
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRiNTY5MWU1MTNiOGVkOGRlZDIzMGQ0Mzk3OTM0MCIsIm5iZiI6MTc0NDg0Mjk5NS43NDIsInN1YiI6IjY4MDAzMGYzYjExM2ZmODcyM2Q5MjVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Xm3UtVyDJZMOg8QkYgV2yWMGaevd387kYGjdP15H7g

export default App;
