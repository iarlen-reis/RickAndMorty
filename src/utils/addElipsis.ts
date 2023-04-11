export const addEllipsis = (text: string) => {
  if (text.length <= 16) return text;

  return text.substring(0, 16) + "...";
};
