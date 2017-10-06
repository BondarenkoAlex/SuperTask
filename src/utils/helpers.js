export const toTime = function toTime(sec) {
  const secNum = parseInt(sec, 10);

  let hours = Math.floor(secNum / 3600);
  let minutes = Math.floor((secNum - (hours * 3600)) / 60);
  let seconds = secNum - (hours * 3600) - (minutes * 60);

  const hoursMem = hours;

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  let time = `${minutes}:${seconds}`;
  if (hoursMem > 0) {
    time = `${hours}:${time}`;
  }

  return time;
};

export const lastSubPath = function lastSubPath(path) {
  return path.split('/').pop();
};

export const buildKeyVideoStore = function buildKeyVideoStore(obj) {
  let {
    category,
    subcategory,
    showby,
    duration,
    period,
  } = obj;
  category = category || '';
  subcategory = subcategory || '';
  showby = showby
    ? parseInt(showby, 10)
    : '';
  duration = duration || '';
  period = period
    ? parseInt(period, 10)
    : '';
  return (`${category}|${subcategory}|${showby}|${duration}|${period}`);
};

