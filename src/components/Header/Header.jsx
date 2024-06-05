"use client";

import React, { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import "../Header/header.css";
import { BsSearch } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountMenu from "../Landing Page/Account Menu/AccountMenu";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Link from "next/link";
import Cart from "../cart/Cart";
import { useOpenContext } from "@/context/OpenProvider";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    border: `none`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme, isSearchOpen }) => ({
  position: "relative",
  borderBottom: isSearchOpen ? "1px double black" : "none",
  "&:hover": {
    cursor: "pointer",
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = (props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = isScrolled ? "scrolled-header" : "";

  const { open, setOpen } = useOpenContext();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [login, setLogin] = React.useState(false);
  const [cart, setCart] = useState(5);

  return (
    <header className={`headerContainer-root ${headerClassName}`}>
      <div
        className="header-container"
        style={
          isScrolled === false
            ? {
                borderBottomColor: "#e6e5e5",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
              }
            : { border: "none" }
        }
      >
        <h1>FabFinds</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href={"/collection"}>Catalog</Link>
            </li>
            <li>
              <Link href="/contactus">Contact</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="header-icons">
          <div className="search-icon">
            <Search isSearchOpen={isSearchOpen}>
              <SearchIconWrapper>
                <BsSearch />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onFocus={handleSearchOpen}
                onBlur={handleSearchClose}
              />
            </Search>
          </div>
          {!isSearchOpen && (
            <>
              <div className="profile-icon">
                <AccountMenu login={login} setLogin={setLogin} />
              </div>
              <div className="cart-icon">
                <IconButton aria-label="cart" onClick={showDrawer}>
                  <StyledBadge badgeContent={0} color="secondary">
                    <ShoppingCartIcon
                      sx={{ color: "black", fontSize: "25px" }}
                    />
                  </StyledBadge>
                </IconButton>
              </div>
            </>
          )}
        </div>
      </div>
      <Drawer title="Cart" onClose={onClose} open={open}>
        <div className="drawer_container">
          {cart === 0 ? (
            <>
              <iframe
                src="https://lottie.host/embed/d087c937-26ee-4485-9acf-bbdef62182e6/ryGUOhjvab.json"
                style={{ border: "none", width: "100px", height: "200px" }}
              ></iframe>
              <h1>Your cart is empty</h1>
              <button className="continue_shopping_button">
                Continue Shopping
              </button>
              <div className="have_an_account">Have an account?</div>
              <div className="login_text">
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "2px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setOpen(false);
                    setLogin(true);
                  }}
                >
                  Log in
                </span>{" "}
                to check out faster
              </div>
            </>
          ) : (
            <>
              <Cart />
            </>
          )}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
