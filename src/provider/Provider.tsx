"use client";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
