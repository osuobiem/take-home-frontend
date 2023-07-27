export const randomID = () => {
  return `id-${Math.floor(Math.random() * 1000)}-${Math.floor(
    Math.random() * 1000
  )}`;
};
