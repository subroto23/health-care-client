import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

type IProps = {
  name: string;
  label?: string;
  sx?: SxProps;
  fullWidth?: boolean;
};

export default function HCFileUpload({
  name,
  label,
  sx,
  fullWidth = false,
}: IProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ background: "#006370", ...sx }}
            fullWidth={fullWidth}
          >
            {label || "Upload file"}
            <Input
              {...field}
              type={name}
              value={value?.fileName}
              onChange={(e) =>
                onChange((e?.target as HTMLInputElement)?.files?.[0])
              }
              style={{ display: "none" }}
            />
          </Button>
        );
      }}
    />
  );
}
