import { Box, Menu, MenuItem, Slide } from "@mui/material";
import React, { useState } from "react";
import { ListPaperSX } from "../app-header-data";
import { NavLink } from "react-router-dom";

export const LinkDropdown = ({ menu }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        className="cursor-pointer flex align-center white-color font-family-lato font-weight-400 heading-20"
        aria-controls={`${menu.name}-menu`}
        aria-haspopup="true"
        onClick={menu.menuItems ? handleClick : menu.onClick}
      >
        <div
          className="padding-right-0 position-relative"
          style={{ whiteSpace: "nowrap" }}
        >
          {menu.name}
        </div>
      </Box>
      {menu.menuItems && (
        <Menu
          id={`${menu.name}-menu`}
          anchorEl={anchorEl}
          sx={{
            ".MuiPaper-root": {
              boxShadow: "0px 8px 40px 0px rgba(0, 0, 0, 0.02)",
              bgcolor: "rgba(80,86,118, 0.8)",
              borderRadius: "10px",
            },
            mt: "20px",
          }}
          MenuListProps={ListPaperSX}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menu.menuItems.map((item) => (
            <NavLink to={item.href}>
              <MenuItem key={item.name} onClick={handleClose} href={item.href}>
                <Slide
                  in={Boolean(anchorEl)}
                  direction="down"
                  mountOnEnter
                  unmountOnExit
                >
                  <div>{item.name}</div>
                </Slide>
              </MenuItem>
            </NavLink>
          ))}
        </Menu>
      )}
    </>
  );
};
