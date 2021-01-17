export function setUserValue(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
};

export function getUser(key) {
  return JSON.parse(localStorage.getItem(key));
} 

export function setScoreValue(key, value) {
  return localStorage.setItem(key, JSON.stringify(Number(value)));
};

export function getScoreValue(key) {
  return JSON.parse(localStorage.getItem(key));
};