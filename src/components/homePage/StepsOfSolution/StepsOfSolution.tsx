import assets from "@/assets";
import { Padding } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

const StepsOfSolution = () => {
  return (
    <Box mt={10}>
      <Container>
        <Stack textAlign={"start"} mb={5}>
          <Typography
            component={"p"}
            fontWeight={300}
            fontSize={24}
            width={800}
            color={"primary.main"}
            my={2}
          >
            How it Works
          </Typography>
          <Typography variant="h4" component={"h4"} fontWeight={600}>
            4 Easy Steps to Get Your Solution
          </Typography>
          <Typography
            component={"p"}
            fontWeight={300}
            mt={2}
            fontSize={24}
            width={800}
          >
            Access to expert physicians and surgeons,Advanced technologies and
            top quality surgery facilities right here.
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={3}
        >
          <Box width={"100%"} height={"100%"}>
            <Image
              src={assets.images.howItWork}
              alt="How it Works"
              width={800}
              height={800}
            />
          </Box>
          {/* Right side */}
          <Box>
            {/* Card Start */}
            <Grid container spacing={3}>
              <Grid item md={6}>
                <Card>
                  <CardContent sx={{ padding: "30px 40px" }}>
                    <Image
                      src={assets.svg.doctorSearch}
                      width={50}
                      height={50}
                      alt="Search Doctor"
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      fontWeight={600}
                      my={2}
                    >
                      Search Doctor
                    </Typography>
                    <Typography
                      component={"p"}
                      fontWeight={300}
                      mt={2}
                      fontSize={24}
                    >
                      Top quality surgery facilities right here.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6}>
                <Card>
                  <CardContent sx={{ padding: "30px 40px" }}>
                    <Image
                      src={assets.svg.profile}
                      width={50}
                      height={50}
                      alt="Search Doctor"
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      fontWeight={600}
                      my={2}
                    >
                      Chack Doctor Profile
                    </Typography>
                    <Typography
                      component={"p"}
                      fontWeight={300}
                      mt={2}
                      fontSize={24}
                    >
                      Top quality surgery facilities right here.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6}>
                <Card>
                  <CardContent sx={{ padding: "30px 40px" }}>
                    <Image
                      src={assets.svg.schedule}
                      width={50}
                      height={50}
                      alt="Search Doctor"
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      fontWeight={600}
                      my={2}
                    >
                      Schedule Appointment
                    </Typography>
                    <Typography
                      component={"p"}
                      fontWeight={300}
                      mt={2}
                      fontSize={24}
                    >
                      Top quality surgery facilities right here.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6}>
                <Card>
                  <CardContent sx={{ padding: "30px 40px" }}>
                    <Image
                      src={assets.svg.solution}
                      width={50}
                      height={50}
                      alt="Search Doctor"
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      fontWeight={600}
                      my={2}
                    >
                      Get Your Solution
                    </Typography>
                    <Typography
                      component={"p"}
                      fontWeight={300}
                      mt={2}
                      fontSize={24}
                    >
                      Top quality surgery facilities right here.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default StepsOfSolution;
