import React, { useState, useRef } from "react";

const OtpInput = ({ length, onChange, error, helperText }) => {
  const [otp, setOTP] = useState(Array(length).fill(""));
  const [isFilled, setIsFilled] = useState(false);
  const inputRefs = useRef([]);

  const handleInputChange = (event, index) => {
    const newOTP = [...otp];
    const inputValue = event.target.value;

    // Update the OTP value
    newOTP[index] = inputValue;
    setOTP(newOTP);

    // Move focus to the next input
    if (inputValue !== "" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Call the onChange handler with the updated OTP value
    if (typeof onChange === "function") {
      onChange(newOTP.join(""));
    }

    const isInputFilled = newOTP.every((value) => value !== "");
    setIsFilled(isInputFilled);
  };

  const handleInputKeyDown = (event, index) => {
    if (event.key === "Backspace" && event.target.value === "") {
      event.preventDefault(); // Prevent browser navigation

      // Delete the previous input value on backspace
      if (index > 0) {
        const newOTP = [...otp];
        newOTP[index - 1] = "";
        setOTP(newOTP);
        inputRefs.current[index - 1].focus();

        // Call the onChange handler with the updated OTP value
        if (typeof onChange === "function") {
          onChange(newOTP.join(""));
        }
      }
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text/plain");

    // Validate and process pasted OTP
    if (pasteData.length === length && /^[0-9]+$/.test(pasteData)) {
      const newOTP = pasteData.split("");

      // Update the OTP value
      setOTP(newOTP);

      // Call the onChange handler with the updated OTP value
      if (typeof onChange === "function") {
        onChange(newOTP.join(""));
      }

      // Move focus to the next input if available
      if (inputRefs.current[length - 1]) {
        inputRefs.current[length - 1].focus();
      }
    }
  };

  const renderInputs = () => {
    const inputs = [];

    for (let i = 0; i < length; i++) {
      inputs.push(
        <input
          key={i}
          ref={(ref) => (inputRefs.current[i] = ref)}
          type="text"
          maxLength={1}
          value={otp[i]}
          onChange={(event) => handleInputChange(event, i)}
          onKeyDown={(event) => handleInputKeyDown(event, i)}
          onPaste={handlePaste}
          className="  max-w-[23%] h-[40px] text-gray font-bold  text-center border-2  border-b-themeColor border-white rounded-2 mb-2 focus:outline-none focus:border-purple-500"
        />
      );
    }

    return inputs;
  };

  return (
    <div className="otp-input flex gap-[3%] items-stretch ">
      {renderInputs()}
    </div>
  );
};

export default OtpInput;
