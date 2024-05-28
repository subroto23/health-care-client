import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TFormControlledValues = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  items: string[];
};

const HCSelectForm = ({
  name,
  label,
  placeholder,
  type = "text",
  size = "medium",
  fullWidth = false,
  sx,
  items,
}: TFormControlledValues) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          name={name}
          placeholder={placeholder ? placeholder : label}
          type={type}
          variant="outlined"
          select
          size={size}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          error={!!error?.message}
          helperText={error?.message}
        >
          {items?.map((val) => {
            return (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            );
          })}
        </TextField>
      )}
    />
  );
};

export default HCSelectForm;
