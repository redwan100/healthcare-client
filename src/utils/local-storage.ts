export const setToLocalStorage = (key: string, token: string) => {
  if (!key || window === undefined) {
    return "";
  }

  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || window === undefined) {
    return "";
  }

  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  if (!key || window === undefined) {
    return "";
  }
 localStorage.removeItem(key)
 
};
