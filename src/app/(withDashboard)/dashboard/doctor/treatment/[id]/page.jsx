"use client";
import Loader from "@/components/ui/Loader";
import { useGetSinglePatientsQuery } from "@/redux/api/patientApi";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { heading } from "../../profile/utlis/heading";
import { InformationCreating } from "../../profile/utlis/descripton";
import GenerateRating from "@/utlis/rating";
import Image from "next/image";
import Link from "next/link";
import TabData from "@/components/Tab/TabData";

const PatientTreatment = ({ params }) => {
  const { data, isLoading } = useGetSinglePatientsQuery(params);
  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(data);
  return (
    <>
      <Grid
        container
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          padding: { xs: 0, sm: "20px 10px" },
          marginY: 1,
          justifyContent: {
            xs: "start",
            md: "space-between",
          },
          "&:first-of-type": {
            borderTop: "none",
          },
          "&:last-of-type": {
            borderBottom: "none",
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={3}
            alignItems={"center"}
          >
            <Box>
              <Image
                src={data?.profilePhoto || ""}
                alt="Profile Photo"
                width={200}
                height={200}
                className="rounded-full w-[150px] h-[150px]"
              />
            </Box>
            <Box>
              <Typography variant="h6" component={"h6"}>
                {data?.name}
              </Typography>
              <Typography variant="body2" color={"primary.main"}>
                {data?.email}
              </Typography>
              <Box my={1}>
                <Typography variant="body2" fontWeight={500}>
                  {data?.address}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {data?.contactNumber}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
        {/* Right Grid */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            direction: {
              xs: "column",
              sm: "row",
            },
            justifyContent: { xs: "start", sm: "end" },
            paddingRight: { xs: 0, sm: "6px", md: "20px" },
          }}
        >
          <Box>
            <Box>
              <Button
                component={Link}
                // href={`/doctors/${el?.id}`}
                href="/"
                sx={{
                  backgroundColor: "#003846",
                  marginY: 1,
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                }}
              >
                <Typography color="#ffff">Write Prescription</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <TabData data={data} />
    </>
  );
};

export default PatientTreatment;
