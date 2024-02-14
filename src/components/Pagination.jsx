import Button from "./Button";
import { modifySearchParam } from "../url.pure";
export default ({previousUrl, nextUrl, setUrlToFetch, urlToFetch, limit, count}) => (
  <footer>
    {previousUrl && (
      <>
        <Button
          onClick={() =>
            setUrlToFetch((url) => modifySearchParam(url, "offset", 0))
          }
        >
          {"<<"} Premier
        </Button>
        <Button onClick={() => setUrlToFetch(previousUrl)}>
          {"<"} Précédent
        </Button>
      </>
    )}

    {Math.trunc(
      new URLSearchParams(new URL(urlToFetch).search).get("offset") / limit
    ) + 1}

    {nextUrl && (
      <>
        <Button onClick={() => setUrlToFetch(nextUrl)}>Suivant {">"}</Button>
        <Button
          onClick={() =>
            setUrlToFetch((url) =>
              modifySearchParam(url, "offset", count - limit)
            )
          }
        >
          Dernier {">>"}
        </Button>
      </>
    )}
  </footer>
);
