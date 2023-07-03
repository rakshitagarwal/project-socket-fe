import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

export const login = createAsyncThunk("user/login", async (params) => {
  try {
    const { email, password, Role, cb } = params;
    const res = await axiosInstance.post("/users/login", {
      email,
      password,
      Role,
    });
    // if (res.success) {
      cb();
    // }
    return res;
  } catch (error) {
    return error;
  }
});

export const logout = createAsyncThunk("user/logout", async (cb) => {
  try {
    const res = await axiosInstance.post("/users/logout");
    if (res.success) {
      cb();
    }
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const register = createAsyncThunk("user/register", async (params) => {
  try {
    const { data, cb } = params;
    const res = await axiosInstance.post("/users/", data);
    if (res.success) {
      cb();
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
