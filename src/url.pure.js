export const modifySearchParam = (url, id, value) => {
  const search = new URLSearchParams(new URL(url).search);
  search.set(id, value);
  return `${url.slice(0, url.indexOf("?"))}?${search.toString()}`;
};
