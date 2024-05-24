import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const ServicesCounter = () => {
  return (
    <Box my={10}>
      <Container>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          py={6}
          className=" bg-gradient-to-r to-[#04A7C3] to-[90%]  from-[#04A7C3] rounded-3xl"
        >
          <Stack>
            <Grid container direction="row" justifyContent="space-around">
              <Grid item md={2} textAlign={"center"}>
                <Typography
                  variant="h3"
                  component={"h3"}
                  fontWeight={600}
                  color={"#ffff"}
                >
                  180 +
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={300}
                  mt={1}
                  fontSize={24}
                  color={"#ffff"}
                >
                  Expert Doctors
                </Typography>
              </Grid>
              <Grid item md={2} textAlign={"center"}>
                <Typography
                  variant="h3"
                  component={"h3"}
                  fontWeight={600}
                  color={"#ffff"}
                >
                  26 +
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={300}
                  mt={1}
                  fontSize={24}
                  color={"#ffff"}
                >
                  Expert Services
                </Typography>
              </Grid>
              <Grid item md={2} textAlign={"center"}>
                <Typography
                  variant="h3"
                  component={"h3"}
                  fontWeight={600}
                  color={"#ffff"}
                >
                  10K +
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={300}
                  mt={1}
                  fontSize={24}
                  color={"#ffff"}
                >
                  Happy Patients
                </Typography>
              </Grid>
              <Grid item md={2} textAlign={"center"}>
                <Typography
                  variant="h3"
                  component={"h3"}
                  fontWeight={600}
                  color={"#ffff"}
                >
                  10 +
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={300}
                  mt={1}
                  fontSize={24}
                  color={"#ffff"}
                >
                  Best Award
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesCounter;
