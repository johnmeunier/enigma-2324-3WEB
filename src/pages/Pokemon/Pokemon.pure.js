export const modifySearchParam = (url, id, value) => {
  const search = new URLSearchParams(url);
  search.set(id, value);
  return decodeURIComponent(search.toString());
}