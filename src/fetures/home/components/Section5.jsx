import React from "react";
import { Grid, Typography } from "@mui/material";
import SVG1 from "../../../assets/Images/home/section5/svg1.svg";
import SVG2 from "../../../assets/Images/home/section5/svg2.svg";
import SVG3 from "../../../assets/Images/home/section5/svg3.svg";

const sectionData = [
  {
    image: SVG1,
    heading: "Instant Job Alert",
    description:
      "Receive instant email notifications for exclusive jobs and auditions, matched to your location and skill set. Never miss another opportunity.",
  },
  {
    image: SVG2,
    heading: "Professional Profile",
    description: `Create your profile and get listed in our professional database, used by the industry's leading employers to connect with talent.`,
  },
  {
    image: SVG3,
    heading: "Network & Connections",
    description:
      "Join our creative community of over 3.28M professionals and use our industry leading tools to connect and build your network of contacts.",
  },
];

const Section5 = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "auto",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {sectionData.map((item, index) => (
        <Grid
          item
          md={3.3}
          xs={9}
          className="flex flex-column justify-space-between align-center"
          key={index}
          sx={{ gap: { md: 2, xs: 1 } }}
        >
          <img src={item.image} alt="" width={"200px"} />
          <Typography className="heading-25 font-weight-400 font-family-dm dm-color">
            {item.heading}
          </Typography>
          <Typography className="heading-20 center-text font-weight-400 font-family-lato text-color">
            {item.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Section5;
