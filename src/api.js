import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://dead-puce-abalone-cap.cyclic.app/api",
});

export default gamesApi;
