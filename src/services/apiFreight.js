import axios from "axios";

const apiFreight = axios.create({
  baseURL: "http://localhost:3333",
});

export default apiFreight;
