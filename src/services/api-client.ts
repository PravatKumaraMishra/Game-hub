import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f6750362b20645f4994825acd3e7031a",
  },
});

export default apiClient;
