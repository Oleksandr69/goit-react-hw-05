import { useEffect, useState, Suspense } from "react";
import { useParams, Outlet } from "react-router-dom";
import apiReviews from "../../services/apiReviews";
import css from './MovieReviews.module.css';


const MovieReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    

        useEffect(() => {
            const fetchReviews = async () => {
                try {
                    const data = await apiReviews(movieId);
                    setReviews(data);
                    // console.log(data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchReviews();
        }, [movieId])
    
    if (reviews.length == 0) return (<p>We don't have any reviews for this movie.</p>);

    return (<ul className={css.reviewsList}>
    {reviews.map((card) => {

        return (
            <li key={card.id} className={css.reviewItem}>
                <p><b>{card.author}</b></p>
                <div className={css.reviewContent}>
                    <p>{card.content}</p>
                </div>         
        </li>);
    })}
    
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </ul>);
  }

export default MovieReviews;