import { ERROR, SUCCESS } from "@/helpers/constants/labels.constants";

const { createAsyncThunk } = require("@reduxjs/toolkit");
const {
  userLoginHttp,
  userVerifyHttp,
  userRegisterHttp,
  userLogoutHttp,
} = require("./user.httpCalls");

export const userLogin = createAsyncThunk("user/login", async (params, cb) => {
  try {
    const { email, cb } = params;
    const res = await userLoginHttp({ email });
    if (res.success) {
      cb(SUCCESS, res);
    } else {
      cb(ERROR, res);
    }
    return res;
  } catch (error) {
    return error;
  }
});

export const userVerify = createAsyncThunk("user/verify", async (params) => {
  const { email, otp, cb } = params;
  try {
    const res = await userVerifyHttp({ email, otp });
    if (res.success) {
      cb(SUCCESS, res);
    } else {
      cb(ERROR, res);
    }
    return res;
  } catch (error) {
    return error;
  }
});

export const userRegister = createAsyncThunk(
  "user/register",
  async (params) => {
    const { first_name, last_name, country, email, cb } = params;
    try {
      const res = await userRegisterHttp({
        first_name,
        last_name,
        country,
        email,
        role: "Player",
      });
      if (res.success) {
        cb(SUCCESS, res);
      } else {
        cb(ERROR, res);
      }
      return res;
    } catch (error) {
      return error;
    }
  }
);

export const userLogout = createAsyncThunk('user/logout',async()=>{
  try {
    const res = await userLogoutHttp();
    if (res.success) {
      cb(SUCCESS, res);
    } else {
      cb(ERROR, res);
    }
    return res;
  } catch (error) {
    return error;
  }
}) 