export const formatDate = (dateToFormat) => {
  const date = new Date(dateToFormat);

  return date.toLocaleString();
};

export const truncateIfLonger = (string, limit) => {
  if (!string) return "No title/description";

  if (string.length < limit) return string;

  return `${string.substring(0, limit - 3)}...`;
};
