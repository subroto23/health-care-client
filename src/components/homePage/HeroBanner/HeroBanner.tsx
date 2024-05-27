import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";

const HeroBanner = () => {
  return (
    <Box sx={{ backgroundColor: "#F2FBFC" }} pb={5}>
      <Container sx={{ backgroundColor: "#F2FBFC" }}>
        <Stack
          py={2}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={2}
          gap={4}
        >
          {/* Left Side */}
          <Box pt={{ xs: 1, md: 3 }} textAlign={{ xs: "left", md: "left" }}>
            <Stack direction="column" gap={2}>
              <Typography
                variant={"h2"}
                component={"h1"}
                fontWeight={800}
                color="primary"
                sx={{
                  fontSize: { xs: "24px", md: "56px" },
                  textAlign: { xs: "center", sm: "left", md: "left" },
                  width: { xs: "100%", md: "680px" },
                }}
              >
                Protect Your Life And Take Care Of Your Health
              </Typography>
              <Typography
                variant="h6"
                component="p"
                maxWidth={550}
                textAlign="justify"
                color="#7A7289"
              >
                Your health is your most valuable asset, and we are here to help
                you protect it. Our website is dedicated to providing you with
                the latest information, resources, and tools to maintain and
                improve your health and well-being.
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={2}
              mt={3}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Button component={Link} href="/make-appointment">
                <Typography
                  variant="h6"
                  component="p"
                  color="#ffff"
                  textTransform="capitalize"
                  fontWeight={400}
                >
                  Make Appointments
                </Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  textTransform="capitalize"
                  fontWeight={400}
                >
                  Contact Us
                </Typography>
              </Button>
            </Stack>
          </Box>

          {/* Right Side */}
          <Stack position={"relative"} pr={4}>
            <Image
              src={assets.images.doctorBanner}
              width={350}
              height={350}
              alt="banner"
              className="w-[350px] h-[400px] z-20"
            />
            <Image
              src={assets.images.dotGroup}
              height={100}
              width={100}
              alt="Dot Group"
              className="absolute top-5 md:right-16 right-2"
            />
            <Image
              src={assets.images.greenFrame}
              height={50}
              width={50}
              alt="Green Framer"
              className="absolute md:bottom-16 bottom-16 md:-left-12 md:z-30"
            />
            <Image
              src={assets.images.redFrame}
              height={50}
              width={50}
              alt="Red Frmaer"
              className="absolute md:top-16 top-20 md:-left-4"
            />
            <Image
              src={assets.images.yellowFrame}
              width={50}
              height={50}
              alt="Yellow Frame"
              className="absolute md:bottom-12 bottom-28 md:right-0 right-4"
            />
            <Box
              p={2}
              className="absolute bottom-0 h-16 rounded-xl shadow-xl w-full z-20 bg-slate-100 text-center"
            >
              <Typography
                variant="h6"
                component={"h4"}
                fontWeight={600}
                color={"primary"}
              >
                Health Care
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroBanner;
