import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const PrimaryBtn = ({ btnText, btnSx, btnClass }) => {
  const className = `primary-bg-color white-color sub-heading font-family-plus font-weight-500 ${btnClass}`;

  return (
    <Link to="/professionals/create-profile">
      <Button className={className} sx={{ p: "12px 18px", ...btnSx }}>
        {btnText}
      </Button>
    </Link>
  );
};
