"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import { SxProps } from "@mui/material";
type TDatePickerType = {
  name: string;
  label?: string;
  fullWidth?: boolean;
  sx?: SxProps;
  size?: "small" | "medium";
  required?: boolean;
};

const HCTimePicker = ({
  name,
  label,
  fullWidth = true,
  sx,
  size = "medium",
  required = false,
}: TDatePickerType) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              timezone="system"
              disablePast
              {...field}
              name={name}
              label={label}
              value={value || Date.now()}
              onChange={(time) => onChange(time)}
              slotProps={{
                textField: {
                  required: required,
                  sx: { ...sx },
                  size: size,
                  variant: "outlined",
                  fullWidth: fullWidth,
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default HCTimePicker;
