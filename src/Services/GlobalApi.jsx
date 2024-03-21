import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "2d67c49e37b665b0d0e2c3a6f5fbc286";
const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

// const getMovieByGenreId = (id) => {
//
// };
const getMovieByGenreId = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_geners=${id}`);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
