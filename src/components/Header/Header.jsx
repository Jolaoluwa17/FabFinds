"use client";
import React, { useState } from "react";
import "../Header/header.css";
import { BsSearch } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountMenu from "../Landing Page/Account Menu/AccountMenu";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

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

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className="headerContainer">
      <h1>FabFinds</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Catalog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">News</a>
          </li>
          <li>
            <a href="/about">About</a>
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
              <AccountMenu />
            </div>
            <div className="cart-icon">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCartIcon sx={{ color: "black", fontSize: "25px" }} />
                </StyledBadge>
              </IconButton>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
