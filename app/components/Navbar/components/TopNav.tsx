"use client";
import React from "react";
import { useStoreNav } from "@/app/store/storeNav/storeNav";
import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

function TopNav() {
  const { anchorEl, setAnchorEl } = useStoreNav();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-around mt-5">
      <p className="text-2xl font-bold">Logo</p>
      <div className="space-x-8">
        <Link href="#">Home</Link>
        <Link href="#">Menu</Link>
        <Link href="#">Eventos</Link>
        <Link href="#">Servicios</Link>
      </div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Logo
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
