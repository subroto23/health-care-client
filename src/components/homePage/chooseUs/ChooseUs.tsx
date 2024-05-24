import { Box, Container, Stack, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <>
      <Container>
        <Stack textAlign={"center"} mb={5}>
          <Typography
            component={"p"}
            fontWeight={300}
            mt={2}
            fontSize={24}
            width={800}
            mx={"auto"}
            color={"primary.main"}
          >
            Why us
          </Typography>
          <Typography variant="h4" component={"h4"} fontWeight={600}>
            Why Choose Us
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={8} alignItems={"center"}>
          <Stack
            direction={"column"}
            gap={4}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* Column Start */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={3}
              sx={{
                backgroundColor: "rgba(10,10,10,0.1)",
                padding: "5px 20px",
                borderRadius: "0 0 60px 0px",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(80,80,80,0.1)",
                    padding: "10px 10px",
                  }}
                >
                  <Image
                    src={assets.svg.awardIcon}
                    width={50}
                    height={50}
                    alt="award"
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" component={"h6"} fontWeight={600}>
                  Award Winning Services
                </Typography>
                <Typography
                  component={"p"}
                  fontSize={16}
                  width={500}
                  mx={"auto"}
                  textAlign={"justify"}
                >
                  Comprehensive and Compassionate Care: We prioritize
                  personalized treatment plans and empathetic support to ensure
                  the best outcomes for our patients.
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={3}
              sx={{
                backgroundColor: "rgba(10,10,10,0.1)",
                padding: "5px 20px",
                borderRadius: "0 60px 0 0",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(80,80,80,0.1)",
                    padding: "10px 10px",
                  }}
                >
                  <Image
                    src={assets.svg.awardIcon}
                    width={50}
                    height={50}
                    alt="award"
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" component={"h6"} fontWeight={600}>
                  Award Winning Services
                </Typography>
                <Typography
                  component={"p"}
                  fontSize={16}
                  width={500}
                  mx={"auto"}
                  textAlign={"justify"}
                >
                  Comprehensive and Compassionate Care: We prioritize
                  personalized treatment plans and empathetic support to ensure
                  the best outcomes for our patients.
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={3}
              sx={{
                backgroundColor: "rgba(10,10,10,0.1)",
                padding: "5px 20px",
                borderRadius: "0 0 60px 0",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(80,80,80,0.1)",
                    padding: "10px 10px",
                  }}
                >
                  <Image
                    src={assets.svg.awardIcon}
                    width={50}
                    height={50}
                    alt="award"
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" component={"h6"} fontWeight={600}>
                  Award Winning Services
                </Typography>
                <Typography
                  component={"p"}
                  fontSize={16}
                  width={500}
                  mx={"auto"}
                  textAlign={"justify"}
                >
                  Comprehensive and Compassionate Care: We prioritize
                  personalized treatment plans and empathetic support to ensure
                  the best outcomes for our patients.
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={3}
              sx={{
                backgroundColor: "rgba(10,10,10,0.1)",
                padding: "5px 20px",
                borderRadius: "0 50px 0px 0px",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(80,80,80,0.1)",
                    padding: "10px 10px",
                  }}
                >
                  <Image
                    src={assets.svg.awardIcon}
                    width={50}
                    height={50}
                    alt="award"
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" component={"h6"} fontWeight={600}>
                  Award Winning Services
                </Typography>
                <Typography
                  component={"p"}
                  fontSize={16}
                  width={500}
                  mx={"auto"}
                  textAlign={"justify"}
                >
                  Comprehensive and Compassionate Care: We prioritize
                  personalized treatment plans and empathetic support to ensure
                  the best outcomes for our patients.
                </Typography>
              </Box>
            </Stack>
            {/* Right Side */}
          </Stack>
          {/* Right Side */}
          <Box>
            <Image
              src={assets.images.choiceUs}
              width={500}
              height={500}
              alt="Why Choose Us"
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default ChooseUs;
