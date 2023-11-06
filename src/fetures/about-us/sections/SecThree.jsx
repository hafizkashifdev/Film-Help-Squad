import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Img1 from "../../../assets/Images/about-us/collaboration.png";
import Img2 from "../../../assets/Images/about-us/inclusivity.png";
import Img3 from "../../../assets/Images/about-us/education.png";
import Img4 from "../../../assets/Images/about-us/connections.png";
import Img5 from "../../../assets/Images/about-us/resources.png";
import Img6 from "../../../assets/Images/about-us/community.png";

const sectionData = [
  {
    mainHeading: "What We Believe In",
    mainDescription:
      "At Film Help Squad, we believe in the transformative power of storytelling. We believe in the creative vision of every filmmaker, the potential of every actor, and the dedication of every writer. We believe in fostering a collaborative community where artists can thrive, share their unique perspectives, and inspire audiences worldwide. Our mission is to empower and support the dreams of storytellers, because we know that every story, no matter how big or small, has the power to make a difference in the world. Join us in our journey to celebrate the art of filmmaking and bring stories to life. Together, we believe in the magic of cinema.",
    boxData: [
      {
        image: Img1,
        heading: "Collaboration",
        description:
          "We believe in the power of collaboration and that filmmaking is a team effort. Our platform is designed to facilitate connections and partnerships among individuals with a shared passion for storytelling.",
      },
      {
        image: Img2,
        heading: "Inclusivity",
        description:
          " We embrace diversity in all its forms and are committed to fostering an inclusive community where every voice is heard and every story is celebrated.",
      },
      {
        image: Img3,
        heading: "Education",
        description:
          "We value continuous learning and provide resources, insights, and opportunities for our members to enhance their skills and stay at the forefront of the industry.",
      },
    ],
  },
  {
    mainHeading: "Why Choose Film Help Squad",
    marginTop: "5rem",
    mainDescription:
      "Choose Film Help Squad because we're your trusted partner in the world of cinema. Our platform offers a vibrant and diverse community of filmmakers, actors, writers, agents, and industry professionals. With robust tools for talent discovery, collaboration, and project management, we streamline your creative journey. Whether you're seeking your next big break, scouting top talents, or looking to collaborate on groundbreaking projects, Film Help Squad is your gateway to the heart of the film industry. Join us to connect, learn, collaborate, and make your mark in the world of film.",
    boxData: [
      {
        image: Img4,
        heading: "Connections",
        description:
          "We offer a global network of filmmakers, actors, writers, and industry professionals eager to collaborate and support each other.",
      },
      {
        image: Img5,
        heading: "Resources",
        description:
          "Access a wealth of resources, job listings, and project opportunities to fuel your creative ambitions.",
      },
      {
        image: Img6,
        heading: "Community",
        description:
          "Join a vibrant and welcoming community of creatives who share your passion for filmmaking.",
      },
    ],
  },
];

const SecThree = () => {
  const lineStyle = {
    width: "191px",
    borderBottom: "3px solid #DECDC6",
  };
  return (
    <Grid container sx={{ height: "auto", px: { md: "5rem", xs: "2rem" } }}>
      {sectionData.map((item, index) => (
        <div key={index} style={{ marginTop: item.marginTop }}>
          <Box className="flex flex-column align-center center-text" gap={2}>
            <Typography className="font-weight-400 font-family-dm dm-color text-align-c heading-40">
              {item.mainHeading}
            </Typography>
            <Typography className="justify-c-center">
              <div style={lineStyle}></div>
            </Typography>
            <Typography className="text-color font-weight-400 font-family-lato heading-20">
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
                  maxWidth: { xl: "auto", xs: "536px" },
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

export default SecThree;
