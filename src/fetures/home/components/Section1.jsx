import React from "react";
import "../home.scss";
import BgTop from "../../../assets/Images/home/section1/Rectangle.png";
import BgTop1 from "../../../assets/Images/home/section1/fashion-girls-standing-together.png";
import BgRainbow from "../../../assets/Images/home/section1/home-rainbow.png";
import { Typography, Box, Button, Grid } from "@mui/material";
import { ReactComponent as ArrowIcon } from "../../../assets/Images/home/section1/TopArrow.svg";
import { Link } from "react-router-dom";
import { GlobalSocialIcons } from "../../../components/social-icons/social-icons";

const Home = () => {
  const containerStyle = {
    position: "relative",
    height: { xl: "110vh", lg: "120vh", xs: "auto" },
    backgroundSize: "100% 100%",
    backgroundImage: `url(${BgRainbow}),url(${BgTop})`,
    overflow: "hidden",
    padding: "10px",
    textAlign: "center",
  };

  const topImageStyle = {
    overflow: "hidden",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "auto",
  };

  const topImage1Style = {
    backgroundImage: `url(${BgTop1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "85% 115%",
    backgroundPosition: "center",
    left: "0",
    right: "0",
    bottom: "0",
  };
  const generateBubbles = (count) => {
    const bubbles = [];
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 100 + "%";
      const animationDelay = Math.random() * 50 + "s";
      const bubbleStyle = {
        left,
        animationDelay,
      };
      bubbles.push(
        <div key={i} className="home-bubble-anim" style={bubbleStyle}></div>
      );
    }
    return bubbles;
  };

  return (
    <>
      <Grid sx={containerStyle} className="home-hero-container">
        <Box className="flex justify-center center-text">
          <Typography className="font-family-dm font-weight-400 white-color heading-60 width-100">
            <span className="green-color">1000+ </span>
            New Auditions & Production Jobs <br /> Posted Every Month
          </Typography>
          <div>{generateBubbles(200)}</div>
        </Box>
        <Box sx={topImageStyle}>
          <div style={topImage1Style}>
            <Box
              sx={{
                display: { lg: "flex", xs: "none" },
                mr: { lg: "4rem", xs: "0" },
                justifyContent: { lg: "flex-end", xs: "center" },
              }}
            >
              <GlobalSocialIcons />
            </Box>

            <Box className="flex flex-column justify-center align-center margin-top-6">
              <Typography className="font-family-dm font-weight-400 white-color heading-40">
                Looking For Cast & Crew?
              </Typography>
              <br />
              <Grid container justifyContent={"center"}>
                <Link to="/sign-in">
                  <Button
                    sx={{ p: "13px", mx: 1.5, my: 1 }}
                    className="primary-color bg-white-color sub-heading font-family-plus font-weight-500 tertiary-sm-title"
                  >
                    Post a job free for today
                  </Button>
                </Link>
                <Link to="/professionals/search-professionals">
                  <Button
                    sx={{ p: "13px", mx: 1.5, my: 1, border: "1px solid #fff" }}
                    className="white-color bg-none sub-heading font-family-plus font-weight-500 tertiary-sm-title"
                  >
                    Search Professional
                  </Button>
                </Link>
              </Grid>
              <Box
                sx={{
                  display: { lg: "none", xs: "flex" },
                  justifyContent: { lg: "flex-end", xs: "center" },
                  alignItems: { lg: "center", xs: "flex-end" },
                  my: { lg: 3, xs: 1 },
                }}
              >
                <GlobalSocialIcons />
              </Box>
            </Box>
          </div>
        </Box>
        <Box className="arrow-container">
          <a href="#employer-types">
            <ArrowIcon className="animated-arrow" />
          </a>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
