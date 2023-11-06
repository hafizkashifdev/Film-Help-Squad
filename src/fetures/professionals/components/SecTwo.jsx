import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Img1 from "../../../assets/Images/professionals/Image1.png";
import Img2 from "../../../assets/Images/professionals/Image2.png";
import Img3 from "../../../assets/Images/professionals/Image3.png";
import Img4 from "../../../assets/Images/professionals/Image4.png";
import Img5 from "../../../assets/Images/professionals/Image5.png";
import Img6 from "../../../assets/Images/professionals/Image6.png";

const imgData = [
  {
    img: Img1,
    imgName: "Laura Beckford",
    imgDecs: "Female / England",
  },
  {
    img: Img2,
    imgName: "Brian Goredema-Braid",
    imgDecs: "Male / England",
  },
  {
    img: Img3,
    imgName: "Joshua Glenister",
    imgDecs: "Male/ England",
  },
  {
    img: Img4,
    imgName: "Sadie Townsend",
    imgDecs: "Female / England",
  },
  {
    img: Img5,
    imgName: "Harrie Wenham",
    imgDecs: "Male / England",
  },
  {
    img: Img6,
    imgName: "Kahmal Sealey",
    imgDecs: "Male/ England",
  },
];

const SecTwo = () => {
  return (
    <Grid container className="justify-center" gap={7}>
      {imgData.map((item, index) => (
        <Grid
          item
          md={3}
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
            <Typography className="heading-25 font-weight-400 font-family-dm secondary-color">
              {item?.imgName}
            </Typography>
            <br />
            <Typography className="sub-heading font-weight-400 font-family-lato secondary-color">
              {item?.imgDecs}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SecTwo;
