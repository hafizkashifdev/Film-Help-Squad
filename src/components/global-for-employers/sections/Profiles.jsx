import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Img1 from "../../../assets/Images/professionals/Image1.png";
import Img2 from "../../../assets/Images/professionals/Image2.png";
import Img3 from "../../../assets/Images/professionals/Image3.png";

const imgData = [
  {
    img: Img1,
    imgName: "Julio, Actor",
    imgDecs:
      "Production Designer | Art Director | Standby | Art Dept Assistant | Graphics | Scenic Painter | Food Stylist C.Creary-Myers W (Design): http://creary myersart.tumblr.com/ 2010, I completed my creative training at Westminster University (a multi- disciplinary Artist & Designer), I have a bachelor of Arts in Film Photography and Digital media..",
  },
  {
    img: Img2,
    imgName: "Ben, Actor",
    imgDecs:
      "Production Designer | Art Director | Standby | Art Dept Assistant | Graphics | Scenic Painter | Food Stylist C.Creary-Myers W (Design): http://creary myersart.tumblr.com/ 2010, I completed my creative training at Westminster University (a multi- disciplinary Artist & Designer), I have a bachelor of Arts in Film Photography and Digital media..",
  },
  {
    img: Img3,
    imgName: "John, Actors",
    imgDecs:
      "Production Designer | Art Director | Standby | Art Dept Assistant | Graphics | Scenic Painter | Food Stylist C.Creary-Myers W (Design): http://creary myersart.tumblr.com/ 2010, I completed my creative training at Westminster University (a multi- disciplinary Artist & Designer), I have a bachelor of Arts in Film Photography and Digital media..",
  },
];
const Profiles = () => {
  const lineStyle = {
    width: "191px",
    height: "3px",
    backgroundColor: "#DECDC6",
  };
  return (
    <>
      <Box
        className="flex flex-column align-center center-text"
        sx={{ px: { md: "0", xs: "2rem" }, gap: 2 }}
      >
        <Typography className="font-family-dm dm-color font-weight-400 heading-40">
          Check out the Profiles of our Acting Squad
        </Typography>
        <div style={lineStyle}></div>
        <Typography className="font-family-lato text-color font-weight-400 heading-20">
          Where your cinematic dreams get the expert guidance they deserve!
          varius sapien.
        </Typography>
      </Box>
      <Grid container className="justify-center margin-top-3" gap={7}>
        {imgData.map((item, index) => (
          <Grid
            item
            lg={3}
            sm={5}
            sx={{ position: "relative", mx: { sm: 0, xs: "2rem" } }}
            key={index}
          >
            <img src={item?.img} alt="profile" width={"100%"} />
            <Box
              sx={{
                borderRadius: "20px",
                bgcolor: "rgba(238, 238, 238, 0.1)",
                width: "80%",
                p: "24px",
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Typography className="font-weight-400 heading-25 font-family-dm secondary-color">
                {item?.imgName}
              </Typography>
              <Typography
                sx={{ mt: { lg: "12px", xs: "6px" } }}
                className="sub-heading font-weight-400 font-family-lato secondary-color"
              >
                {item?.imgDecs}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Profiles;
