import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import SVGCard1 from "../../../assets/Images/home/section5/card-svg1.svg";
import SVGCard2 from "../../../assets/Images/home/section5/card-svg2.svg";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    image: SVGCard1,
    heading: "For Employers",
    li: [
      "Post jobs for Free",
      "Use our search engine to fine perfect candidates",
      "Add images and media to your Job Posts to attract the best candidates",
      "Schedule auditions, interviews and create shortlists",
      "Reach the best talent worldwide - request a video auditions!",
    ],
    btnTextOne: "Post a Job for Free",
    btnTextTwo: "Learn More",
    path1: '/employers/create-profile',
    path2: '/learn-more-employers',
  },
  {
    image: SVGCard2,
    heading: "For Agents",
    li: [
      "Access thousands of exclusive jobs and castings",
      "Submit your clients with the click of a button",
      "Use our tracking tool to monitor client performance",
      "Get Listed in our database and connect with production companies and casting directors",
      "Find and connect with new talent",
    ],
    btnTextOne: "Join Now for Free",
    btnTextTwo: "Learn More",
    path1: '/agents/create-profile',
    path2: '/learn-more-agents',
  },
];
const Section6 = () => {
  const navigate = useNavigate();
  return (
    <Grid container className="flex justify-space-around">
      {cardData.map((item) => (
        <Grid
          item
          xs={12}
          lg={5.5}
          mb={{ xs: 2 }}
          sx={{
            p: { md: "40px", sm: "30px", xs: "20px" },
            gap: "1rem",
            borderRadius: "25px",
            boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.15)",
            mx: "15px",
          }}
          className="flex flex-column justify-center align-center"
        >
          <img src={item?.image} alt="" />
          <Typography className="heading-30 font-weight-400 font-family-dm dm-color">
            {item?.heading}
          </Typography>
          <ul className="flex flex-column" style={{ gap: "10px" }}>
            {item?.li.map((item, index) => (
              <li className="start-text heading-20 font-weight-400 font-family-lato text-color">
                {item}
              </li>
            ))}
          </ul>
          <Button
            className="primary-bg-color width-100 white-color sub-heading font-weight-500 font-family-plus"
            sx={{ p: "18px" }}
            onClick={()=>navigate(item?.path1)}
          >
            {item?.btnTextOne}
          </Button>
          <Button
            className="bg-none width-100 primary-color sub-heading font-weight-500 font-family-plus"
            sx={{ p: "18px", border: "1px solid #44496D" }}
            onClick={()=>navigate(item?.path2)}
          >
            {item?.btnTextTwo}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Section6;
