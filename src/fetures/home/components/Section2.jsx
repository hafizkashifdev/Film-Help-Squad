import React from "react";
import "../home.scss";
import { Grid, Typography, Box, Button } from "@mui/material";
import Image1 from "../../../assets/Images/home/section2/image1.png";
import Image2 from "../../../assets/Images/home/section2/image2.png";
import Image3 from "../../../assets/Images/home/section2/image3.png";
import Image4 from "../../../assets/Images/home/section2/image4.png";
import Image5 from "../../../assets/Images/home/section2/image5.png";
import Image6 from "../../../assets/Images/home/section2/image6.png";
import Image7 from "../../../assets/Images/home/section2/image7.png";
import Image8 from "../../../assets/Images/home/section2/image8.png";
import Image9 from "../../../assets/Images/home/section2/image9.png";
import Image10 from "../../../assets/Images/home/section2/image10.png";
import { Link } from "react-router-dom";

const Section2 = () => {
  const imageData = [
    {
      id: "actors",
      img: Image1,
      type: "Actor",
    },
    {
      id: "voiceover-artist",
      img: Image2,
      type: "Voiceover Artists",
    },
    {
      id: "singers",
      img: Image3,
      type: "Singers",
    },
    {
      id: "dancers",
      img: Image4,
      type: "Dancers",
    },
    {
      id: "talent",
      img: Image5,
      type: "Talent",
    },
    {
      id: "child-actors",
      img: Image6,
      type: "Child Actors",
    },
    {
      id: "entertainers",
      img: Image7,
      type: "Entertainers",
    },
    {
      id: "film&tv-production",
      img: Image8,
      type: "Film & TV Production",
    },
    {
      id: "theatre-professionals",
      img: Image9,
      type: "Theatre Professionals",
    },
    {
      id: "music-professionals",
      img: Image10,
      type: "Music Professionals",
    },
  ];

  const lineStyle = {
    width: "191px",
    height: "3px",
    backgroundColor: "#DECDC6",
  };
  return (
    <Grid
      container
      className="justify-center flex-column align-center"
      gap={{ md: "4rem", sm: "2rem", xs: "1rem" }}
      id="employer-types"
    >
      <Box
        className="flex flex-column align-center text-align-c"
        sx={{ px: { md: 0, sm: "10px", xs: "6px" }, gap: "1rem" }}
      >
        <Typography className="heading-40 font-weight-400 font-family-dm dm-color">
          Join the Creative Minds on the Film Help Squad
        </Typography>
        <div style={lineStyle}></div>
        <Typography className="heading-20 font-weight-400 font-family-lato text-color center-text">
          Where your cinematic dreams get the expert guidance they deserve!
        </Typography>
      </Box>

      <Grid container sx={{ gap: "3rem", justifyContent: "center" }}>
        {imageData.map((item, index) => (
          <Link to={`/${item.id}`}>
            <Grid
              item
              key={index}
              className="s2-img-container s2-img-hover-zoom border-radius-8"
            >
              <img
                src={item.img}
                alt="profession-types"
                width={"100%"}
                className="cursor-pointer"
              />
              <div className="s2-overlay cursor-pointer">
                <div className="s2-img-text heading-30 font-weight-400 font-family-dm white-color center-text">
                  {item.type}
                </div>
              </div>
            </Grid>
          </Link>
        ))}
      </Grid>

      <Box
        className="flex flex-column align-center text-align-c"
        sx={{ px: { md: 0, sm: "10px", xs: "6px" }, gap: "1rem" }}
      >
        <Typography className="heading-40 font-weight-400 font-family-dm dm-color">
          We Are A Community!
        </Typography>
        <div style={lineStyle}></div>
        <Typography className="heading-20 font-weight-400 font-family-lato text-color center-text">
          Join our community of entertainment industry. Find work, Collaborate
          and support each other - all in one place. Got a question? Need help?
          Film Help Squad
        </Typography>
        <Box className="flex" gap={"1rem"}>
          <Link to="/forum-guidelines">
            <Button
              sx={{ p: "12px 18px" }}
              className="primary-bg-color white-color font-family-plus border-radius-5 sub-heading"
            >
              Forum
            </Button>
          </Link>
          <Link to="/notices&events">
            <Button
              sx={{
                p: "12px 18px",
                border: "1px solid #44496D",
              }}
              className="bg-none primary-color font-family-plus border-radius-5 sub-heading"
            >
              Notices & Events
            </Button>
          </Link>
          <Link to="/guides">
            <Button
              sx={{ p: "12px 18px" }}
              className="primary-bg-color white-color font-family-plus border-radius-5 sub-heading"
            >
              Guides
            </Button>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default Section2;
