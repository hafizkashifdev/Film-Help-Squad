import { Button, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import { APPHEADERDATA } from "../app-header-data";
import { CollapseableMenuItem } from "./collapseable-menu-item/collapseable-menu-item";
import { ReactComponent as FHSLogo } from "../../../assets/SVG/FSH-Icon.svg";
import { Link } from "react-router-dom";

export const ResponsiveHeader = ({ state, setState }) => {
  const [currentExpandedItem, setCurrentExpandedItem] = useState(null);

  const handleMenuItemClick = (menuName) => {
    if (currentExpandedItem === menuName) {
      setCurrentExpandedItem(null);
    } else {
      setCurrentExpandedItem(menuName);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <SwipeableDrawer
        anchor={"right"}
        PaperProps={{
          sx: {
            width: "270px",
            borderRadius: "20px 0px 0px 20px",
            bgcolor: "rgba(21,28,72,0.8)",
          },
        }}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className="flex justify-center margin-top-1 margin-bottom-1">
          <Link to="/">
            <FHSLogo />
          </Link>
        </div>
        {APPHEADERDATA.map((item, index) => (
          <div>
            <CollapseableMenuItem
            closeDrawer={toggleDrawer(false)}
              key={index}
              menu={item}
              isExpanded={currentExpandedItem === item.name}
              onMenuItemClick={() => handleMenuItemClick(item.name)}
            />
          </div>
        ))}
        <div className="flex justify-center flex-column align-center">
          <Link to="/professionals/create-profile">
            <p
              style={{ whiteSpace: "nowrap" }}
              className="cursor-pointer align-center secondary-color font-family-lato font-weight-400 heading-20"
            >
              Get Started!
            </p>
          </Link>
          <Link to="/sign-in">
            <Button
              className="bg-none sub-heading font-weight-500 font-family-plus"
              sx={{
                borderRadius: "5.5px",
                border: "1px solid #fff",
                color: "#fff",
                width: "230px",
              }}
            >
              Sign In
            </Button>
          </Link>
        </div>
      </SwipeableDrawer>
    </>
  );
};
