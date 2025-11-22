import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.gamebrain.co/v1",
  params: {
    "api-key": "c4cc3518caae4698b6a0e538483e2d05",
  },
});

export default apiClient;
