import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import CardButton from "./CardButton";

const OurTopRatedDoctor = async () => {
  const res = await fetch(
    "https://health-care-taupe-eight.vercel.app/api/v1/doctors?limit=3"
  );
  const { data } = await res.json();
  return (
    <Box
      sx={{
        py: { xs: 1, md: 25 },
        backgroundColor: "#F2FBFC",
        clipPath: {
          xs: "none",
          md: "polygon(0 0, 100% 25%, 100% 100%, 0% 75%)",
        },
      }}
    >
      <Stack my={8} textAlign={"center"}>
        <Typography variant="h4" component={"h4"} fontWeight={600}>
          Our Top Rated Doctors
        </Typography>
        <Typography
          component={"p"}
          fontWeight={300}
          mt={1}
          fontSize={{ xs: 16, sm: 18, md: 20 }}
          width={{ xs: "100%", md: 500 }}
          mx={"auto"}
        >
          Book appointments and receive experienced doctor insight from various
          medical fields.
        </Typography>
      </Stack>
      <Container>
        <Grid container spacing={4}>
          {data?.map((el: any) => {
            return (
              <Grid key={el.id} item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    paddingBottom: "20px",
                    borderRadius: "10px",
                    border: "1px solid rgba(20,20,20,0.1)",
                    "&:hover": {
                      border: "1px solid blue",
                      borderRadius: "10px",
                    },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Image
                      src={el?.profilePhoto}
                      width={500}
                      height={100}
                      alt={el?.name}
                      layout="responsive"
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                      fontSize={{ xs: 20, sm: 22, md: 24 }}
                    >
                      {el?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={{ xs: 14, sm: 16, md: 18 }}
                      fontWeight={600}
                      color={"primary.main"}
                    >
                      {el?.qualification}, {el?.designation}
                    </Typography>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      mt={2}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontSize={{ xs: 12, sm: 14, md: 16 }}
                        fontWeight={600}
                      >
                        <LocationOnIcon /> {el?.address}
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize={{ xs: 14, sm: 16, md: 18 }}
                        fontWeight={600}
                        color={"primary.main"}
                        mr={2}
                      >
                        {el?.appointmentFee} tk
                      </Typography>
                    </Stack>
                  </CardContent>
                  {/* Card Button */}
                  <CardButton id={el.id} />
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box textAlign={"center"} pb={1}>
          <Button variant="outlined" sx={{ marginTop: "40px" }}>
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

export default OurTopRatedDoctor;
