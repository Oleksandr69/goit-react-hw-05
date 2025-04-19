import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './MovieList.module.css'


const MovieList = ({ moviesList }) => {
  console.log(moviesList);
  // return;
  
  // const [result, setResult] = useState([]);
  // const [search, setSearch] = useState('');
  // const [pegeMax, setPageMax] = useState(1);
  
  // useEffect (() => {
  //   async function fetchGallery(onSetResult) {
  //     try {
  //       // setLoading(true);
  //       // setErrBul(false);
  //       // setPerPage(15);
  //       const data = await fetchData();
  //       console.log(data);
  //       onSetResult(data.results);
  //       // setPageMax(data.total_pages);
  //       // setResult(prev => [...prev, ...data.results]);

  //     // if (data.total_pages == 0) {
  //     //   // notify("Sorry. Nothing found!");
  //     //   alert("Sorry. Nothing found!");
  //     // }
  //     } catch (error) {
  //         console.log(error);
  //       // setErrBul(true);
  //       // notify(error.message);
  //     } finally {
  //           // setLoading(false);
  //       }
  //   };
  //   fetchGallery();
  
  // }, [onSetResult]);

  return (<ul className={css.gallery}>
    {moviesList.map((card) => {
      // console.log(card.poster_path);
            return (<li key={card.id} className={css.galleryItem}>
              {/* <div className={css.galleryLink}> */}
                <Link to={'movies/' + card.id.toString()} className={css.galleryLink}>
                   <img src={'https://image.tmdb.org/t/p/w500' + card.poster_path} alt={card.title} className={css.galleryImage} />
                </Link>
              {/* </div> */}
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
 
    //  console.log(search);
}

export default MovieList;