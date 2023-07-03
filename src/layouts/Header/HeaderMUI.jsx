import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Avatar, Badge, Container, Paper } from "@mui/material";
import countryBadge from "../../assets/img/appleIphone13.jpg";
import logo from "../../assets/img/Logo.svg";
import userBadge from "../../assets/img/user.svg";
import flag from "../../assets/img/flag.jpg";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { logout } from "../../redux/user/user.httpCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./header.module.css"

const drawerWidth = 240;
const navItems = ["Upcoming Auctions", "Bid Logs"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <div
        style={{ position: "absolute", right: "11px", top: "101px" }}
        onClick={handleDrawerToggle}
      >
        <CancelOutlinedIcon style={{ fontSize: "25px" }} />
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleLogout = () => {
    dispatch(
      logout({
        cb: (status, data) => {
          if (status === "success") {
            toast.success("Successfully logged out.");
            setTimeout(() => {
              navigate(routes.LOGIN);
            }, 2000);
            localStorage.clear();
          } else {
            
            toast.error(data?.message);
          }
        },
      })
    );
  };

  return (
    <>
      <Box sx={{ display: "flex" }} className={`${styles.nav}`}>
        <CssBaseline />
        <AppBar style={{ background: "#162459", display: "flex" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="mt-3 mb-3">
                <img src={logo} height={45} width={77} />
              </div>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  whiteSpace: "nowrap",
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{ color: "#fff" }}
                    style={{ textTransform: "none", fontSize: "15px" }}
                  >
                    {item}
                  </Button>
                ))}
                <img
                  src={flag}
                  style={{
                    borderRadius: "18px",
                    height: "25px",
                    width: "25px",
                  }}
                />
                <Badge color="secondary" badgeContent={0} showZero max={999}>
                  <NotificationsOutlinedIcon style={{ fontSize: "25px" }} />
                </Badge>
                <Button
                  color="tertiary"
                  disabled={false}
                  size="large"
                  variant="filled"
                  sx={{
                    borderRadius: "21px",
                    padding: "1px 25px",
                    border: "1px solid transparent",
                    textTransform: "none",
                    fontSize: "15px",
                    background: "linear-gradient(45deg,red,blue) border-box",
                  }}
                  onClick={handleLogout}
                >
                  Log out
                </Button>
                <Avatar
                  sx={{ bgcolor: "deepOrange[500]" }}
                  alt="Remy Sharp"
                  src={userBadge}
                  style={{
                    fontSize: "12px",
                    height: "33.5px",
                    width: "33.5px",
                  }}
                />
              </Box>
            </div>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <ToastContainer />
      <div>
        <h2 className={styles.content_header}>
          iPhone 14 Pro Max 1 TB | $2,000.00 | 1x
        </h2>
      </div>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
