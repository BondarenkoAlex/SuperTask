export const isObject = function isObject(obj) {
  return obj && typeof obj === 'object' && obj.constructor === Object;
};

export const isArray = function isArray(obj) {
  return obj && typeof obj === 'object' && obj.constructor === Array;
};

export const isFloat = function isFloat(obj) {
  return String(parseFloat(obj, 10)) === String(obj);
};

export const isInteger = function isInteger(obj) {
  return String(parseInt(obj, 10)) === String(obj);
};

export const isEmpty = function isEmpty(obj) {
  if (obj === null || obj === undefined) {
    return true;
  } else if (obj && typeof obj === 'object' && obj.constructor === Array) {
    return obj.length === 0;
  } else if (obj && typeof obj === 'object' && obj.constructor === Object) {
    return (Object.getOwnPropertyNames(obj).length === 0);
  } else if (typeof obj === 'string' || (typeof obj === 'object' && obj.constructor === String)) {
    return obj.length === 0;
  }

  /*isNumber*/
  else if (String(parseFloat(obj, 10)) === String(obj)) {
    return obj === 0;
  } else if (!obj) {
    return obj;
  }

  return false;
};

export const isString = function isString(obj) {
  return typeof obj == 'string' || (typeof obj == 'object' && obj.constructor === String);
};
