import assets from "@/assets";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const CoustomerReview = () => {
  return (
    <>
      <Box
        sx={{
          py: { xs: 5, sm: 8, md: 10 }, // Responsive padding
          backgroundColor: "#F2FBFC",
          margin: { xs: "40px 0", sm: "60px 0", md: "80px 0" }, // Responsive margin
        }}
      >
        <Container>
          <Box>
            <Typography variant="h4" component={"h4"} fontWeight={600}>
              What our customer say
            </Typography>
            <Typography
              component={"p"}
              fontWeight={300}
              mt={2}
              fontSize={{ xs: 18, sm: 20, md: 24 }} // Responsive font size
              maxWidth={800}
            >
              Access to expert physicians and surgeons,Advanced technologies and
              top quality surgery facilities right h
            </Typography>
          </Box>

          <Box mt={{ xs: 3, sm: 5, md: 8 }}>
            {" "}
            {/* Responsive margin top */}
            <Stack
              justifyContent={"flex-start"}
              direction={{ xs: "column", md: "row" }}
              sx={{ gap: { xs: 3, md: 0 } }}
            >
              <Box
                padding={{ xs: "20px", sm: "30px", md: "60px" }} // Responsive padding
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: { md: "30px 0 0 30px", xs: "30px" },
                  textAlign: "center",
                  flex: 1,
                }}
              >
                <Typography
                  component={"h5"}
                  variant="h3"
                  fontWeight={600}
                  fontSize={{ xs: 20, sm: 24, md: 28 }} // Responsive font size
                  color={"#ffff"}
                >
                  K. F. M. Johan Doe
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={300}
                  fontSize={{ xs: 18, sm: 20, md: 24 }} // Responsive font size
                  color={"#ffff"}
                >
                  Softwer Engineer
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={300}
                  mt={{ xs: 4, sm: 6 }} // Responsive margin top
                  fontSize={{ xs: 16, sm: 20, md: 24 }} // Responsive font size
                  color={"#ffff"}
                >
                  Access to expert physicians and surgeons,Advanced technologies
                  and top quality surgery facilities right h
                </Typography>

                <Image
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  width={150}
                  height={150}
                  alt="Beach"
                  className="rounded-full w-20 h-20 border-2 float-end mt-2 border-white"
                />
              </Box>

              <Image
                src={assets.images.familyOnBeach}
                width={500}
                height={500}
                alt="Beach"
              />
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CoustomerReview;
