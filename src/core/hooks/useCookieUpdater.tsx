import { useEffect } from 'react';
import Cookies from 'js-cookie';

interface CookieItem {
  key: string;
}

interface CookieValue {
  [key: string]: string | null;
}

export function useCookieUpdater(cookieArray: CookieItem[]) {
  useEffect(() => {
    if (cookieArray && cookieArray.length > 0) {
      cookieArray.forEach(cookieItem => {
        const initialCookieValue = Cookies.get(cookieItem.key);
        if (!initialCookieValue) {
          Cookies.set(cookieItem.key, '');
        }
      });
    }
  }, [cookieArray]);

  const setCookieValues = (valuesArray: CookieValue[]) => {
    valuesArray.forEach(valueObj => {
      const key = Object.keys(valueObj)[0];
      let value = valueObj[key];
      if (value === null) {
        value = '';
      }
      Cookies.set(key, value);
    });
  };

  return setCookieValues;
}

 