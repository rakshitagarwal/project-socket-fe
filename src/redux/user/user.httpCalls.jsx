import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

export const login = createAsyncThunk("user/login", async (params) => {
  try {
    const { email, cb } = params;
    const res = await axiosInstance.post("/user/login", {
      email,
    });
    if (res.success) {
      cb("success", res);
    } else {
      cb("error", res);
      // alert(res.message);
    }

    return res?.data;
  } catch (error) {
    // alert(error);
    return error;
  }
});

export const verificationOtp = createAsyncThunk(
  "user/verify",
  async (params) => {
    try {
      const { email, otp, cb } = params;
      const res = await axiosInstance.patch("/user/verify", {
        email,
        otp,
      });

      if (res.success) {
        cb("success", res);
      } else {
        cb("error", res);
      }

      return res?.data;
    } catch (error) {
      return error;
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (params) => {
  try {
    const { cb } = params;
    const res = await axiosInstance.put("/user/logout");
    if (res.success) {
      cb("success", res);
    } else {
      cb("error", res);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const register = createAsyncThunk("user/register", async (params) => {
  try {
    const { data, cb } = params;
    const res = await axiosInstance.post("user/register", data);
    if (res.success) {
      cb("success", res);
    } else {
      cb("error", res);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const forgetPassword = createAsyncThunk(
  "user/forgetPassword",
  async (params) => {
    try {
      const res = await axiosInstance.post("/users/forget-password", params);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const setResetPassword = createAsyncThunk(
  "user/setResetPassword",
  async (params) => {
    try {
      const res = await axiosInstance.post(`/users/setreset/${params}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
