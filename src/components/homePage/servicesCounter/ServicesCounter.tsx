import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { servicesData } from "./ServicesCounterData";

const ServicesCounter = () => {
  return (
    <Box my={10}>
      <Container>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          py={6}
          sx={{
            background: "linear-gradient(to right, #04A7C3 20%, #036270 80%)",
            borderRadius: "24px",
          }}
        >
          <Stack>
            <Grid container spacing={4} justifyContent="center">
              {servicesData.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  textAlign={"center"}
                  key={index}
                >
                  <Typography
                    variant="h3"
                    component={"h3"}
                    fontWeight={600}
                    color={"#ffff"}
                    sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
                  >
                    {item.count}
                  </Typography>
                  <Typography
                    component={"p"}
                    fontWeight={300}
                    mt={1}
                    color={"#ffff"}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesCounter;
