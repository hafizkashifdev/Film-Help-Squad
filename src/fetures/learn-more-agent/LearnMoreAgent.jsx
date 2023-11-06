import React from "react";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { LEARN_AGENT } from "./learn-agent-data";

const LearnMoreAgent = () => {
  const subHeadingClasses = [
    "heading-25",
    "font-weight-400",
    "font-family-dm",
    "dm-color",
  ];
  const descClasses = [
    "sub-heading",
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
        className="width-100"
      >
        {LEARN_AGENT.map((item, index) => (
          <Grid key={index} className="flex flex-column" sx={{gap: {md: 2, xs: 1}}}>
            <Box>
              <Typography className="dm-color heading-40 font-family-dm font-weight-400">{item?.mainHead}</Typography>
              <Typography className="primary-color heading-20 font-family-dm font-weight-400 margin-top-0-8">{item?.mainDisc}</Typography>
              <Typography className={descClasses}>{item?.mainSubDesc}</Typography>
            </Box>
            {item?.subData.map((sItem, sIndex) => (
              <Box key={sIndex} className='flex flex-column' sx={{gap: 1}}>
                <Typography className={subHeadingClasses}>{sItem?.subHead}</Typography>
                {sItem?.subHeadData.map((i) => (
                  <Box>
                    <Typography className="primary-color heading-20 font-family-dm font-weight-400">{i?.subHeadType}</Typography>
                    <Typography className={descClasses}>{i?.subDesc}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
            {item?.howWorkData.map((hItem, hIndex) => (
              <Box key={hIndex}>
                <Typography className={subHeadingClasses}>{hItem?.heading}</Typography>
                {hItem?.subHW.map((i) => (
                  <Box>
                    <Typography className={descClasses}>
                      <span style={{ color: "#151C48", fontWeight: 600 }}>
                        {i?.q} &nbsp;
                      </span>
                      {i?.ans}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ))}
            <Typography className="primary-color sub-heading font-family-plus font-weight-400">{item?.footerText}</Typography>
          </Grid>
        ))}
      </Card>
    </Container>
  );
};

export default LearnMoreAgent;
