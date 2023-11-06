import React from "react";
import { FBIcon } from "../../assets/SVG/FB-Icon";
import { TwitterIcon } from "../../assets/SVG/Twitter-icon";
import { LinkedinIcon } from "../../assets/SVG/Linkedin-Icon";
import { InstagramIcon } from "../../assets/SVG/Instagram-Icon";
import { Box } from "@mui/material";

export const GlobalSocialIcons = () => {
  const iconLine = {
    width: "1px",
    height: "36px",
    backgroundColor: "#fff",
  };
  return (
    <Box
      className="flex align-center"
      sx={{
        flexDirection: { lg: "column", xs: "row" },
        gap: { lg: "1rem", xs: "2rem" },
        mt: { lg: "0", xs: "4rem" },
      }}
    >
      <a
        href="https://www.facebook.com/people/Filmhelp-Squad/pfbid0M6GdUa4Ass4bZvAjFVbY5ZUfwwfxxh66LmRGfp4ui1JevrR3nvYJHjXBob8o2D7Ml/"
        rel="noreferrer"
        target="_blank"
      >
        <FBIcon fill="#fff" />
      </a>
      <Box style={iconLine} sx={{ display: { lg: "block", xs: "none" } }}></Box>
      <a
        href="https://twitter.com/i/flow/login?redirect_after_login=%2Ffilmhelpsquad"
        rel="noreferrer"
        target="_blank"
      >
        <TwitterIcon fill="#fff" />
      </a>
      <Box style={iconLine} sx={{ display: { lg: "block", xs: "none" } }}></Box>
      <a
        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFPCnS13q-aawAAAYp1WgNgiuWweJnQWDq6isUweyhqWXm9j0uUzSMV3NfyONP7JAGu4Por8rLzBAD0VIMrr6c9R7tpz4FIB7RTa1EchmWYX4do1e4cEHa3jJo7YUIiyzCpL-A=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ffilm-help-squad-034a9928b%2F"
        rel="noreferrer"
        target="_blank"
      >
        <LinkedinIcon fill="#fff" />
      </a>
      <Box style={iconLine} sx={{ display: { lg: "block", xs: "none" } }}></Box>
      <a
        href="https://www.instagram.com/filmhelpsquad/?next=%2F"
        rel="noreferrer"
        target="_blank"
      >
        <InstagramIcon fill="#fff" />
      </a>
    </Box>
  );
};
