
import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import fetchMovie from "../../services/apiSearch";
import Header from '../../components/Header/Header';
import MovieList from '../../components/MovieList/MovieList';
// import css from './MoviesPage.module.css'
// import toast, { Toaster } from 'react-hot-toast';
// const notify = (text) => toast(text);

const MoviesPage = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [search, setSearch] = useState('');

    console.log(search);

    const handleNewSearch = searchNew => {
    setSearch(searchNew);
    setSearchResult([]);
    // setPage(1);
    };

    // setSearch('');
    // setSearchResult([])

      useEffect (() => {
        async function fetchGallery() {
          try {
            // setLoading(true);
            // setErrBul(false);
            // setPerPage(15);
            const data = await fetchMovie(search);
              console.log(data.results);
              setSearchResult(data.results);
            // setSearchResult(prev => [...prev, ...data.results]);
            // setPageMax(data.total_pages);
            // setResult(prev => [...prev, ...data.results]);
    
          } catch (error) {
              console.log(error);
            // setErrBul(true);
            // notify(error.message);
          } finally {
                // setLoading(false);
            }
        };
        fetchGallery();
      
      }, [search]);
    

    return (
        <>
            <Header
                onSearch={handleNewSearch} />
            
            <MovieList
                moviesList={searchResult}
            />

            <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
            </Suspense>

        </> 
    )

}
export default MoviesPage;