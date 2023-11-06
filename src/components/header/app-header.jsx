import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import { ReactComponent as FHSLogo } from "../../assets/SVG/FSH-Icon.svg";
import { LinkDropdown } from "./link-dropdown/link-dropdown";
import { APPHEADERDATA } from "./app-header-data";
import { ResponsiveHeader } from "./responsive-header/responsive-header";
import { useLocation, NavLink, Link } from "react-router-dom";
import "./app-header.scss";
import { useState } from "react";

export const AppHeader = () => {
  const [state, setState] = useState(false);
  const handleDrawerOpen = () => {
    setState(true);
  };
  const location = useLocation()
    ?.pathname?.split("/")
    ?.filter((n) => n);
  return (
    <Box className="fhs-header" sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        elevation={0}
        sx={{ bgcolor: "#151C48", py: "18px", zIndex: 5 }}
      >
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xl={2.5} lg={1.5} sx={{ ml: { xl: "4rem", lg: "0" } }}>
              <Link to="/">
                <FHSLogo />
              </Link>
            </Grid>
            <Grid
              className="links align-center justify-space-between"
              sx={{
                display: { lg: "flex", xs: "none" },
                height: "48px",
              }}
              item
              xl={5.9}
              lg={7.3}
            >
              {APPHEADERDATA.map((item, index) => (
                <NavLink
                  className={({ isActive }) => {
                    return (isActive && location[0]) === item.parentRoute
                      ? "nav-link active"
                      : "nav-link";
                  }}
                  to={item.href}
                >
                  <LinkDropdown key={index} menu={item} />
                </NavLink>
              ))}
            </Grid>
            <Grid
              sx={{
                display: { lg: "flex", xs: "none" },
                mr: { xl: "4rem", lg: "0" },
              }}
              item
              className="links align-center justify-end"
              xl={2.5}
              lg={2}
            >
              <NavLink to="/professionals/create-profile">
                <p
                  style={{ whiteSpace: "nowrap" }}
                  className="cursor-pointer margin-right-1 align-center color-white font-family-lato font-weight-400 heading-20"
                >
                  Get Started!
                </p>
              </NavLink>
              <NavLink to="/sign-in">
                <Button
                  className="primary-bg-color flex sub-heading font-weight-500"
                  sx={{
                    p: "12px 18px",
                    borderRadius: "5.5px",
                    border: "1px solid #fff",
                    width: "100px",
                  }}
                  variant="contained"
                >
                  Sign In
                </Button>
              </NavLink>
            </Grid>
            <Box
              className="links align-center justify-space-between"
              sx={{ display: { lg: "none", xs: "flex" } }}
            >
              <span id="menu-icon" title="Menu" onClick={handleDrawerOpen}>
                <span class="menu-line menu-line-1"></span>
                <span class="menu-line menu-line-2"></span>
                <span class="menu-line menu-line-3"></span>
              </span>
              <ResponsiveHeader state={state} setState={setState} />
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
