import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import CustomisedTextFields from "../../components/CustomisedTextFields/CustomisedTextFields";
import OtpInput from "../../components/OtpInputs/OtpInput";
import { routes } from "../../constants";
import { emailValidation } from "../../helpers/Utils";
import { useDispatch, useSelector } from "react-redux";
import constants from "../../constants/constants";
import { login, verificationOtp } from "../../redux/user/user.httpCalls";
import LoaderComponent from "../../layouts/Loader/LoaderComponent";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [otpValue, setOtpValue] = useState("");
  const [otpVisible, setOtpVisible] = useState(false);
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [otpError, setOtpError] = useState(false);

  const lodaerValue = useSelector((state) => state?.user?.status);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setOtpVisible(false);
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let flagError = false;

    if (email === "") {
      setOtpVisible(false);
      flagError = true;
      setEmailError(true);
    } else if (emailValidation(email)) {
      setEmailError(true);
      setOtpVisible(false);
      flagError = true;
    }

    if (otpVisible) {
      if (otpValue === "") {
        setOtpError(true);
        flagError = true;
      } else if (otpValue.length !== 4) {
        setOtpError(true);
        flagError = true;
      } else {
        setOtpError(false);
      }
    }

    if (!flagError && !otpVisible) {
      dispatch(
        login({
          email: email,
          role: constants.role,
          cb: (status, data) => {
            if (status === "success") {
              toast.success("Otp sent successfully.");
              setOtpVisible(true);
            } else {
              toast.error(data?.message);
            }
          },
        })
      );
    } else if (!flagError && otpVisible) {
      dispatch(
        verificationOtp({
          email: email,
          otp: otpValue,
          cb: (status, data) => {
            if (status === "success") {
              toast.success("You have logged in successfully.");
              setOtpVisible(true);
              navigate("/home");
            } else {
              toast.error(data?.message);
              // toast.error("Account not found.Please sign-up to login.");
            }
          },
        })
      );
    }

    // Perform further actions or validation checks
  };

  const handleOtpChange = (e) => {
    setOtpValue(e);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event); // Prevent the default behavior on Enter key press
    }
  };

  return (
    <div style={{}}>
      <hgroup className="title">
        <h3>Login</h3>
      </hgroup>
      {lodaerValue === "loading" && <LoaderComponent />}
      <form className="formLogin" onKeyDown={handleKeyDown}>
        <div className="groupLogin">
          <CustomisedTextFields
            type="email"
            label="Email"
            value={email}
            error={emailError}
            helperText={
              emailError && emailValidation(email)
                ? "Please enter a valid email."
                : emailError && "Email is required"
            }
            onChange={handleEmailChange}
          />
        </div>
        {otpVisible && (
          <div className="groupLogin">
            <OtpInput
              length={4}
              onChange={(e) => handleOtpChange(e)}
              error={otpError}
              helperText={
                "Otp is required with minimum length of 4 characters."
              }
            />
          </div>
        )}
        <Link to={routes.HOME}>
          <button
            type="button"
            className="button buttonBlue"
            onClick={handleSubmit}
          >
            {otpVisible ? "Login" : "Generate Otp"}
            <div className="ripples buttonRipples">
              <span className="ripplesCircle"></span>
            </div>
          </button>
        </Link>
        <div className="navigationBtnLogin">
          {" "}
          <span style={{ fontSize: "1.5rem" }}>
            New User?{" "}
            <Link style={{ fontWeight: "bold" }} to={routes.REGISTRATION}>
              Sign Up{" "}
            </Link>
          </span>
          {/* <span>
            <Link to={routes.FORGOTPASSWORD} style={{ fontWeight: "bold" }}>
              {" "}
              <span>Forgot Password?</span>{" "}
            </Link>
          </span> */}
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}
