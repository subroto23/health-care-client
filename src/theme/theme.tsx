import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#04A7C3",
    },
    secondary: {
      main: "#006370",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
          color: "#ffff",
          textTransform: "capitalize",
          backgroundColor: "#04A7C3",
          "&:hover": {
            backgroundColor: "#003846",
          },
          "&.MuiButton-outlined": {
            "&:hover": {
              color: "#ffff",
              backgroundColor: "#04A7C3",
            },
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
  },
  typography: {
    body1: {
      color: "#001134CC",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
