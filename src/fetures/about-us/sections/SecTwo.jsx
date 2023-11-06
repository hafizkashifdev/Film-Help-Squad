import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image1 from "../../../assets/Images/home/section3/image1.png";
import Image2 from "../../../assets/Images/home/section3/image2.png";
import { PrimaryBtn } from "../../../components/primary-button/PrimaryBtn";

const sectionData = [
  {
    heading: "Our Mission",
    description:
      "At Film Help Squad, our mission is clear: to be the driving force behind your cinematic journey. We're more than just a platform; we're your creative family, your go-to destination for all things film and entertainment. Our commitment is to empower and connect filmmakers, actors, writers, and industry professionals to achieve their dreams and create outstanding cinematic experiences.",
    image: Image1,
  },
  {
    heading: "Who We Are",
    description:
      "Film Help Squad was founded by a team of passionate film enthusiasts who recognized the need for a dedicated space where creatives from all corners of the industry could come together. Our founders have backgrounds in filmmaking, technology, and community building, making us uniquely positioned to understand and serve the needs of our diverse community.",
    image: Image2,
    transform: "ScaleX(-1)",
  },
];

const SecTwo = () => {
  const lineStyle = {
    width: "191px",
    borderBottom: "3px solid #DECDC6",
  };
  return (
    <>
      {sectionData.map((item, index) => (
        <Grid
          container
          key={index}
          sx={{ transform: item.transform, justifyContent: "space-around" }}
        >
          <Grid
            item
            lg={5}
            xs={12}
            className="width-100 flex flex-column justify-center"
            sx={{
              maxWidth: 782,
              gap: "1rem",
              transform: item.transform,
              px: { lg: 0, xs: "2rem" },
              textAlign: { lg: "start", xs: "center" },
            }}
          >
            <Typography className="font-weight-400 font-family-dm dm-color heading-40">
              {item.heading}
            </Typography>
            <Box className="justify-c-center">
              <div style={lineStyle}></div>
            </Box>
            <Typography className="text-color font-weight-400 font-family-lato text-align-c heading-20">
              {item.description}
            </Typography>
            <PrimaryBtn btnText="Join Now for Free" />
          </Grid>
          <Grid
            item
            lg={5}
            xs={12}
            p={{ lg: "0", xs: "20px" }}
            sx={{ transform: item.transform }}
          >
            <img src={item.image} width={"100%"} alt="" />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default SecTwo;
