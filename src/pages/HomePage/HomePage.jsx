import { Outlet} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import fetchData from '../../services/apiData';
import { Suspense } from 'react';
import css from './HomePage.module.css';

const HomePage = () => {

  const [result, setResult] = useState([]);
  // const location = useLocation;
  // console.log(location);
    
          useEffect (() => {
            async function fetchGallery() {
              try {
                const data = await fetchData();
                  // console.log(data.results);
                  setResult(data.results);
                // setSearchResult(prev => [...prev, ...data.results]);
                // setPageMax(data.total_pages);
                // setResult(prev => [...prev, ...data.results]);
        
              // if (data.total_pages == 0) {
              //   // notify("Sorry. Nothing found!");
              //   alert("Sorry. Nothing found!");
              // }
              } catch (error) {
                  console.log(error);

              } finally {
                    // setLoading(false);
                }
            };
            fetchGallery();
          
          }, []);
        
    return (
        <>
            
          <h2 className={css.trending} >Trending today</h2>
          <MovieList
          moviesList={result}
          />
            
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>

        </>
    )
};

export default HomePage;



