import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { getToken } from "../helpers/Utils";

const PrivateRoutes = () => {
  // const { accessToken } = useSelector((state) => state?.user?.userInfo);
  const accessToken = getToken()
  let auth = { token: accessToken ? true : false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
