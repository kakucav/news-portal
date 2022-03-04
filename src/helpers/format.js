export const formatDate = (dateToFormat) => {
  const date = new Date(dateToFormat);

  return date.toLocaleString();
};
