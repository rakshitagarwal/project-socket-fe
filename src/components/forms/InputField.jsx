import React from "react";
const InputField = ({
  id,
  name,
  type,
  autoComplete,
  required,
  className,
  placeholder,
  value,
  onChange,
  isDropdown,
  helperText,
}) => {
  return isDropdown ? (
    <select
      id={id}
      name={name}
      className={className}
      style={{ border: "1px solid #162459", outline: "none" }}
    >
      {/* TODO: Import `CRYPTO_PAYMENT_OPTIONS` from web3.constants and remove the below mentioned static values. */}
      <option>Select</option>
      <option>BiG</option>
      <option>USDT</option>
    </select>
  ) : (
    <>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={`block border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
        placeholder={placeholder}
        style={{ border: "1px solid #162459", outline: "none" }}
        value={value}
        onChange={onChange}
      />
      <p className="text-red">{helperText}</p>
    </>
  );
};

export default InputField;
