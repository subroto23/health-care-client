import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type ISpecialties = {
  id: string;
  title: string;
  icon: string;
};

const Specialties = async () => {
  const res = await fetch(
    "https://health-care-taupe-eight.vercel.app/api/v1/specialities"
  );
  const specialtiesData = await res.json();
  return (
    <>
      <Container>
        <Box my={10} sx={{ textAlign: "center" }}>
          <Stack my={8} textAlign={"start"}>
            <Typography variant="h3" component={"h4"} fontWeight={600}>
              Explore Treatments across specialties
            </Typography>
            <Typography component={"p"} fontWeight={300} mt={1} fontSize={24}>
              Find exprerinenced doctors across all specialties
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={2}>
            {specialtiesData?.data?.map((el: ISpecialties) => {
              return (
                <Box
                  key={el.id}
                  sx={{
                    flex: 1,
                    width: "150px",
                    backgroundColor: "rgba(245,245,245,1)",
                    border: "1px solid rgba(250,250,250,1)",
                    borderRadius: "10px",
                    padding: "40px 10px",
                    textAlign: "center",
                    "& img": {
                      width: "50px",
                      height: "50px",
                      margin: "0 auto",
                    },
                    "&:hover": {
                      border: "1px solid blue",
                      borderRadius: "10px",
                      padding: "40px 10px",
                      textAlign: "center",
                    },
                  }}
                >
                  <Image
                    src={el?.icon}
                    width={50}
                    height={50}
                    alt={el?.title}
                  />
                  <Typography
                    component={"p"}
                    fontWeight={600}
                    mt={1}
                    fontSize={"20px"}
                    marginTop={2}
                  >
                    {el?.title}
                  </Typography>
                </Box>
              );
            })}
          </Stack>
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
    </>
  );
};

export default Specialties;
