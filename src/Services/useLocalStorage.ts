

export const isLogIn = () => {
  
  const value = window.localStorage.getItem("UserAdmin");
  if (value !== null) {
    return true
  }
  else {
    return false
  }
}

export const useLocalStorage = (keyName:any, defaultValue:any) => {

    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
    console.log('that bai zoi admin');
    
    }
};

export const removeLocalStorage = (keyName:any) => {
   window.localStorage.removeItem(keyName);
};