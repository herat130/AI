class localStorageHelper {
  checkLocalStorage = () => {
    return window?.localStorage ? true : false;
  };

  setLocalStorageItem = ({ key, value }: { key: string; value: any }) => {
    if (!key) {
      throw new Error("please provide a key");
    }
    if (!value) {
      throw new Error("please provide a value");
    }
    if (this.checkLocalStorage()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  getLocalStorageItem = ({ key }: { key: string }) => {
    if (this.checkLocalStorage()) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : value;
    }
  };

  removeFromLocalStorage = (key: string) => {
    if (!key) {
      throw new Error("Key is required");
    }
    localStorage.removeItem(key);
  };
}

export const lsHelper = new localStorageHelper();
