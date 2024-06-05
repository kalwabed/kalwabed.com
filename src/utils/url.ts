export function removeHttp(url?: string) {
  if (!url) return "";

  const regex = /^(?:https?:\/\/)?(?:www\.)?/i;
  return url.replace(regex, "");
}
