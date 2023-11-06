import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";
import { helpData } from "./help-data";

const Help = () => {
  const headingClasses = [
    "heading-30",
    "font-weight-400",
    "font-family-dm",
    "green-color",
  ];
  const subHeadingClasses = [
    "heading-25",
    "font-weight-400",
    "font-family-dm",
    "dm-color",
  ];
  const descClasses = [
    "heading-20",
    "font-weight-400",
    "font-family-lato",
    "text-desc-color",
    "margin-top-0",
  ];

  return (
    <Container
      className="flex justify-center align-center"
      sx={{ mt: { md: "6rem", sm: "3rem", xs: "2rem" } }}
    >
      <Card
        sx={{
          maxWidth: "1600px",
          boxShadow: "0px 31.00949px 64px 0px rgba(0, 0, 0, 0.08)",
          p: { md: "60px", sm: "40px", xs: "20px" },
          gap: "2rem",
          borderRadius: "25px",
        }}
        className="width-100 flex flex-column"
      >
        <Box>
          <Typography className="primary-color heading-40 font-family-dm font-weight-400">
            Help-FAQ
          </Typography>
        </Box>
        {helpData.map((item, index) => (
          <Box className="flex flex-column" gap={4} key={index}>
            <Typography className={headingClasses}>{item.heading}</Typography>
            {item.quesAns.map((qa, subIndex) => (
              <div key={subIndex}>
                <Typography className={subHeadingClasses}>{qa.q}</Typography>
                <Typography className={descClasses}>{qa.ans}</Typography>
              </div>
            ))}
          </Box>
        ))}
      </Card>
    </Container>
  );
};

export default Help;
