
import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import fetchSearch from "../../services/apiSearch";
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
// import css from './MoviesPage.module.css'


const MoviesPage = () => {

  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();
  console.log(location)
  
  // const query = searchParams.get('search');
  // console.log(query);
  // setSearch(query);
  const handleNewSearch = searchNew => {
    setSearch(searchNew);
    setSearchResult([]);
    searchParams.set('search', searchNew);
    setSearchParams(searchParams);

  };
  
  useEffect(() => {

        async function fetchGallery() {
          try {
            const data = await fetchSearch(search);
            setSearchResult(data.results);   
          } catch (error) {
              console.log(error);
          } finally {
                // setLoading(false);
            }
        };
        fetchGallery();
      
      }, [search]);
    

    return (
      <>
        <SearchForm
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