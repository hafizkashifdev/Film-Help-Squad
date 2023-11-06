import React from "react";
import { Container, Grid } from "@mui/material";
import Candidates from "./sections/Candidates";
import Employer from "./sections/Employer";
import Agent from "./sections/Agent";
import { useLocation, useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const location = useLocation()?.pathname?.split("/")?.filter(n => n);
  const handleOptionClick = (option) => {
    navigate(`/${option}/create-profile`, { replace: true }); 
  };

  const getOptionBackgroundColor = (option) => {
    return option === location[0] ? "#F8F5F4" : "initial";
  };
  const getOptionColor = (option) => {
    return option === location[0] ? "#151C48" : "#A1A4B6";
  };
  const getOptionBold = (option) => {
    return option === location[0] ? "600" : "400";
  };
  const renderSelectedComponent = () => {
    switch (location[0]) {
      case "professionals":
        return <Candidates />;
      case "employers":
        return <Employer />;
      case "agents":
        return <Agent />;
      default:
        return null;
    }
  };
  return (
    <Container className="flex flex-column justify-center align-center" sx={{mt: {md: "6rem", sm: '3rem', xs: '2rem'}}}>
      <Grid
        container
        sx={{
          maxWidth: "900px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #E8E8ED",
        }}
      >
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            p: "16px",
            color: getOptionColor("professionals"),
            fontWeight: getOptionBold("professionals"),
            backgroundColor: getOptionBackgroundColor(
              "professionals"
            ),

          }}
          className="width-100 flex align-center justify-center heading-20 font-family-lato cursor-pointer"
          onClick={() => handleOptionClick("professionals")}
        >
          Candidates/Professionals
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            p: "16px",
            color: getOptionColor("employers"),
            fontWeight: getOptionBold("employers"),
            backgroundColor: getOptionBackgroundColor("employers"),
            borderRight: {md: '1px solid #E8E8ED', xs: 'none'},
            borderLeft: {md: '1px solid #E8E8ED', xs: 'none'},
            borderTop: {md: 'none', xs: '1px solid #E8E8ED'},
            borderBottom: {md: 'none', xs: '1px solid #E8E8ED'}
          }}
          className="width-100 flex align-center justify-center heading-20 font-family-lato cursor-pointer"
          onClick={() => handleOptionClick("employers")}
        >
          Employer
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            p: "16px",
            color: getOptionColor("agents"),
            fontWeight: getOptionBold("agents"),
            backgroundColor: getOptionBackgroundColor("agents"),
          }}
          className="width-100 flex align-center justify-center heading-20 font-family-lato cursor-pointer"
          onClick={() => handleOptionClick("agents")}
        >
          Agent
        </Grid>
      </Grid>
      <div className="margin-top-3">
      {renderSelectedComponent()}
      </div>
    </Container>
  );
};

export default CreateProfile;
