import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import WhiteCustomField from "../../../components/white-custom-field/white-custom-field";

const roleData = [
  "Actors",
  "Singers",
  "Dancers",
  "Voiceover Artists",
  "Child Actor",
  "Talent",
  "Entertainer",
  "Crew Job",
  "Theatre Jobs",
  "Music Jobs",
];
const countyData = ['Cornwall', 'Durham', 'Gloucestershire', 'Hampshire', 'Somerset', 'Warwickshire' ];

const Employer = () => {
  const [roleVal, setRoleVal] = useState("");
  const [countyVal, setCountyVal] = useState("");
  const lineStyle = {
    width: "191px",
    borderBottom: "3px solid #DECDC6",
  };
  return (
    <Card
      sx={{
        maxWidth: "800px",
        p: { md: "60px", sm: "30px", xs: "20px" },
        boxShadow: "0px 31.00949px 64px 0px rgba(0, 0, 0, 0.08)",
        borderRadius: "12px",
      }}
    >
      <Box className="flex flex-column align-center center-text" gap={2}>
        <Typography className="heading-30 font-weight-400 font-family-dm dm-color text-align-c">
          Employer
        </Typography>
        <div style={lineStyle}></div>
        <Typography className="text-color heading-20 font-weight-400 font-family-lato text-align-c">
          Welcome to Film Help Squad's employer platform! Create your account,
          showcase your company's identity, and let's bring your cinematic
          visions to life.
        </Typography>
      </Box>
      <Grid container spacing={2} className="margin-top-0-2">
        <Grid item xs={12}>
          <WhiteCustomField
            label="Organization"
            fieldPlaceholder="Brand/Company"
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            type="select"
            label="Job Title/Role"
            selectPlaceholder="Actor/Performer"
            data={roleData}
            selectVal={roleVal}
            setSelectVal={setRoleVal}
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            label="Company"
            fieldPlaceholder="Personnel Library"
            require
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            label="Primary Phone"
            fieldPlaceholder="+44000000000"
            fieldType="number"
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            type="select"
            label="County"
            selectPlaceholder="UxBridge City"
            require
            data={countyData}
            selectVal={countyVal}
            setSelectVal={setCountyVal}
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            label="Post Code"
            fieldPlaceholder="UB11 1FW"
            require
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField label="Company, Production, or Personal Website" />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField label="Professional Link" />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ py: "10px" }}
            className="width-100 bg-primary-color white-color font-family-plus sub-heading font-weight-500 border-radius-8"
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Employer;
