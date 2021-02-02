import axios from "axios";

const apiModel = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default apiModel;
