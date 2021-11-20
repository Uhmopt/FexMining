import { Close, Today } from "@mui/icons-material";
import { IconButton, InputAdornment, Popover, TextField } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

const checkValue = (str = "") => {
  if (typeof str === "string") {
    str = str?.slice(0, 10);
    if (!isNaN(Number(str)) && str !== "")
      return moment(Number(str)).format("DD/MM/YYYY");
    if (moment(str.substr(0, 10), "DD/MM/YYYY", true).isValid()) {
      return moment(str.substr(0, 10), "DD/MM/YYYY", true).format("DD/MM/YYYY");
    }
    if (moment(str.substr(0, 10), "YYYY-MM-DD", true).isValid()) {
      return moment(str.substr(0, 10), "YYYY-MM-DD", true).format("DD/MM/YYYY");
    }
    return str;
  }
  return "";
};
const checkCalendarValue = (str = "") => {
  if (typeof str === "string") {
    if (!isNaN(Number(str)) && str !== "") return moment(Number(str)).toDate();
    if (moment(str.substr(0, 10), "DD/MM/YYYY", true).isValid()) {
      return moment(str.substr(0, 10), "DD/MM/YYYY", true).toDate();
    }
    if (moment(str.substr(0, 10), "YYYY-MM-DD", true).isValid()) {
      return moment(str.substr(0, 10), "YYYY-MM-DD", true).toDate();
    }
  }
  return new Date();
};

export default function CustomDatePicker({
  value = "",
  onChange = () => {},
  variant = "outlined",
  calendarStyle = {},
  readOnly = false,
  ...props
}) {
  const [calendar, setCalendar] = useState();
  const handleChange = (v = "") => {
    onChange(v);
  };

  const handleCalendar = (v) => {
    setCalendar(v);
    onChange(moment(v).format("YYYY-MM-DD"));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (readOnly) {
      return;
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReset = () => {
    if (readOnly) {
      return;
    }
    setCalendar("");
    onChange("");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    setCalendar(checkCalendarValue(value));
  }, [value]);

  return (
    <div>
      <TextField
        {...props}
        variant={variant ?? "outlined"}
        value={checkValue(value)}
        onChange={(e) => handleChange(e?.target?.value ?? "")}
        onClick={handleClick}
        InputProps={{
          autoComplete: "off",
          endAdornment: (
            <InputAdornment position="end">
              {Boolean(checkValue(value)) ? (
                <IconButton onClick={handleReset} onMouseDown={handleReset}>
                  <Close />
                </IconButton>
              ) : (
                <IconButton onClick={handleClick} onMouseDown={handleClick}>
                  <Today />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      ></TextField>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Calendar
          value={calendar}
          onChange={handleCalendar}
          onClickDay={handleClose}
        />
      </Popover>
    </div>
  );
}
