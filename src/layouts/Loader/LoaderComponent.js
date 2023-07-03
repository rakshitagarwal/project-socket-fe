import React from "react";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

const StyledOverlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  zIndex: "9999",
  pointerEvents: "none",
});

const LoaderComponent = () => {
  return (
    <StyledOverlay className="overlay">
      <CircularProgress color="primary" />
    </StyledOverlay>
  );
};

export default LoaderComponent;
