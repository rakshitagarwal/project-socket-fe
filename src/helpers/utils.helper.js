import {
  ADMIN_USER_DATA,
  CMS_USER_DATA,
  CRM_USER_DATA,
  LS,
  SUPER_ADMIN_USER_DATA,
} from "./constants/constants.helper";
import { lazy } from "react";

// Logout actions
export const userLogoutActions = () => {
  localStorage.removeItem(LS.AUTH_TOKEN);
  localStorage.removeItem(LS.REF_TOKEN);
  localStorage.removeItem(LS.USER_INFO);
};

// Auth token
export const setAuthToken = (token) => {
  try {
    if (token) {
      localStorage.setItem(LS.AUTH_TOKEN, JSON.stringify(token));
    } else {
      localStorage.removeItem(LS.AUTH_TOKEN);
    }
  } catch (error) {
    console.log(
      ">>>>: src/helpers/utils_helper.js : setAuthToken -> error",
      error
    );
  }
};

export const getAuthToken = () => {
  let token = null;
  try {
    token =
      localStorage.getItem(LS.AUTH_TOKEN) != null
        ? JSON.parse(localStorage.getItem(LS.AUTH_TOKEN))
        : null;
  } catch (error) {
    token = null;
  }
  return token;
};

// Refresh token
export const setRefreshToken = (token) => {
  try {
    if (token) {
      localStorage.setItem(LS.REF_TOKEN, JSON.stringify(token));
    } else {
      localStorage.removeItem(LS.REF_TOKEN);
    }
  } catch (error) {
    console.log(
      ">>>>: src/helpers/utils_helper.js : setRefreshToken -> error",
      error
    );
  }
};

export const getRefreshToken = () => {
  let token = null;
  try {
    token =
      localStorage.getItem(LS.REF_TOKEN) != null
        ? JSON.parse(localStorage.getItem(LS.REF_TOKEN))
        : null;
  } catch (error) {
    token = null;
  }
  return token;
};

// User Info
export const setUserInfo = (userInfo) => {
  try {
    if (userInfo) {
      localStorage.setItem(LS.USER_INFO, JSON.stringify(userInfo));
    } else {
      localStorage.removeItem(LS.USER_INFO);
    }
  } catch (error) {
    console.log(
      ">>>>: src/helpers/utils_helper.js : setUserInfo -> error",
      error
    );
  }
};

export const getUserInfo = () => {
  let userInfo = null;
  try {
    userInfo =
      localStorage.getItem(LS.USER_INFO) != null
        ? JSON.parse(localStorage.getItem(LS.USER_INFO))
        : null;
  } catch (error) {
    userInfo = null;
  }
  return userInfo;
};

// Products
export const setProducts = (products) => {
  try {
    if (products) {
      localStorage.setItem(LS.PRODUCTS, JSON.stringify(products));
    } else {
      localStorage.removeItem(LS.PRODUCTS);
    }
  } catch (error) {
    console.log(
      ">>>>: src/helpers/utils_helper.js : setproducts -> error",
      error
    );
  }
};

export const getProducts = () => {
  let products = null;
  try {
    products =
      localStorage.getItem(LS.PRODUCTS) != null
        ? JSON.parse(localStorage.getItem(LS.PRODUCTS))
        : null;
  } catch (error) {
    products = null;
  }
  return products;
};

// User Data
export const getUserData = (userType) => {
  if (userType) {
    switch (userType) {
      case SUPER_ADMIN_USER_DATA.role:
        return SUPER_ADMIN_USER_DATA;

      case ADMIN_USER_DATA.role:
        return ADMIN_USER_DATA;

      case CMS_USER_DATA.role:
        return CMS_USER_DATA;

      case CRM_USER_DATA.role:
        return CRM_USER_DATA;

      default:
        return null;
    }
  }

  return null;
};

// User Preference
const DEFAULT_USER_PREFERENCE = {
  recordLimit: 10,
};

export const getUserPreference = () => {
  let userPreference = null;
  try {
    userPreference =
      localStorage.getItem(LS.USER_PREFERENCE) != null
        ? JSON.parse(localStorage.getItem(LS.USER_PREFERENCE))
        : null;
  } catch (error) {
    userPreference = null;
  }
  if (!userPreference) {
    localStorage.setItem(
      LS.USER_PREFERENCE,
      JSON.stringify(DEFAULT_USER_PREFERENCE)
    );
    userPreference = DEFAULT_USER_PREFERENCE;
  }
  return userPreference;
};

export const setUserPreference = (data) => {
  let userPreference = null;
  try {
    userPreference =
      localStorage.getItem(LS.USER_PREFERENCE) != null
        ? JSON.parse(localStorage.getItem(LS.USER_PREFERENCE))
        : null;
  } catch (error) {
    userPreference = DEFAULT_USER_PREFERENCE;
  }
  localStorage.setItem(
    LS.USER_PREFERENCE,
    JSON.stringify({ ...userPreference, ...data })
  );
  return userPreference;
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0 || !Number.isInteger(bytes)) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export const getRemainingLanguages = (languages, languageArray) => {
  return languages.filter((language) => {
    return !languageArray?.some(
      (languageItem) => languageItem.language_code === language.language_code
    );
  });
};

export function lazyImport(factory, name) {
  return Object.create({
    [name]: lazy(() => factory().then((module) => ({ default: module[name] }))),
  });
}
export const emailValidation = (email) => {
  const regex =
  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  return regex.test(email)
};
