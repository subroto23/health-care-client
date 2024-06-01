import { Box, Typography } from "@mui/material";

export const InformationCreating = (label: string, data: any) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(20,20,20,0.1)",
          padding: "20px",
          borderRadius: "10px",
          width: { xs: "100%", sm: "100%", md: "48%" },
        }}
      >
        <Typography variant={"h6"} component={"h2"}>
          {label}
        </Typography>
        <Typography variant="h6" component={"h2"} fontWeight={600}>
          {data}
        </Typography>
      </Box>
    </>
  );
};
