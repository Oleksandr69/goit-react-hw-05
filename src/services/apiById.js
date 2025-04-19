import axios from 'axios';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRiNTY5MWU1MTNiOGVkOGRlZDIzMGQ0Mzk3OTM0MCIsIm5iZiI6MTc0NDg0Mjk5NS43NDIsInN1YiI6IjY4MDAzMGYzYjExM2ZmODcyM2Q5MjVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Xm3UtVyDJZMOg8QkYgV2yWMGaevd387kYGjdP15H7g\
      ',
    // accept: 'application/json',
  },
};

const fetchById = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default fetchById;
