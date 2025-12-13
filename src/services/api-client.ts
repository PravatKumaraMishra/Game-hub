import axios from "axios";
export interface FetchData<T> {
  count: number;
  results: T[];
}
const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

export default apiClient;
