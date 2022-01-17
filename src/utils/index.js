const OBJECT = 'object';
const ALPHANUMERIC_PATTERN = /^[a-z0-9]+$/i;

const nullOrUndefined = (val) => val === null || val === undefined;

const isNumber = (val) =>
  !isNaN(val) && isFinite(val) && typeof val === 'number';

const isObject = (checkObj) =>
  checkObj && typeof checkObj === 'object' && Object.keys(checkObj).length > 0;

const isArray = (arr) => Array.isArray(arr);

const isAlphaNumeric = (val) => ALPHANUMERIC_PATTERN.test(val);

const range = (start, end) => {
  if (
    nullOrUndefined(start) ||
    !isNumber(start) ||
    nullOrUndefined(end) ||
    !isNumber(end)
  )
    return [];

  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
};

const deepEqual = (x, y) => {
  if (x === y) {
    return true;
  } else if (
    typeof x == OBJECT &&
    x != null &&
    typeof y == OBJECT &&
    y != null
  ) {
    if (Object.keys(x).length !== Object.keys(y).length) return false;

    for (let prop in x) {
      if (Object.prototype.hasOwnProperty.call(y, prop)) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  } else return false;
};

const ACCEPTED_IMAGE_EXTENTIONS = '.jpg, .jpeg, .png, .bmp';

export {
  range,
  nullOrUndefined,
  isNumber,
  isObject,
  isArray,
  isAlphaNumeric,
  deepEqual,
  ACCEPTED_IMAGE_EXTENTIONS,
};
