export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.length === 0)
  );
};

export const dateParser = (value) => {
  let option = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  let timestamp = Date.parse(value);

  let date = new Date(timestamp).toLocaleDateString('fr-FR', option);

  return date.toString();
};
