import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { forumData } from "./forum-data";

const ForumGuidelines = () => {
  const headingClasses = [
    "heading-40",
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
        {forumData.map((item) => (
          <Grid container spacing={2}>
            <Grid item className="flex flex-column" gap={{ md: 2, xs: 1 }}>
              <Typography className={headingClasses}>
                {item?.heading}
              </Typography>
              <Typography className={descClasses}>
                {item?.description}
              </Typography>
            </Grid>
            <Grid item className="flex flex-column" gap={{ md: 4, xs: 2 }}>
              {item.subData.map((item) => (
                <Box className="flex flex-column" gap={1}>
                  <Typography className={subHeadingClasses}>
                    {item?.head}
                  </Typography>
                  <Typography className={descClasses}>{item?.desc}</Typography>
                </Box>
              ))}
            </Grid>
            <Grid item className="flex flex-column" gap={{ md: 2, xs: 1 }}>
              <Typography className="heading-30 font-weight-400 font-family-dm primary-color">
                {item?.bottomHead}
              </Typography>
              <Typography className={descClasses}>
                {item?.bottomDesc1}
              </Typography>
              <Typography className={descClasses}>
                {item?.bottomDesc2}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Card>
    </Container>
  );
};

export default ForumGuidelines;
