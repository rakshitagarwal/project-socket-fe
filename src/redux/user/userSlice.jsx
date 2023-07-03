import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../helpers/CONSTANTS";
import { setToken, setUserData } from "../../helpers/Utils";
import {
  login,
  logout,
  register,
  setResetPassword,
  verificationOtp,
} from "./user.httpCalls";

const initialState = {
  userInfo: {},
  successMessage: "",
  errorMessage: "",
  isLoggedIn: false,
  status: STATUS.IDLE,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verificationOtp.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(verificationOtp.fulfilled, (state, action) => {
     
        try {
          if (action.payload) {
            state.userInfo = action.payload;
            state.successMessage = "Success";
            state.status = STATUS.FULFILLED;
            state.isLoggedIn = true;
            setUserData(action.payload);
            setToken(action.payload.accessToken);
          } else {
            state.status = STATUS.ERROR;
            state.errorMessage = "";
          }
        } catch (error) {
          console.log(error, "CATCH ERROR --------userSlice.jsx---------");
        }
      }).addCase(login.pending, (state, action) => {
        state.status = STATUS.LOADING;
      }).addCase(login.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = STATUS.ERROR;
        state.isLoggedIn = false;
      })
      .addCase(logout.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(logout.fulfilled, (state, action) => {
   
        try {
          if (action.payload) {
        
            const { message, success } = action.payload;
            if (success) {
              state.userInfo = {};
              state.successMessage = message;
              state.status = STATUS.IDLE;
            } else {
              state.status = STATUS.ERROR;
              state.errorMessage = message;
            }
          }
        } catch (error) {
          console.log(error, "CATCH ERROR --------userSlice.jsx---------");
        }
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(register.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(register.fulfilled, (state, action) => {
        try {
          if (action.payload) {
            const { message, success } = action.payload;
            if (success) {
              state.successMessage = message;
              state.status = STATUS.FULFILLED;
            } else {
              state.status = STATUS.ERROR;
              state.errorMessage = message;
            }
          }
        } catch (error) {
          console.log(error, "CATCH ERROR --------userSlice.jsx---------");
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(setResetPassword.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(setResetPassword.fulfilled, (state, action) => {
        try {
          if (action.payload) {
            const { message, success } = action.payload;
            if (success) {
              state.successMessage = message;
              state.status = STATUS.IDLE;
            } else {
              state.status = STATUS.ERROR;
              state.errorMessage = message;
            }
          }
        } catch (error) {
          console.log(error, "CATCH ERROR --------userSlice.jsx---------");
        }
      })
      .addCase(setResetPassword.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const { add, setStatus } = userSlice.actions;
export default userSlice.reducer;
