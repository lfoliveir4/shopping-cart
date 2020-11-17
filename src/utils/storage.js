export const SetStorage = (token, value) =>
  localStorage.setItem(token, JSON.stringify(value));

export const GetStorage = (token) => JSON.parse(localStorage.getItem(token));
