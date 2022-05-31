import axios from "axios";
export default axios.create({
  baseURL: "https://60a256f3745cd70017576b8c.mockapi.io/api",
  headers: {
    "Content-type": "application/json"
  }
});