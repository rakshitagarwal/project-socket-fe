import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormHelperText,
  useMediaQuery ,
  useTheme
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Typography } from "@material-ui/core";

const CustomisedTextFields = ({
  type,
  label,
  value,
  error,
  helperText,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);



  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      label={label}
      value={value}
      error={error}
      helperText={
        <Typography variant="body2" style={{ fontSize: isMobile ? "12px" : "14px" }}>
          {helperText}
        </Typography>
      }
      onChange={onChange}
      fullWidth
      variant="standard"
      sx={{
        '& .MuiInputLabel-root': {
         
          fontSize: '1.5rem', // Customize the font size
          // Add any other label styles here
        },
        '& .MuiInputBase-input': {
          fontSize: '1.5rem', // Customize the input font size
        },
      }}
      InputProps={{
        endAdornment: type === "password" && (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomisedTextFields;
