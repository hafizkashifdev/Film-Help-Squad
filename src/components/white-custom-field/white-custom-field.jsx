import { TextField, InputAdornment, MenuItem, Select } from "@mui/material";
import React from "react";

const WhiteCustomField = ({
  id,
  type,
  label,
  fieldType,
  fieldPlaceholder,
  selectPlaceholder,
  endIcon,
  require,
  multiline = false,
  rows,
  selectVal,
  setSelectVal,
  data,
}) => {
  const selectStyles = {
    ".MuiSelect-select": {
      p: "11px 16px",
      color: "#A1A4B6",
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: `'Lato', sans-serif !important`,
    },
    "&.MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& fieldset": {
        border: "1px solid #E8E8ED",
      },
      "&:hover fieldset": {
        border: "3px solid #CFF2ED",
      },
      "&.Mui-focused fieldset": {
        border: "3px solid #CFF2ED",
      },
    },
    ".MuiSelect-icon": { top: "42%", right: "1rem" },
  };

  const menuProps = {
    PaperProps: {
      sx: {
        ".MuiMenuItem-root": {
          color: "#44496D",
          fontSize: "14px !important",
          fontWeight: 400,
          fontFamily: `'Red Hat Text', sans-serif !important`,
        },
        marginTop: "10px",
        borderRadius: "8px",
        ".MuiList-root": { p: "0" },
        ".Mui-selected": { bgcolor: "#E8E8ED !important" },
        ".Mui-selected:hover": { bgcolor: "#E8E8ED !important" },
      },
    },
  };

  const fieldStyles = {
    ".MuiOutlinedInput-notchedOutline": { border: "0px " },
    "& .MuiInputBase-input": {
      color: "#A1A4B6",
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: `'Lato', sans-serif`,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "3px solid #CFF2ED",
    },
    "& .MuiOutlinedInput-root": {
      border: "1px solid #E8E8ED",
      borderRadius: "8px",
      "&.Mui-focused fieldset": {
        border: "3px solid #CFF2ED",
      },
    },
  };

  const inputProps = {
    style: {
      padding: "10px 16px",
    },
  };

  return (
    <div>
      <label className="label-color secondary-title font-family-lato font-weight-500">
        {label} {require && <span className="error-color">*</span>}
      </label>
      {type === "select" ? (
        <Select
          className="font-family-lato tertiary-color secondary-title font-weight-400 margin-top-0"
          sx={selectStyles}
          value={selectVal}
          MenuProps={menuProps}
          displayEmpty
          renderValue={(value) =>
            value !== "" ? (
              value
            ) : (
              <span
                style={{ color: "#D8D9E0", fontWeight: 400 }}
                className="font-family-red"
              >
                {selectPlaceholder}
              </span>
            )
          }
          id={id}
          fullWidth
          IconComponent={(props) => (
            <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="9"
              viewBox="0 0 18 9"
              fill="none"
            >
              <path
                d="M9.00002 8.80062C8.30002 8.80062 7.60002 8.53063 7.07002 8.00063L0.55002 1.48062C0.26002 1.19062 0.26002 0.710625 0.55002 0.420625C0.84002 0.130625 1.32002 0.130625 1.61002 0.420625L8.13002 6.94062C8.61002 7.42062 9.39002 7.42062 9.87002 6.94062L16.39 0.420625C16.68 0.130625 17.16 0.130625 17.45 0.420625C17.74 0.710625 17.74 1.19062 17.45 1.48062L10.93 8.00063C10.4 8.53063 9.70002 8.80062 9.00002 8.80062Z"
                fill="#6B7280"
              />
            </svg>
          )}
          onChange={(event) => setSelectVal(event.target.value)}
        >
          {data?.map((item) => (
            <MenuItem
              sx={{ color: "#44496D", py: "10px" }}
              className="secondary-title font-weight-400 font-family-plus"
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <TextField
          fullWidth
          multiline={multiline}
          rows={rows}
          placeholder={fieldPlaceholder}
          sx={fieldStyles}
          inputProps={multiline ? false : inputProps}
          InputProps={{
            endAdornment: endIcon && (
              <InputAdornment position="end">{endIcon}</InputAdornment>
            ),
          }}
          className="margin-top-0"
          type={fieldType}
        />
      )}
    </div>
  );
};

export default WhiteCustomField;
