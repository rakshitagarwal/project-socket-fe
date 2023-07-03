export default function getTimeFormated(utc) {
  try {
    const utcDate = new Date(utc);
    const date = utcDate.getDate();
    const month = utcDate.getMonth();
    const year = utcDate.getFullYear();
    const time = utcDate.getTime();
    const fullDate = date + "/" + month + "/" + year + "," + time;
    return fullDate;
  } catch (error) {
    return error;
  }
}

export const emailValidation = (email) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email !== "" && regex.test(email) === false) {
    return true;
  }
  return false;
};

export const getUserData = () => {
  let user = null;
  try {
    user =
      localStorage.getItem("userInfo") != null
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : getUserData -> error", error);
    user = null;
  }
  return user;
};

export const setUserData = (user) => {
  try {
    if (user) {
      localStorage.setItem("userInfo", JSON.stringify(user));
    } else {
      localStorage.removeItem("userInfo");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setUserData -> error", error);
  }
};

export const getToken = () => {

  let token = null;
  try {
    token =
      localStorage.getItem("accessToken");
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : getToken -> error", error);
    token = null;
  }
  return token;
};

export const setToken = (token) => {
  try {
    if (token) {
   
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setToken -> error", error);
  }
};
