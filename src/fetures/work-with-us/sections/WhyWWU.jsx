import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Img1 from "../../../assets/Images/work-with-us/creative-environment.png";
import Img2 from "../../../assets/Images/work-with-us/impactful-work.png";
import Img3 from "../../../assets/Images/work-with-us/growth-opportunities.png";
import Img4 from "../../../assets/Images/work-with-us/global-community.png";

const sectionData = [
  {
    mainHeading: "Why Work with Us",
    mainDescription:
      "At Film Help Squad, we're more than just a platform - we're a community of dreamers, storytellers, and visionaries who believe in the power of cinema to inspire and connect people. When you join our team, you'll become part of a group that shares your passion for filmmaking and creativity. Here's why you should consider working with us:",
    boxData: [
      {
        image: Img1,
        heading: "Creative Environment",
        description:
          "We foster a collaborative and creative work environment where your ideas are valued, and innovation is encouraged.",
      },
      {
        image: Img2,
        heading: "Impactful Work",
        description:
          "Every day, you'll contribute to a platform that empowers filmmakers and creatives to achieve their goals and bring their visions to life.",
      },
      {
        image: Img3,
        heading: "Growth Opportunities",
        description:
          "We're committed to the professional growth and development of our team members. You'll have the chance to learn, grow, and take on new challenges.",
      },
      {
        image: Img4,
        heading: "Global Community",
        description:
          "Join a team that connects with a diverse global community of filmmakers, actors, writers, and industry professionals.",
      },
    ],
  },
];

const WhyWWU = () => {
  const lineStyle = {
    width: "191px",
    borderBottom: "3px solid #DECDC6",
  };
  return (
    <Grid container sx={{ height: "auto", px: { md: "5rem", xs: "2rem" } }}>
      {sectionData.map((item, index) => (
        <div key={index}>
          <Box className="flex flex-column align-center center-text" gap={2}>
            <Typography className="font-weight-400 font-family-dm heading-40 dm-color text-align-c">
              {item.mainHeading}
            </Typography>
            <Typography className="justify-c-center">
              <div style={lineStyle}></div>
            </Typography>
            <Typography className="text-color font-weight-400 heading-20 font-family-lato">
              {item.mainDescription}
            </Typography>
          </Box>
          <Grid
            container
            justifyContent={{ xl: "space-between", xs: "center" }}
            sx={{ alignItems: "flex-start" }}
            className="flex margin-top-3"
          >
            {item.boxData.map((subItem, subIndex) => (
              <Grid
                item
                className="flex flex-column width-100 align-center justify-center"
                key={subIndex}
                sx={{
                  gap: 2,
                  maxWidth: { xl: "auto", xs: "380px" },
                  p: "1rem",
                }}
              >
                <img src={subItem.image} alt="" width={"100px"} />
                <Typography className="heading-25 primary-color font-weight-400 font-family-dm">
                  {subItem.heading}
                </Typography>
                <Typography className="sub-heading center-text font-weight-400 font-family-lato text-color">
                  {subItem.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default WhyWWU;
