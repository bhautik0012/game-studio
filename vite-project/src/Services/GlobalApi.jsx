import axios from "axios";

const key = "638e3e6adbd4471784c7d067a36a0d88";
const axiosCreate = axios.create({
  baseURL: `https://api.rawg.io/api`,
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) => axiosCreate.get('/games?key='+key+'&genres='+id)
export default {
  getGenreList, 
  getAllGames,
  getGameListByGenreId
};
