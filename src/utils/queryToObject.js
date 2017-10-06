export default function (query) {
  let output = {};
  let split = query.split('?')[1];
  split = split
    ? split.split('&')
    : query.split('&');
  split.map((elem) => elem.split('=').reduce((name, value) => output[name] = value));
  return output;
}
