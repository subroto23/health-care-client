import { FaBangladeshiTakaSign } from "react-icons/fa6";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import VideocamIcon from "@mui/icons-material/Videocam";
import Doctor4ColumnCard from "./Doctor4ColumnCard";

const DoctorInfoCard = ({ data }: any) => {
  return (
    <Box sx={{ background: "#ffff" }} padding={"20px"} my={5}>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ xs: 3, sm: 0, md: 0 }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Box sx={{ borderRadius: "30px" }} mb={{ xs: 1, sm: 2, md: 0 }}>
            <Image
              src={data?.profilePhoto}
              alt="Profile Photo"
              width={300}
              height={300}
              className="rounded-md sm:w-full sm:h-full md:w-[300px] "
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography variant="h6" component={"h6"}>
                {data?.name}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#34c300",
                  padding: "0px 8px",
                  borderRadius: "150px",
                  marginLeft: 1,
                }}
              >
                <Typography color={"#ffff"}>online</Typography>
              </Box>
            </Stack>
            <Typography variant="body2" fontWeight={500}>
              {data?.qualification}
            </Typography>
            <Box my={1}>
              <Typography variant="body2" color={"primary.main"}>
                {data?.designation}
              </Typography>

              <Typography variant="body2" fontWeight={500} my={"4px"}>
                <small>Working at: </small> {data?.currentWorkingPlace}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          justifyItems={"end"}
          textAlign={{ xs: "start", sm: "end", md: "center" }}
        >
          <Typography variant="h6" component={"h6"} fontWeight={600}>
            Consultation fee
          </Typography>
          <Box
            display={"flex"}
            gap={{ xs: 3, md: 1 }}
            alignItems={"center"}
            justifyContent={{ xs: "start", sm: "end", md: "center" }}
          >
            <Typography
              variant="h6"
              color={"primary.main"}
              display={"flex"}
              gap={1}
              alignItems={"center"}
            >
              <FaBangladeshiTakaSign fontSize={"16px"} /> {data?.appointmentFee}
            </Typography>
            <Typography variant="body2">(incL. VAT)</Typography>
          </Box>
          <Typography variant="body1">
            before taka <del>{data?.appointmentFee + 100}</del>
          </Typography>
          <Box>
            <Button
              sx={{
                backgroundColor: "#34c300",
                borderRadius: "150px",
                marginY: 1,
                "&:hover": {
                  // backgroundColor: "primary.main",
                  backgroundColor: "#34c300",
                },
              }}
            >
              <Typography color="#ffff">
                {/* <VideocamIcon /> See Doctor Now */}
                Verified Doctor
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Doctor4ColumnCard data={data} />
    </Box>
  );
};

export default DoctorInfoCard;
