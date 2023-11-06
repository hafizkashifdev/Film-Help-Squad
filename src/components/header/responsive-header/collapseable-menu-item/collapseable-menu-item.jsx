import { Box, Collapse, MenuItem, Slide } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const CollapseableMenuItem = ({ menu, isExpanded, onMenuItemClick, closeDrawer }) => {
  return (
    <>
      <Link to={menu.href}>
        <Box
          sx={{
            p: "15px 20px",
            "&:hover": { fontWeight: 500 },
            fontWeight: isExpanded ? 700 : 400,
            transition: "all .1s ease",
            color: isExpanded ? "#fff" : "#EEEEEE",
          }}
          className="cursor-pointer flex align-center justify-space-between font-family-lato"
          aria-controls={`${menu.name}-menu`}
          aria-haspopup="true"
          onClick={menu.menuItems ? onMenuItemClick : closeDrawer}
        >
          {menu.name}
        </Box>
      </Link>
      <Collapse in={isExpanded}>
        {menu.menuItems?.map((item) => (
          <Link to={item.href} key={item.name}>
            <MenuItem
              sx={{
                transition: "all .07s linear",
                paddingLeft: "25px",
                bgcolor: "rgba(80,86,118, 0.1)",
                color: "#999999",
                cursor: "pointer !important",
                "&:hover": {
                  bgcolor: "rgba(80,86,118, 0.8)",
                  color: "#fff",
                  fontWeight: 300,
                },
                "&:focus-within": {
                  bgcolor: "rgba(80,86,118, 0.8)",
                  paddingLeft: "35px",
                  color: "#fff",
                  fontWeight: 300,
                },
              }}
              onClick={closeDrawer}
            >
              <Slide
                in={isExpanded}
                direction="down"
                mountOnEnter
                unmountOnExit
              >
                <div className="font-family-red cursor-pointer">
                  {item.name}
                </div>
              </Slide>
            </MenuItem>
          </Link>
        ))}
      </Collapse>
    </>
  );
};
