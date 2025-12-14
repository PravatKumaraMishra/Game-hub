import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { type FetchData } from "../services/APIClient";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchData<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: genres,
  });

export default useGenres;
