import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessIcon from "@mui/icons-material/Business";
import { ReactComponent as FSHIcon } from "../../assets/SVG/FSH-Icon.svg";
import { FBIcon } from "../../assets/SVG/FB-Icon";
import { TwitterIcon } from "../../assets/SVG/Twitter-icon";
import { LinkedinIcon } from "../../assets/SVG/Linkedin-Icon";
import { InstagramIcon } from "../../assets/SVG/Instagram-Icon";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../primary-button/PrimaryBtn";

const employerData = [
  {
    page: "Actors",
    path: "/actors",
  },
  {
    page: "Film and TV Productions",
    path: "/film&tv-production",
  },
  {
    page: "Theatre Professionals",
    path: "/theatre-professionals",
  },
  {
    page: "Voiceover Artists",
    path: "/voiceover-artist",
  },
  {
    page: "Singers",
    path: "/singers",
  },
  {
    page: "Dancers",
    path: "/dancers",
  },
  {
    page: "Music Professionals",
    path: "/music-professionals",
  },
  {
    page: "Child Actors",
    path: "/child-actors",
  },
  {
    page: "Talent",
    path: "/talent",
  },
  {
    page: "Entertainers",
    path: "/entertainers",
  },
];
const companyData = [
  {
    page: "About Us",
    path: "/about-us",
  },
  {
    page: "Career",
    path: "/careers",
  },
  {
    page: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    page: "T&C’s",
    path: "/terms&conditions",
  },
  {
    page: "Contact Us",
    path: "/contact-us",
  },
  {
    page: "Help",
    path: "/help",
  },
];

const Footer = () => {
  return (
    <>
      <Grid
        container
        sx={{
          py: { md: "8rem", sm: "4rem", xs: "2rem" },
          mt: { md: "6rem", sm: "3rem", xs: "2rem" },
        }}
        className="secondary-bg-color "
      >
        <Grid
          item
          xl={2.5}
          lg={2.5}
          sm={4}
          xs={12}
          px={{ xs: "30px", sm: 0 }}
          sx={{ gap: "24px" }}
          className="flex flex-column center-text"
        >
          <Box>
            <FSHIcon />
          </Box>
          <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <FBIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <InstagramIcon />
          </Box>
          <Box>
            <PrimaryBtn btnText="Join Now for Free" />
          </Box>
        </Grid>

        <Grid
          item
          xl={2.4}
          lg={2.3}
          sm={4.5}
          xs={12}
          px={{ xs: "30px", sm: 0 }}
          sx={{ gap: "16px", mt: { xs: "20px", sm: 0 } }}
          className="flex flex-column"
        >
          <Typography className="primary-color heading-30 font-family-dm font-weight-400">
            For Employers
          </Typography>
          <Box sx={{ gap: "12px" }} className="flex flex-column">
            {employerData.map((item, index) => (
              <Link to={item.path} key={index}>
                <li
                  className="text-color heading-20 cursor-pointer"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {item.page}
                </li>
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xl={2.3}
          lg={2}
          sm={3.5}
          xs={12}
          px={{ xs: "30px", sm: 0 }}
          sx={{ gap: "16px", mt: { xs: "20px", sm: 0 } }}
          className="flex flex-column"
        >
          <Typography className="primary-color heading-30 font-family-dm font-weight-400">
            Company
          </Typography>
          <Box sx={{ gap: "12px" }} className="flex flex-column">
            {companyData.map((item, index) => (
              <Link to={item.path} key={index}>
                <li className="text-color heading-20 cursor-pointer">
                  {item.page}
                </li>
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xl={4.5}
          lg={4.8}
          xs={12}
          px={{ xs: "20px", sm: "25px", md: "30px", lg: 0 }}
          sx={{ width: "100%", mt: { xs: "20px", md: 0 } }}
        >
          <Typography
            textAlign={{ md: "start", xs: "center" }}
            className="font-family-lato text-color heading-20 font-weight-400"
          >
            In an ever-evolving landscape, the film industry stands at the
            forefront of innovation. As technology continues to redefine
            storytelling, filmmakers find themselves navigating the exciting
            digital revolution. From cutting-edge CGI to immersive virtual
            production techniques, the possibilities are limitless. Our film
            industry website is your gateway to staying informed and inspired by
            the latest trends, tools, and talents that shape the future of
            cinema.
            {/* Join us on a journey where creativity meets technology, and
            where the magic of storytelling is brought to life in ways never
            before imagined. Explore articles, interviews, and resources that
            celebrate the dynamic fusion of art and technology in the world of
            film. Welcome to the digital era of filmmaking; welcome to the
            future. */}
          </Typography>
          <Box mt={"16px"} textAlign={{ md: "start", xs: "center" }}>
            <Typography
              justifyContent={{ md: "start", xs: "center" }}
              className="font-family-plus primary-color heading-20 font-weight-600 flex align-center"
            >
              <MailOutlineIcon className="label-color" /> &#160;
              Email:
            </Typography>
            <Typography className="font-family-lato text-color sub-heading font-weight-400">
              Info@Filmhelpsquad.co.uk
            </Typography>
          </Box>
          <Box mt={"10px"} textAlign={{ md: "start", xs: "center" }}>
            <Typography
              justifyContent={{ md: "start", xs: "center" }}
              className="font-family-plus primary-color heading-20 font-weight-600 flex align-center"
            >
              <BusinessIcon className="label-color" /> &#160;
              Address:
            </Typography>
            <Typography className="font-family-lato text-color sub-heading font-weight-400">
              Unit 8, Northgate Industrial Park, Collier Row Road, Romford,
              England, RM5 2BG
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <div className="flex justify-center heading-20 font-family-lato text-color text-align-c">
        <Typography sx={{ py: "20px" }}>
          © Copyright 2023. THE GREAT BRITISH FILM SCHOOL CIC. All Rights
          Reserved
        </Typography>
      </div>
    </>
  );
};

export default Footer;
