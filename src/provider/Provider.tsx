"use client";
import { store } from "@/redux/store";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
