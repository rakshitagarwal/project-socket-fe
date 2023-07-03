import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { countries } from "../../constants";
import "./countrypicker.css"

const CountryPicker = ({
  selectedCountry,
  onCountryChange,
  helperText,
  errors,
}) => {
  const handleCountryChange = (event) => {
    const country = event.target.value;
    onCountryChange(country);
  };

  return (
    <FormControl style={{ width: "100%" }} error={errors}>
      <InputLabel id="country-label">Select Country</InputLabel>

      <Select
        labelId="country-label"
        id="country-label"
        
        value={selectedCountry}
        defaultValue={countries[0]}
        onChange={handleCountryChange}
        style={{
          textAlign: "left",
          fontSize:"1em"
        }}
        // sx={{
        //   '& .MuiInputLabel-root': {
           
        //     fontSize: '1.5rem !important', // Customize the font size
        //     // Add any other label styles here
        //   },
        //   '& .MuiInputBase-input': {
        //     fontSize: '1.5rem !important', // Customize the input font size
        //   },
        // }}
        
      >
        {countries?.allCountries?.map((country) => (
          <MenuItem
            key={country.code}
            value={country.code}
            className="menu-countries"
            // sx={{
            //   '& .MuiInputLabel-root': {
               
            //     fontSize: '1.5rem !important', // Customize the font size
            //     // Add any other label styles here
            //   },
            //   '& .MuiInputBase-input': {
            //     fontSize: '1.5rem !important', // Customize the input font size
            //   },
            // }}
          >
            {country.code === "IN" ? (
              <img
                src={require("./../../assets/img/india.png")}
                alt="new"
                width={33}
                height={25}
                style={{ marginRight: "10px" }}
              />
            ) : (
              <img
                src={require("./../../assets/img/indianOcen.png")}
                alt="new"
                width={33}
                height={25}
                style={{ marginRight: "10px" }}
              />
            )}
            {country.code} {"-  "}
            {country.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText style={{ fontSize: 13 }}>
        {errors && helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default CountryPicker;
