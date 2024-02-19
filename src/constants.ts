import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://alexandermokeichuk-js23-default-rtdb.europe-west1.firebasedatabase.app",
});

export default axiosApi;