import * as React from "react";

import {
  Badge,
  Box,
  Button,
  FormControl,
  IconButton,
  Menu,
  styled,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Form, Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import { authContext } from "../../context/AuthContexProvider";
import { alpha } from "@mui/material";
import "./Navbar.css";
import { basketContext } from "../../context/BasketProductProvider";
import LiveSearch from "../LiveSearch/LiveSearch";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ADMINS } from "../../helpers/consts";
import fire from "../../fire";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const { basketCount } = React.useContext(basketContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, handleLogOut } = React.useContext(authContext);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const menuId = "primary-search-account-menu";

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "30px",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <nav className="fix">
      <Link className="name-logo"></Link>
      <Link className="tipe-logo">
        <Link to="/" className="media">
          About
        </Link>
        {ADMINS.includes(user?.email) ? (
          <Link to="/add" className="media">
            Add new way
          </Link>
        ) : (
          <></>
        )}
        <Link to="/list" className="media">
          Education
        </Link>
        <Link to="/comment" className="media">
          Experience
        </Link>

        <Search className="search-txt" sx={{ mr: "35px" }} id="media-none">
          <LiveSearch />
        </Search>
        {user.email ? (
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Link to="/basket">
              <Badge badgeContent={basketCount} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </Link>
          </IconButton>
        ) : (
          <></>
        )}

        <Box
          className="boxAvatar"
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: "20px",
          }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            style={{ marginTop: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            <Link to="/auth">Registration</Link>
            <Button onClick={handleLogOut} sx={{ color: "black" }}>
              LogOut
            </Button>
          </Menu>
          <Box
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}>
            {/* <Link
              to="/"
              style={{
                paddingRight: "20px",
                paddingLeft: "20px",
              }}>
              {user.email ? user.email : user.email}
            </Link> */}
          </Box>
        </Box>
      </Link>
    </nav>
  );
};
export default Navbar;
