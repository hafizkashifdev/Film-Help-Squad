import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment, InputLabel } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";

export const CustomTextField = ({
  type,
  name,
  control = undefined,
  loading,
  placeholder,
  customOnChange = null,
  padding = 12,
  EndIcon,
  styleTextField,
  StartIcon,
  variant = "outlined",
  labelText,
  notRequired,
  fullWidth = false,
  width,
  styleLabel,
  ...props
}) => {
  const { control: initializeControl } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {labelText && (
        <InputLabel id={labelText} sx={{ ...styleLabel }}>
          {labelText}

          <Typography sx={{ pl: 0.5, color: "error.main" }} component={"span"}>
            {notRequired ? "" : "*"}
          </Typography>
        </InputLabel>
      )}
      <Controller
        control={control ?? initializeControl}
        name={name}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
        }) => (
          <TextField
            placeholder={placeholder}
            {...{
              onBlur,
              name,
            }}
            inputProps={{
              style: {
                padding: "10px 16px",
              },
            }}
            {...(!customOnChange ? (value = { value }) : null)}
            fullWidth={fullWidth}
            onChange={customOnChange ? customOnChange : onChange}
            inputRef={ref}
            variant={variant}
            autoComplete="off"
            error={Boolean(error)}
            helperText={error && error.message}
            type={showPassword ? "text" : type}
            sx={{
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "0px",
              },
              "&  .MuiFormHelperText-root.Mui-error": {
                backgroundColor: "#fff",
                margin: 0,
              },
              input: {
                color: "#737791",
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: `'Lato', sans-serif`,
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#2C335A",
                "&.Mui-focused fieldset": {
                  border: "0px",
                },
              },
              width: width,
              ...styleTextField,
            }}
            InputProps={{
              endAdornment:
                type === "password" ? (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: "primary.main" }}
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ) : (
                  EndIcon
                ),
              startAdornment: StartIcon,
              style: {
                borderRadius: "8px",
              },
            }}
            {...props}
          />
        )}
      />
    </>
  );
};
