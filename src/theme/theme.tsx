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
          textTransform: "capitalize",
          "&.MuiButto-container": {
            backgroundColor: "#04A7C3",
          },
          "&:hover": {
            backgroundColor: "#003846",
            color: "#ffff",
          },
          // "&.MuiButton-outlined": {
          //   color: "#04A7C3",
          //   "&:hover": {
          //     color: "#ffff",
          //   },
          // },
          outlined: {
            "&.MuiButton-outlined": {
              color: "#04A7C3", // Default text color
              "&:hover": {
                color: "#ffff", // Text color on hover
              },
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
