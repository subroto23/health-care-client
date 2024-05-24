import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";

const HeroBanner = () => {
  return (
    <Box sx={{ backgroundColor: "#F2FBFC" }} pb={5}>
      <Container sx={{ backgroundColor: "#F2FBFC" }}>
        <Stack py={2} direction={"row"} justifyContent={"space-between"}>
          {/* Left Side */}
          <Box pt={3}>
            <Stack direction={"column"} gap={2}>
              <Typography
                variant="h3"
                component={"h4"}
                fontWeight={800}
                color={"primary"}
              >
                Protect Your Life <br /> And Take Care Of <br /> Your Health
              </Typography>
              <Typography
                variant={"h6"}
                component={"p"}
                maxWidth={550}
                textAlign={"justify"}
                color={"#7A7289"}
              >
                Your health is your most valuable asset, and we are here to help
                you protect it. Our website is dedicated to providing you with
                the latest information, resources, and tools to maintain and
                improve your health and well-being.
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={2} mt={3}>
              <Button component={Link} href={"/make-appointment"}>
                <Typography
                  variant="h6"
                  component={"p"}
                  color="#ffff"
                  textTransform={"capitalize"}
                  fontWeight={400}
                >
                  Make Appointments
                </Typography>
              </Button>
              <Button variant="outlined">
                <Typography
                  variant="h6"
                  component={"p"}
                  textTransform={"capitalize"}
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
              height={150}
              width={150}
              alt="Dot Group"
              className="absolute top-5 right-2"
            />
            <Image
              src={assets.images.greenFrame}
              height={80}
              width={80}
              alt="Green Framer"
              className="absolute -bottom-4 -left-16 z-30"
            />
            <Image
              src={assets.images.redFrame}
              height={80}
              width={80}
              alt="Red Frmaer"
              className="absolute top-16 -left-4"
            />
            <Image
              src={assets.images.yellowFrame}
              width={80}
              height={80}
              alt="Yellow Frame"
              className="absolute bottom-12 right-0"
            />
            <Box
              p={2}
              className="absolute bottom-0 h-16 rounded-xl shadow-xl w-full z-20 bg-slate-100 text-center"
            >
              <Typography
                variant="h6"
                component={"h4"}
                fontWeight={200}
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
