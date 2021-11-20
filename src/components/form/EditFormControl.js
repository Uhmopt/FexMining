import {
  Autocomplete,
  FormControlLabel,

  Switch,
  TextField
} from "@mui/material";
import CustomDatePicker from "components/CustomDatePicker";
import React from "react";

export default function EditFormControl({
  data = {},
  type = "text",
  name = "",
  label = "",
  placeholder = "",
  onChange = () => { },
  size,
  fullWidth = false,

  optionLabel = (option) => (typeof option === "string" ? option : option?.id),
  options = [],

  onKeyDown = () => { },

  // error
  error = {},

  readOnly = false,

  isLabel = false,

  ...props
}) {
  type = String(type).toLowerCase();

  // const isError = isRequire && data?.value && !checkValid(type, data?.value);
  const isError = Boolean(error?.[name]);

  const basicProps = {
    name: name ?? "",
    label: isLabel ? "" : label ?? "",
    placeholder: placeholder,
  };

  const generalProps = {
    ...basicProps,
    size: size ?? "",
    fullWidth: Boolean(fullWidth),
    disabled: readOnly,
  };

  const propsValue = data?.[name ?? ""];

  const textProps = {
    value: data?.[name ?? ""] ?? "",
    onChange: onChange,
    onKeyDown: onKeyDown,
  };

  const errorProps = {
    error: isError,
    helperText: error?.[name],
  };

  const handleSelectChange = (e = {}, value = {}) => {
    onChange({ target: { name: name, value: value } });
  };

  const handleDataChange = (value = "") => {
    onChange({ target: { name: name, value: value } });
  };

  const handleCheck = (e) => {
    onChange({ target: { name: name, value: Boolean(e?.target?.checked) } });
  };

  return (
    <div>
      {type === "date" ? (
        <CustomDatePicker
          {...generalProps}
          {...errorProps}
          value={propsValue ?? ""}
          onChange={handleDataChange}
        />
      ) : type === "select" ? (
        <Autocomplete
          // disablePortal
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label={isLabel ? "" : label}
              {...errorProps}
            />
          )}
          {...generalProps}
          getOptionLabel={optionLabel}
          value={propsValue ?? null}
          onChange={handleSelectChange}
        />
      ) : type === "switch" ? (
        isLabel ? (
          <Switch
            {...basicProps}
            checked={Boolean(propsValue)}
            onChange={handleCheck}
            size={size}
            disabled={readOnly}
          />
        ) : (
          <FormControlLabel
            label={label}
            control={
              <Switch
                {...generalProps}
                checked={Boolean(propsValue)}
                onChange={handleCheck}
              />
            }
          />
        )
      ) : type === "address" ? (
        <TextField
          type="text"
          {...generalProps}
          {...textProps}
          {...errorProps}
        />
      ) : type === "phone" ? (
        <TextField
          type="text"
          {...generalProps}
          {...textProps}
          {...errorProps}
        />
      ) : type === "multiline" ? (
        <TextField
          type="text"
          {...generalProps}
          {...textProps}
          {...errorProps}
          multiline
          rows={5}
        />
      ) : (
        // number, text, password, email,
        <TextField
          type={type}
          {...generalProps}
          {...textProps}
          {...errorProps}
        />
      )}
    </div>
  );
}
