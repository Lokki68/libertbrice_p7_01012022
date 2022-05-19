export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.length === 0)
  );
};

const timeDiff = {
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000
}


export const timeAgo = (value) => {
  const now = new Date();
  const then = new Date(value).getTime();
  const diff = now - then;

  if(diff < timeDiff.minute) {
    return 'il y a quelques secondes';
  } else if (diff < timeDiff.hour) {
    return `il y a quelques minutes`;
  } else if (diff < timeDiff.day) {
    return `il y a quelques heures`;
  } else if (diff < timeDiff.week) {
    return `il y a quelques jours`;
  } else if (diff < timeDiff.month) {
    return `il y a quelques semaines`;
  } else if (diff < timeDiff.year) {
    return `il y a quelques mois`;
  } else {
    return `il y a plus d'un ans`;
  }


}

export const dateParser = (value) => {
  let option = {
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  let timestamp = Date.parse(value);

  let date = new Date(timestamp).toLocaleString('fr-FR', option);

  return date.toString();
};
