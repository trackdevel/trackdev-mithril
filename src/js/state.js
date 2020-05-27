import { ps } from './pubsub';
import CourseCollection from './models/courseCollection';

export const LocalStorage = {};

// Add convenience JSON parse/stringigy functions to Global
LocalStorage.setItem = function (key, obj) {
  window.localStorage.setItem(key, JSON.stringify(obj));
  ps.publish('localstorage.set.' + key, { obj });
};

LocalStorage.getItem = function (key) {
  const str = window.localStorage.getItem(key);
  if (str) {
    return JSON.parse(str);
  }
};

LocalStorage.hasItem = function (key) {
  return window.localStorage.hasOwnProperty(key);
};

LocalStorage.removeItem = function (key) {
  window.localStorage.removeItem(key);
  ps.publish('localstorage.remove', key);
};

// Local state

export const LocalState = {
    orders: CourseCollection()
};
