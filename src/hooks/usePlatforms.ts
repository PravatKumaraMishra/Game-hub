import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { type FetchData } from "../services/APIClient";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery<FetchData<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: platforms,
  });
export default usePlatforms;
