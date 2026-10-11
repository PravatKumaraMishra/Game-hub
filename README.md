# Game Hub

A React and TypeScript game discovery application using the RAWG API, Chakra UI, and TanStack Query.

## Features

- Search games by name.
- Filter by genre and platform.
- Change sorting and browse an infinite-scrolling game grid.
- View ratings, platform icons, and loading skeletons.
- Toggle the color mode.

## Requirements

- Node.js `^20.19.0 || >=22.12.0` and npm.
- A RAWG API key for live game data.

## Run locally

```sh
git clone https://github.com/PravatKumaraMishra/Game-hub.git
cd Game-hub
npm ci
```

Create `.env.local` in the project root:

```dotenv
VITE_RAWG_API_KEY=your_rawg_api_key
```

Restart Vite after changing the key. Search for a game, select a genre or platform, and use the sorting menu to refine the results.

```sh
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Available commands

| Command | Script |
| --- | --- |
| `npm run dev` | `vite` |
| `npm run build` | `tsc -b && vite build` |
| `npm run lint` | `eslint .` |
| `npm run preview` | `vite preview` |

`npm run preview` serves the output of `npm run build`; it does not build the project itself.

## Project structure

- `src/components/`: navigation, filters, game cards, and grid.
- `src/hooks/`: game, genre, and platform queries.
- `src/services/APIClient.ts`: RAWG requests.
- `src/theme.ts`: Chakra theme.

## Notes

RAWG data requires network access and a valid key. A `VITE_` variable is included in browser code; use a key intended for client use and follow the provider’s usage rules. If results fail to load, inspect the network response and key configuration.
