import { ROUTES_PATH } from "../helpers/constants/constants.helper";
import { useRouter } from "../hooks/useRouter";
import Header from "./Header";

export const MainLayout = ({ children }) => {
  const { location } = useRouter();
  const isBase = location.pathname === ROUTES_PATH.BASE;
  const isLoginPage = location.pathname === ROUTES_PATH.LOGIN;
  const isRegistrationPage = location.pathname === ROUTES_PATH.REGISTRATION;

  // Function to determine whether to show the Navbar based on the route
  const showNavbar = !isLoginPage && !isRegistrationPage && !isBase;
  return (
    <>
      {showNavbar && (
        <Header darkMode={location.pathname === "/" ? true : false} />
      )}
      {children}
      {/* {location.pathname !== "/" ? <SendMail /> : null}
      <Footer /> */}
    </>
  );
};
