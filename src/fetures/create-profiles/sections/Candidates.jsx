import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useState, useRef } from "react";
import { DateRangePicker } from "../../../components/date-picker/date-picker";
import WhiteCustomField from "../../../components/white-custom-field/white-custom-field";

const ganderData = ["Male", "Female", "LGBTQIA+", "Prefer Not To Say"];

const Candidates = () => {
  const [genderVal, setGenderVal] = useState("");
  const [importedFileName, setImportedFileName] = useState("");
  const lineStyle = {
    width: "191px",
    borderBottom: "3px solid #DECDC6",
  };
  const fileImport = useRef(null);
  const handleImport = () => {
    fileImport.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImportedFileName(selectedFile.name);
    }
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
          Your Profile
        </Typography>
        <Typography className="justify-c-center">
          <div style={lineStyle}></div>
        </Typography>
      </Box>
      <Grid container spacing={2} className="margin-top-0-2">
        <Grid item xs={12}>
          <WhiteCustomField
            label="Stage/Professional Name"
            fieldPlaceholder="Personnel Library"
            require
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            type="select"
            label="Gender"
            selectPlaceholder="Male"
            data={ganderData}
            selectVal={genderVal}
            setSelectVal={setGenderVal}
          />
        </Grid>
        <Grid item xs={12}>
          <DateRangePicker label="Date of Birth" require />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField label="City" fieldPlaceholder="Southhall" />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField label="County" fieldPlaceholder="England" />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            label="Post Code"
            fieldPlaceholder="Ub11 FW"
            require
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField label="Country" fieldPlaceholder="UK" />
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField
            label="Primary Phone"
            fieldPlaceholder="+440000000000"
            fieldType="number"
          />
          <span
            style={{
              fontSize: "12px",
              color: "#4B5563",
              fontFamily: `'Lato', sans-serif`,
            }}
          >
            Your phone number is kept private and will only be shared as per
            your preferences.
          </span>
        </Grid>
        <Grid item>
          <Box className="flex flex-column align-center center-text" gap={2}>
            <Typography className="heading-30 font-weight-400 font-family-dm dm-color margin-top-1 text-align-c">
              Portfolio
            </Typography>
            <Typography className="justify-c-center">
              <div style={lineStyle}></div>
            </Typography>
            <Typography className="heading-20 font-weight-400 font-family-dm dm-color text-align-c">
              Images
            </Typography>
            <Typography className="heading-20 font-weight-400 font-family-lato text-color text-align-c">
              Your portfolio is more than just images and videos; it's your
              visual identity in the world of storytelling. Start uploading and
              crafting your narrative today, and let your work speak for itself.
              Your journey in the world of cinema begins here.
            </Typography>
            <Typography className="heading-20 font-weight-400 font-family-dm dm-color text-align-c">
              Upload New Media
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <WhiteCustomField label="Title" require />
          <span
            style={{
              fontSize: "12px",
              color: "#4B5563",
              fontFamily: `'Lato', sans-serif`,
            }}
          >
            Description title, displayed in portfolio
          </span>
        </Grid>
        <Grid item xs={12}>
          <label className="label-color secondary-title font-family-lato font-weight-500">
            File <span className="error-color">*</span>
            <Box
              // onClick={handleImport}
              className="margin-top-0 border-radius-8"
              sx={{
                border: "1px solid #E8E8ED",
                p: "11px 16px",
                ":hover": {
                  border: "3px solid #CFF2ED",
                  padding: "9px 13px",
                },
              }}
            >
              {importedFileName ? (
                <span className="font-family-plus green-color font-weight-400 secondary-title">
                  {importedFileName}
                </span>
              ) : (
                <span className="font-family-plus text-desc-color font-weight-400 secondary-title">
                  Pick a file
                </span>
              )}
            </Box>
          </label>
          <FormControlLabel
            control={<Checkbox sx={{ color: "#D1D5DB" }} />}
            label={
              <span className="font-family-plus primary-color font-weight-400">
                Set as default image
              </span>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="fileInput">
            <Button
              sx={{ py: "10px", border: "1px solid #44496D", color: "#44496D" }}
              className="width-100 bg-none font-family-plus sub-heading font-weight-500 border-radius-8"
              onClick={handleImport}
            >
              Upload Media
            </Button>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            ref={fileImport}
            onChange={handleFileChange}
          />
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

export default Candidates;
