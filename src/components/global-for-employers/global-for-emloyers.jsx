import React from "react";
import Hero from "./sections/Hero";
import JoinSquad from "./sections/JoinSquad";
import Profiles from "./sections/Profiles";
import ActingRoles from "./sections/ActingRoles";
import { Box } from "@mui/material";

export const GlobalForEmployers = ({
  heroHeading,
  heroSubHead,
  heroImg,
  profile,
  btnData,
  btnHeading,
  btnSubHead,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { md: "7rem", xs: "4rem" },
      }}
    >
      <Hero
        heroHeading={heroHeading}
        heroImg={heroImg}
        heroSubHead={heroSubHead}
      />
      <JoinSquad />
      <div style={{ display: profile === true ? "" : "none" }}>
        <Profiles />
      </div>
      <ActingRoles
        btnData={btnData}
        btnHeading={btnHeading}
        btnSubHead={btnSubHead}
      />
    </Box>
  );
};
