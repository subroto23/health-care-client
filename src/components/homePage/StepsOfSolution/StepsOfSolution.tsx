import assets from "@/assets";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { stepsData } from "./StepesData";

const StepsOfSolution = () => {
  return (
    <Box mt={10}>
      <Container>
        <Stack textAlign={{ xs: "center", md: "start" }} mb={5}>
          <Typography
            component={"p"}
            fontWeight={300}
            fontSize={{ xs: 18, sm: 20, md: 24 }}
            sx={{
              maxWidth: { xs: "100%", md: "800px" },
              mx: { xs: "auto", md: 0 },
            }}
            color={"primary.main"}
            my={2}
          >
            How it Works
          </Typography>
          <Typography
            variant="h4"
            component={"h4"}
            fontWeight={600}
            fontSize={{ xs: 28, sm: 32, md: 36 }}
          >
            4 Easy Steps to Get Your Solution
          </Typography>
          <Typography
            component={"p"}
            fontWeight={300}
            mt={2}
            fontSize={{ xs: 18, sm: 20, md: 24 }}
            sx={{
              maxWidth: { xs: "100%", md: "800px" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            Access to expert physicians and surgeons, Advanced technologies and
            top quality surgery facilities right here.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={3}
        >
          <Box
            width={{ xs: "100%", md: "50%" }}
            height={"100%"}
            sx={{ order: { xs: 2, md: 1 } }}
          >
            <Image
              src={assets.images.howItWork}
              alt="How it Works"
              width={800}
              height={800}
              layout="responsive"
            />
          </Box>
          {/* Right side */}
          <Box
            width={{ xs: "100%", md: "50%" }}
            sx={{ order: { xs: 1, md: 2 } }}
          >
            {/* Card Start */}
            <Grid container spacing={3}>
              {stepsData?.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent
                      sx={{
                        padding: { md: "30px 10px", sm: "30px 40px" },
                        flexGrow: 1,
                      }}
                    >
                      <Image
                        src={item.icon}
                        width={50}
                        height={50}
                        alt={item.title}
                      />
                      <Typography
                        variant="h5"
                        component="div"
                        fontWeight={600}
                        my={2}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        component={"p"}
                        fontWeight={300}
                        mt={2}
                        fontSize={24}
                        sx={{ textAlign: { xs: "justify", md: "start" } }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default StepsOfSolution;
