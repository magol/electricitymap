const Cookies = require('js-cookie');

const saveKey = (key, val) => {
  if (window.isCordova) {
    window.localStorage.setItem(key, val);
  } else {
    Cookies.set(key, val, { expires: 365 });
  }
};

const getKey = (key) => {
  if (window.isCordova) {
    return window.localStorage.getItem(key);
  } else {
    return Cookies.get(key);
  }
};

module.exports = {
  saveKey,
  getKey,
};
