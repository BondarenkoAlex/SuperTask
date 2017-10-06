export default function objectToQuery(obj) {
  let queryString = '';
  if (Object.keys(obj).length) {
    queryString = Object
      .keys(obj)
      .map(k => (k + '=' + obj[k]))
      .reduce((a, b) => (a + '&' + b, ''));
  }

  return queryString.slice(1);
};

