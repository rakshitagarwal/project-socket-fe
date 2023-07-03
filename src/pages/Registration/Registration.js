import React, { useState } from "react";
import "./registration.css";
import { Link } from "react-router-dom";
import CustomisedTextFields from "../../components/CustomisedTextFields/CustomisedTextFields";
import OtpInput from "../../components/OtpInputs/OtpInput";
import { countries, routes } from "../../constants";
import CountryPicker from "../../components/CountryPicker/CountryPicker";
import { emailValidation } from "../../helpers/Utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../../redux/user/user.httpCalls";
import constants from "../../constants/constants";
import LoaderComponent from "../../layouts/Loader/LoaderComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const [countryError, setCountryError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const lodaerValue = useSelector((state) => state?.user?.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
    if (!emailValidation(email)) {
      setEmailError(false);
    }
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);

    setCountryError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let flagError = false;
    if (name === "") {
      setNameError(true);
      flagError = true;
    }

    if (email === "") {
      flagError = true;
      setEmailError(true);
    } else if (emailValidation(email)) {
      setEmailError(true);
      flagError = true;
    }

    if (selectedCountry === "") {
      setCountryError(true);
      flagError = true;
    }
    name.split(" ");
    if (!flagError) {
      let data = {
        first_name: name.split(" ")[0],
        last_name: name.split(" ")[1],
        email: email,
        country: selectedCountry,
        role: constants.role,
      };
      dispatch(
        register({
          data,
          cb: (status, data) => {
            if (status === "success") {
              toast.success("You have successfully registered.");
              setTimeout(() => {
                navigate(routes.LOGIN);
              }, 2000);
            } else {
              toast.error(data?.message);
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
    <div style={{}}>
      <hgroup className="title">
        <h3>Registration</h3>
      </hgroup>
      {lodaerValue === "loading" && <LoaderComponent />}
      <form
        className="rgForm"
        onKeyDown={handleKeyDown}
      >
        <div className="groupRg">
          <CustomisedTextFields
            type="text"
            label="Full name"
            value={name}
            error={nameError}
            helperText={nameError && "Fullname is required"}
            onChange={handleNameChange}
          />
        </div>
        <div className="groupRg">
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
        <div className="groupRg">
          <CountryPicker
            selectedCountry={selectedCountry}
            onCountryChange={handleCountryChange}
            errors={countryError}
            helperText={"Country is required"}
          />
        </div>

        {/* <Link to={routes.HOME}> */}
        <button
          type="button"
          className="button buttonBlue"
          onClick={handleSubmit}
        >
          Sign Up
          <div className="ripples buttonRipples">
            <span className="ripplesCircle"></span>
          </div>
        </button>

        {/* </Link> */}

        <div className="navigationBtnReg">
          {" "}
          <span>
            Already User ?
            <Link style={{ fontWeight: "bold" }} to={routes.LOGIN}>
              {" "}
              Sign In
            </Link>
          </span>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}
