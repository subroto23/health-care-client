import { Box, Container, Stack, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import { chooseUsData } from "./chooseUsData";

const ChooseUs = () => {
  return (
    <>
      <Container>
        <Stack textAlign={"center"} mb={5}>
          <Typography
            component={"p"}
            fontWeight={300}
            mt={2}
            fontSize={{ xs: 18, sm: 20, md: 24 }}
            width={{ xs: "100%", md: 800 }}
            mx={"auto"}
            color={"primary.main"}
          >
            Why us
          </Typography>
          <Typography variant="h4" component={"h4"} fontWeight={600}>
            Why Choose Us
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={4}
          alignItems={"center"}
        >
          <Stack
            direction={"column"}
            gap={4}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={{ xs: "100%", md: "50%" }}
          >
            {/* Column Start */}
            {chooseUsData?.map((item, index) => (
              <Stack
                key={index}
                direction={"row"}
                alignItems={"center"}
                gap={3}
                sx={{
                  backgroundColor: "rgba(10,10,10,0.1)",
                  padding: "5px 20px",
                  borderRadius: {
                    xs: index % 2 === 0 ? "0 60px 0 0" : "0 0 60px 0px",
                    md: index % 2 === 0 ? "0 0 60px 0px" : "0 60px 0 0",
                  },
                  width: "100%",
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={3}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(80,80,80,0.1)",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    <Image
                      src={assets.svg.awardIcon}
                      width={50}
                      height={50}
                      alt="award"
                    />
                  </Box>

                  <Box>
                    <Typography variant="h6" component={"h6"} fontWeight={600}>
                      {item.title}
                    </Typography>
                    <Typography
                      component={"p"}
                      fontSize={{ xs: 14, sm: 16 }}
                      width={{ xs: "100%", md: 400 }}
                      mx={"auto"}
                      textAlign={"justify"}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            ))}
            {/* Right Side */}
          </Stack>
          {/* Right Side */}
          <Box width={{ xs: "100%", md: "50%" }}>
            <Image
              src={assets.images.choiceUs}
              width={500}
              height={500}
              alt="Why Choose Us"
              layout="responsive"
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default ChooseUs;
