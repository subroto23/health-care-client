import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Input } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type IProps = {
  name: string;
  label?: string;
  sx?: SxProps;
  fullWidth?: boolean;
  onFileUpload?: any;
};

export default function HCAutoFileUpload({
  name,
  label,
  sx,
  fullWidth = false,
  onFileUpload,
}: IProps) {
  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{ background: "#006370", color: "#ffff", ...sx }}
        fullWidth={fullWidth}
      >
        {label || "Upload file"}
        <Input
          type={name}
          onChange={(e) => {
            const file = (e?.target as HTMLInputElement)?.files?.[0];
            if (file) {
              return onFileUpload(file);
            }
          }}
          style={{ display: "none" }}
        />
      </Button>
    </>
  );
}
