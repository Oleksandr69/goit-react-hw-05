import axios from 'axios';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRiNTY5MWU1MTNiOGVkOGRlZDIzMGQ0Mzk3OTM0MCIsIm5iZiI6MTc0NDg0Mjk5NS43NDIsInN1YiI6IjY4MDAzMGYzYjExM2ZmODcyM2Q5MjVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Xm3UtVyDJZMOg8QkYgV2yWMGaevd387kYGjdP15H7g\
      ',
    // accept: 'application/json',
  },
};
const fetchMovie = async item => {
  const urlSearch = `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${item}&language=en-US&page=1`;
  try {
    const response = await axios.get(urlSearch, options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default fetchMovie;
