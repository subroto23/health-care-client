import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type ISpecialties = {
  id: string;
  title: string;
  icon: string;
};

const Specialties = async () => {
  const res = await fetch(
    "https://health-care-taupe-eight.vercel.app/api/v1/specialities"
  );
  const specialtiesData = await res.json();
  return (
    <Box>
      <Container>
        <Box mt={{ xs: 10, md: 12 }} sx={{ textAlign: "center" }}>
          <Stack
            my={{ xs: 5, md: 8 }}
            textAlign={{ xs: "start", sm: "center", md: "start" }}
          >
            <Typography
              variant={"h2"}
              component={"h1"}
              fontWeight={600}
              sx={{
                fontSize: { xs: "24px", md: "56px" },
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              Explore Treatments across specialties
            </Typography>
            <Typography
              component={"p"}
              fontWeight={400}
              mt={1}
              fontSize={{ xs: 20, md: 24 }}
              sx={{ textAlign: { xs: "center", sm: "start" } }}
            >
              Find experienced doctors across all specialties
            </Typography>
          </Stack>
          <Grid
            container
            spacing={2}
            justifyContent={{
              xs: "center",
              sm: "flex-start",
              md: "space-between",
            }}
          >
            {specialtiesData?.data?.slice(0, 6).map((el: ISpecialties) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={2} key={el.id}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(245,245,245,1)",
                      border: "1px solid rgba(250,250,250,1)",
                      borderRadius: "10px",
                      padding: {
                        xs: "32px",
                        sm: "44px",
                        md: "20px 10px",
                      },
                      textAlign: "center",
                      "& img": {
                        width: "50px",
                        height: "50px",
                        margin: "0 auto",
                      },
                      "&:hover": {
                        border: "1px solid blue",
                      },
                    }}
                  >
                    <Image
                      src={el?.icon}
                      width={50}
                      height={50}
                      alt={el?.title}
                    />
                    <Typography
                      component={"p"}
                      fontWeight={600}
                      mt={1}
                      fontSize={"20px"}
                    >
                      {el?.title}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Button
            variant="outlined"
            sx={{ marginTop: { xs: "20px", md: "40px" } }}
          >
            <Typography
              variant="h6"
              component={"p"}
              textTransform={"capitalize"}
              fontWeight={400}
            >
              View all
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Specialties;
