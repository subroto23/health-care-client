import { Typography } from "@mui/material";
export const heading = (heading: string) => {
  return (
    <>
      <Typography
        variant="h5"
        component={"h1"}
        color={"primary.main"}
        fontWeight={600}
        mb={2}
        sx={{
          "&.p": {
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
            },
          },
        }}
      >
        {heading}
      </Typography>
    </>
  );
};
