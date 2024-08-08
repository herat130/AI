class localStorageHelper {
  private checkLocalStorage = () => {
    try {
      return window?.localStorage ? true : false;
    } catch (error) {
      throw new Error(
        "Local Storage not available in this browser \n" + navigator.userAgent
      );
    }
  };

  public setLocalStorageItem = ({
    key,
    value,
  }: {
    key: string;
    value: any;
  }) => {
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

  public getLocalStorageItem = ({ key }: { key: string }) => {
    if (this.checkLocalStorage()) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : value;
    }
  };

  public removeFromLocalStorage = (key: string) => {
    if (!key) {
      throw new Error("Key is required");
    }
    localStorage.removeItem(key);
  };

  public clearLocalSorage = () => {
    this.checkLocalStorage() && localStorage.clear();
  };
}

export const lsHelper = new localStorageHelper();
