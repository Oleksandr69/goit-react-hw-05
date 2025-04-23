
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import fetchSearch from "../../services/apiSearch";
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
// import css from './MoviesPage.module.css'


const MoviesPage = () => {

  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});

  const search = searchParams.get('search') || '';
  // console.log(searchParams.get('search'));

  const handleNewSearch = searchNew => {
     setSearchParams({ search: searchNew });
  };
  
  useEffect(() => {

        async function fetchGallery() {
          try {
            const data = await fetchSearch(search);
            setSearchResult(data.results);
            
            // console.log(data.results);
            // console.log(search);
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
            
        {searchResult.length > 0 && <MovieList
          moviesList={searchResult}
        />}

        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>

      </> 
    )

}
export default MoviesPage;