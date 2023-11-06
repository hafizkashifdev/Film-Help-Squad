import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import WhiteCustomField from "../../../components/white-custom-field/white-custom-field";

const repData = [
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

const Agent = () => {
  const [repVal, setRepVal] = useState(""); 
  const [client, setClient] = useState(""); 
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
          Agent
        </Typography>
        <div style={lineStyle}></div>
        <Typography className="heading-20 font-weight-400 font-family-dm dm-color text-align-c">
          Your Agent profile
        </Typography>
      </Box>
      <Grid container spacing={2} className="margin-top-0-2">
        <Grid item xs={12}>
          <WhiteCustomField label="Company" require />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField label="Position" require />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            type="select"
            label="Representation Type"
            selectPlaceholder="Agent"
            data={repData}
            selectVal={repVal}
            setSelectVal={setRepVal}
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
          type='select'
            label="Number of Clients"
            selectPlaceholder="1-50"
            selectVal={client}
            setSelectVal={setClient}
            data={['1-50','50-100','100-200', '500-1000', '1000+']}
            require
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            label="Primary Phone"
            fieldPlaceholder="+440000000000"
            fieldType="number"
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField label="Country" fieldPlaceholder="England" require />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            label="Post Code"
            fieldPlaceholder="Ub11 FW"
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
            className="width-100 margin-top-0 bg-primary-color white-color font-family-plus sub-heading font-weight-500 border-radius-8"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Agent;
