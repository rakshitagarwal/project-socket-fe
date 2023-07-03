import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Registration } from "../pages";
import { routes } from "../constants";
import Header from "../layouts/Header/Header";
import PrivateRoute from "./PrivateRoute";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { getToken } from "../helpers/Utils";
import { stat } from "fs";

export default function Navigations() {
  const accessToken = getToken();
  const reduxToken = useSelector((state) => state.user?.userInfo?.accessToken);


  var validteHeader = false;

  if (accessToken) {
    validteHeader = true;
  } else if (reduxToken) {
    validteHeader = true;
  } else {
    validteHeader = false;
  }

  return (
    <BrowserRouter>
      {validteHeader && <Header />}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={routes.HOME} element={<Home />} />
        </Route>
        {/* 👈 Renders at /app/ */}

        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.REGISTRATION} element={<Registration />} />

        <Route path="*" element={<Navigate to={routes.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
