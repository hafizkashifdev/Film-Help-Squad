import React from "react";
import HeroWWU from "./sections/HeroWWU";
import WhyWWU from "./sections/WhyWWU";
import Opportunities from "./sections/Opportunities";
import Colaborate from "./sections/Colaborate";
import HowApply from "./sections/HowApply";
import { Box } from "@mui/material";

const WorkWithUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { md: "7rem", xs: "4rem" },
      }}
    >
      <HeroWWU />
      <WhyWWU />
      <Opportunities />
      <Colaborate />
      <HowApply />
    </Box>
  );
};

export default WorkWithUs;
