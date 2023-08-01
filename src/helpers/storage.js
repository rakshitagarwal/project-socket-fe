const storagePrefixAccess = "access_token";
const storageUUID = "tbd_frontend_uuid";
const storageUserInfo = "user_info";
const storagePrefixRefresh = "refresh_token";
const storage = {
  getToken: () => {
    const token = window.localStorage.getItem(storagePrefixAccess);
    return token ? token : undefined;
  },
  getUUID: () => {
    return JSON.parse(window.localStorage.getItem(storageUUID));
  },
  getRefToken: () => {
    return JSON.parse(window.localStorage.getItem(storagePrefixRefresh));
  },
  setToken: (token) => {
    window.localStorage.setItem(storagePrefixAccess, JSON.stringify(token));
  },
  setRefToken: (token) => {
    window.localStorage.setItem(storagePrefixRefresh, JSON.stringify(token));
  },
  setUserData: (data) => {
    window.localStorage.setItem(storageUserInfo, JSON.stringify(data));
  },
  setUUID: (uuid) => {
    window.localStorage.setItem(storageUUID, JSON.stringify(uuid));
  },
  clear: () => {
    window.localStorage.removeItem(storagePrefixAccess);
    window.localStorage.removeItem(storageUUID);
    window.localStorage.removeItem(storagePrefixRefresh);
  },
};
export default storage;
