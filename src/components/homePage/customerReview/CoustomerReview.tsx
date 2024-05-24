import assets from "@/assets";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const CoustomerReview = () => {
  return (
    <>
      <Box
        sx={{
          py: 10,
          backgroundColor: "#F2FBFC",
          margin: "80px 0",
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
              fontSize={24}
              width={800}
            >
              Access to expert physicians and surgeons,Advanced technologies and
              top quality surgery facilities right h
            </Typography>
          </Box>

          <Box mt={5}>
            <Stack justifyContent={"flex-start"} direction={"row"}>
              <Box
                padding={"60px"}
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "30px 0 0 30px",
                  textAlign: "center",
                }}
              >
                <Typography
                  component={"h5"}
                  variant="h3"
                  fontWeight={600}
                  fontSize={24}
                  color={"#ffff"}
                >
                  K. F. M. Johan Doe
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={300}
                  fontSize={24}
                  color={"#ffff"}
                >
                  Softwer Engineer
                </Typography>
                <Typography
                  component={"p"}
                  fontWeight={300}
                  mt={6}
                  fontSize={24}
                  color={"#ffff"}
                >
                  Access to expert physicians and surgeons,Advanced technologies
                  and top quality surgery facilities right h
                </Typography>

                <Image
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  width={150}
                  height={150}
                  alt="Beatch"
                  className="rounded-full w-20 h-20 border-2 float-end mt-2 border-white"
                />
              </Box>
              <Image
                src={assets.images.familyOnBeach}
                width={500}
                height={500}
                alt="Beatch"
              />
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CoustomerReview;
