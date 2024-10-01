export const parseHostname = (url: string) => {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch {
    return "None";
  }
};
