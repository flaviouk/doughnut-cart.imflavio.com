export const getLocalStorage = constant => JSON.parse(localStorage.getItem(constant))

export const setLocalStorage = (constant, data) =>
  localStorage.setItem(constant, JSON.stringify(data))
