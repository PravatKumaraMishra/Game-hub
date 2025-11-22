import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  image: string;
  short_description: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}
function useGames() {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const constroller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", { signal: constroller.signal })
      .then((res) => setGame(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => constroller.abort();
  }, []);

  return { games, error };
}

export default useGames;
