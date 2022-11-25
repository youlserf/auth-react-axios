import axios from "axios";

const url = "https://http-nodejs-production-78a7.up.railway.app/api/v1";

const instance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
