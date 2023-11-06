import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DateIcon from "@mui/icons-material/Event";
export const DateRangePicker = ({label, require}) => {
  return (
    <div>
    <label className="label-color secondary-title font-family-lato font-weight-500">
        {label} {require && <span className="error-color">*</span>}
      </label>
      <div className="margin-top-0">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
                width: '100%',
              ".MuiOutlinedInput-notchedOutline": { border: "0px " },
              "& .MuiInputBase-input": {
                color: "#A1A4B6",
                fontSize: "14px",
                fontWeight: 400,
                padding: "10px 16px",
                fontFamily: `'Lato', sans-serif`,
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  border: "3px solid #CFF2ED",
                },
              "& .MuiOutlinedInput-root": {
                border: "1px solid #E8E8ED",
                borderRadius: "8px",
                "&.Mui-focused fieldset": {
                  border: "3px solid #CFF2ED",
                },
              },
            }}
            slots={{
              openPickerIcon: DateIcon,
            }}
          />
        </LocalizationProvider>
        </div>
    </div>
  );
};
