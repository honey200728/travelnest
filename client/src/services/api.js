import axios from "axios";

const API = axios.create({
  baseURL: "https://travelnest-api.onrender.com/api",
});

export default API;