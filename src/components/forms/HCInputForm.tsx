import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TFormControlledValues = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
};

const HCInputForm = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth = false,
  sx,
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
          placeholder={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default HCInputForm;
