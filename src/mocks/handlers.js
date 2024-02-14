import { HttpResponse, http } from "msw";

import data from "./fixtures/getPokemonAll.json";

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

export const handlers = {
  getPokemon: http.get(apiUrl, ({ request }) => {
    const dataCloned = structuredClone(data);
    const limit = parseInt(
      new URLSearchParams(new URL(request.url).search).get("limit")
    );
    const offset = parseInt(
      new URLSearchParams(new URL(request.url).search).get("offset")
    );

    dataCloned.count = dataCloned.results.length;

    dataCloned.results = dataCloned.results.slice(offset, offset + limit);
    dataCloned.next =
      offset < dataCloned.count - limit
        ? `${apiUrl}?offset=${offset + limit}&limit=${limit}`
        : null;

    dataCloned.previous =
      offset >= limit
        ? `${apiUrl}?offset=${offset - limit}&limit=${limit}`
        : null;

    return HttpResponse.json(dataCloned);
  }),
};
