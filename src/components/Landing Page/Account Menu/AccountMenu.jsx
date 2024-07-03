"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { IoPersonSharp } from "react-icons/io5";
import Login from "@/modals/login/Login";
import Signup from "@/modals/signup/Signup";
import { logout } from "@/api/features/auth/logout";
import { useIsLoggedInQuery } from "@/api/features/auth/isUserLoggedIn";
import VerifyAccount from "@/modals/verifyAccount/VerifyAccount";
import ForgotPassword from "@/modals/forgotpassword/ForgotPassword";

export default function AccountMenu(props) {
  const [signup, setSignup] = React.useState(false);
  const [verifyAccount, setVerifyAccount] = React.useState(false);
  const [forgotPassword, setForgotPassword] = React.useState(false);

  const {
    data: user,
    isLoading: userLoading,
    isSuccess: userSuccess,
    isError: userError,
    error: userErrorData,
    refetch: refetchUser,
  } = useIsLoggedInQuery();

  // checks if user is logged in
  const [loggedin, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (user && user.username) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    if (anchorEl || props.login || signup || verifyAccount || forgotPassword) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [anchorEl || props.login || signup || verifyAccount || forgotPassword]);

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function to perform logout logic
      // Optional: Handle successful logout (e.g., redirect to login page)
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <React.Fragment>
        <Box>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <div
                style={{
                  color: "black",
                  backgroundColor: "none",
                  fontSize: "25px",
                }}
              >
                <IoPersonSharp />
              </div>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            {loggedin ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar style={{ marginRight: "10px" }} /> Profile
              </div>
            ) : (
              <div
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => props.setLogin(true)}
              >
                <LockIcon
                  style={{
                    marginRight: "10px",
                    fontSize: "30px",
                    color: "grey",
                  }}
                />
                Log in
              </div>
            )}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {loggedin ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar style={{ marginRight: "10px" }} /> My account
              </div>
            ) : (
              <div
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => setSignup(true)}
              >
                <AccountCircleIcon
                  style={{
                    marginRight: "10px",
                    fontSize: "30px",
                    color: "grey",
                  }}
                />
                Sign up
              </div>
            )}
          </MenuItem>

          {loggedin && (
            <div style={{ marginTop: "10px" }}>
              <Divider style={{ marginBottom: "10px" }} />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </div>
          )}
        </Menu>
      </React.Fragment>
      <Login
        login={props.login}
        setLogin={props.setLogin}
        setForgotPassword={setForgotPassword}
        setVerifyAccount={setVerifyAccount}
      />
      <ForgotPassword
        forgotPassword={forgotPassword}
        setForgotPassword={setForgotPassword}
        setLogin={props.setLogin}
      />
      <Signup
        signup={signup}
        setSignup={setSignup}
        setVerifyAccount={setVerifyAccount}
      />
      <VerifyAccount
        verifyAccount={verifyAccount}
        setVerifyAccount={setVerifyAccount}
      />
    </div>
  );
}
