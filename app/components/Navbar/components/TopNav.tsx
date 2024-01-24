"use client";
import React from "react";
import { useStoreNav } from "@/app/store/storeNav/storeNav";
import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useTheme, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";

function TopNav() {
  const { anchorEl, setAnchorEl } = useStoreNav();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme<Theme>();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="flex justify-around pt-5">
      <p className="text-3xl font-bold text-white">Logo</p>
      {
        isDesktop ? (
          <div className="space-x-8 mt-3 text-white font-semibold">
            <Link href="#">Home</Link>
            <Link href="#">Menu</Link>
            <Link href="#">Eventos</Link>
            <Link href="#">Servicios</Link>
          </div>
        ): null 
      }
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountBoxIcon fontSize="large" style={{ color: "white" }}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default TopNav;
