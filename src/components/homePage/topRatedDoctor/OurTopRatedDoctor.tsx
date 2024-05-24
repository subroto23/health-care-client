import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";

const OurTopRatedDoctor = async () => {
  const res = await fetch(
    "https://health-care-taupe-eight.vercel.app/api/v1/doctors?limit=3"
  );
  const { data } = await res.json();
  return (
    <Box
      sx={{
        py: 25,
        // backgroundColor: "rgba(20,20,20,0.1)",
        backgroundColor: "#F2FBFC",
        clipPath: "polygon(0 0,100% 25%,100% 100%,0% 75%)",
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
          fontSize={20}
          width={500}
          mx={"auto"}
        >
          Book appointments and received experienced doctor insight from various
          medical fields.
        </Typography>
      </Stack>
      <Container>
        <Grid container spacing={4}>
          {data?.map((el: any) => {
            return (
              <Grid key={el.id} item md={4}>
                <Card
                  sx={{
                    paddingBottom: "20px",
                    borderRadius: "10px",
                    border: "1px solid rgba(20,20,20,0.1)",
                    "&:hover": {
                      border: "1px solid blue",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <Box>
                    <Image
                      src={el?.profilePhoto}
                      width={500}
                      height={100}
                      alt={el?.name}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                    >
                      {el?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={"20px"}
                      fontWeight={"600px"}
                      color={"primary.main"}
                    >
                      {el?.qualification}, {el?.designation}
                    </Typography>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mt={1}
                        fontSize={"20px"}
                        fontWeight={"600px"}
                      >
                        <LocationOnIcon /> {el?.address}
                      </Typography>
                      <Typography
                        variant="body2"
                        mt={1}
                        fontSize={"22px"}
                        fontWeight={600}
                        color={"primary.main"}
                        mr={2}
                      >
                        {el?.appointmentFee} tk
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Button variant="contained" size="small">
                      <Typography
                        textTransform={"capitalize"}
                        fontWeight={600}
                        color={"#ffff"}
                      >
                        Book Now
                      </Typography>
                    </Button>
                    <Button variant="outlined" size="small">
                      View Profile
                    </Button>
                  </CardActions>
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
