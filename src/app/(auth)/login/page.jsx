"use client";

import LoginImg from "@/assets/images/login-img.png";
import InputField from "@/components/forms/InputField";
import NavLink from "@/components/NavLink";
import { ROUTES_PATH } from "@/helpers/constants/constants.helper";
import Image from "next/image";
import { useState } from "react";
import OtpInput from "@/components/login/OtpInput";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { userLogin, userVerify } from "@/redux/user/user.thunk";
import { emailValidation } from "@/helpers/utils.helper";
import { SUCCESS } from "@/helpers/constants/labels.constants";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
function LoginPage() {
  const dispatch = useDispatch();
  const [otpValue, setOtpValue] = useState("");
  const [otpVisible, setOtpVisible] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [emailError, setEmailError] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const handleEmailChange = (event) => {
    setOtpVisible(false);
    setEmail(event.target.value);
    setEmailError(false);
  };
  const handleOtpChange = (e) => {
    setOtpValue(e);
  };
  const handleSubmit = (event) => {
    
    event.preventDefault();
    let flagError = false;

    if (email === "") {
      setOtpVisible(false);
      flagError = true;
      setEmailError(true);
    } else if (!emailValidation(email)) {
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
        userLogin({
          email: email,
          cb: (status, data) => {
            if (status === SUCCESS) {
              //TODO:add toast msg
              // toast.success("Otp sent successfully.");
              setOtpVisible(true);
            } else {
              //TODO:add toast msg
              // toast.error(data?.message);
            }
          },
        })
      );
    } else if (!flagError && otpVisible) {
      console.log("opt handle");
      dispatch(
        userVerify({
          email: email,
          otp: otpValue,
          cb: (status, data) => {
            console.log("status", status);
            console.log("data", data);
            if (status === SUCCESS) {
              console.log("SUCCESS");
              console.log(data);
              signIn("credentials", {
                ...data,
                redirect: true,
                callbackUrl: "/",
              });
              //TODO:add toast msg
              router.push("/");
              // toast.success("You have logged in successfully.");
            } else {
              //TODO:add toast msg
              // toast.error(data?.message);
              // toast.error("Account not found.Please sign-up to login.");
            }
          },
        })
      );
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event); // Prevent the default behavior on Enter key press
    }
  };
  return (
    <section className="text-gray-600 body-font container mx-auto flex flex-wrap items-center h-[100vh]">
      <div className="w-1/2 flex justify-center items-center flex-col max-tablet:w-full h-full">
        {/* <img
          alt="logo"
          src={Logo}
          height={"150px"}
          width={"150px"}
          className="text-center mx-auto mb-5 hidden max-tablet:block "
        /> */}
        <h2 className="text-gray-900 title-font mb-5 mx-auto text-3xl font-black">
          Login
        </h2>
        <div className="relative mb-4 w-[280px] max-w-[100%]">
          <form onKeyDown={handleKeyDown}>
            <InputField
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-xl border focus:border-indigo-500 focus: text-base outline-none text-gray font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3 mx-auto border-purple-700 "
              placeholder="Email Address *"
              value={email}
              helperText={
                emailError && emailValidation(email)
                  ? "Please enter a valid email."
                  : emailError && "Email is required"
              }
              onChange={handleEmailChange}
              required
            />
            {otpVisible ? (
              <div className=" mx-auto mb-10 lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-0   md:mt-0">
                <p className="text-sm font-extrabold text-themeColor mb-2  mt-4">
                  ENTER OTP
                </p>
                <div className="relative">
                  <OtpInput length={4} onChange={(e) => handleOtpChange(e)} />
                </div>
                <div className="text-red">
                  <span>
                    {otpError &&
                      "Otp is required with minimum length of 4 characters."}
                  </span>
                </div>
                <p className=" text-sm text-themeColor font-extrabold   mt-1">
                  <span className="text-grey">Didn’t receive the OTP?</span>{" "}
                  <span onClick={(e) => handleSubmit(e)}>RESEND CODE </span>
                </p>
              </div>
            ) : null}

            <button
              className="text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg  mx-auto rounded-full font-medium bg-themeColor w-full"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Send OTP
            </button>
          </form>
        </div>
        <Link
          href={ROUTES_PATH.REGISTRATION}
          className="mx-auto font-bold text-lg text-themeColor"
        >
          Sign Up for free
        </Link>
      </div>
      <div className="w-1/2 flex justify-center items-end h-full max-tablet:hidden">
        <Image
          src={LoginImg}
          alt="logo"
          className="h-[80%] max-h-[800px] w-auto"
        />
      </div>
    </section>
  );
}

export default LoginPage;
