import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}
function useGames() {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const constroller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", { signal: constroller.signal })
      .then((res) => {
        setGame(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => constroller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;
