import { MenuItem, Select } from "@mui/material";
import React from "react";

export const DashboardSelect = ({
  data,
  setSelectVal,
  selectVal,
  selectSx,
  MenuSx,
  fullWidth,
  id,
  width,
  placeholder,
}) => {
  return (
    <>
      <Select
        className="font-family-lato tertiary-color secondary-title font-weight-400"
        sx={{
          width: width,
          // ".MuiSelect-select": { py: 0, minWidth: "69px" },
          ".MuiOutlinedInput-notchedOutline": { border: "0px " },
          ".MuiSelect-select": {
            p: "10px 16px",
            fontWeight: 400,
            color: "#737791",
            fontSize: "14px",
            backgroundColor: "#2C335A",
            fontFamily: `'Lato', sans-serif`,
            borderRadius: "8px",
          },
          ".MuiSelect-icon": { top: "42%", right: "3%" },
          ...selectSx,
        }}
        value={selectVal}
        MenuProps={{
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
        }}
        displayEmpty
        renderValue={(value) =>
          value !== "" ? (
            value
          ) : (
            <span
              style={{ color: "#4A5071", fontWeight: 400 }}
              className="font-family-red"
            >
              {placeholder}
            </span>
          )
        }
        id={id}
        fullWidth={fullWidth}
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
              fill="#fff"
            />
          </svg>
        )}
        onChange={(event) => setSelectVal(event.target.value)}
      >
        {data?.map((item) => (
          <MenuItem key={item} className="font-family-red" value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
