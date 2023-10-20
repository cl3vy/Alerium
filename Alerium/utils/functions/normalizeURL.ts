const normalizeURL = (url: string): string => {
  let newURL = url;
  newURL = newURL.replaceAll("~-", "~");
  newURL = newURL.replaceAll("--", "-");
  return newURL;
};
export default normalizeURL;
