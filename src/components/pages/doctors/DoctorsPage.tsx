"use client";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorsApi";
import GenerateRating from "@/utlis/rating";
import { useState } from "react";
import { useGetAllSpecilityQuery } from "@/redux/api/specilityApi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DoctorsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [specialties, setSpecialties] = useState("");
  const query: Record<string, any> = {};

  query["search"] = searchValue;
  query["specialties"] = specialties;
  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const { data: specilitiy, isLoading: loading } = useGetAllSpecilityQuery({});
  const router = useRouter();
  const handleNavigateClick = (id: string) => {
    router.push(`/doctors/${id}`);
  };
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={"center"}
        justifyContent={{ xs: "start", sm: "space-between" }}
      >
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Select specialties Doctors
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={specialties}
              onChange={(e) => setSpecialties(e.target.value)}
              label="Select specialties Doctors"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {isLoading
                ? ""
                : specilitiy?.map((el: any) => {
                    return (
                      <MenuItem key={el?.id} value={el?.title}>
                        {el?.title}
                      </MenuItem>
                    );
                  })}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <TextField
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Your Doctor"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Box>
      </Stack>

      {isLoading ? (
        <p>Loading...</p>
      ) : data?.doctors && data?.doctors?.length > 0 ? (
        data?.doctors?.map((el: any, idx: number) => (
          <Grid
            key={el?.id}
            container
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            sx={{
              backgroundColor: "#ffff",
              borderRadius: "10px",
              borderTop: idx === 0 ? "1px solid rgba(20,20,20,0.2)" : "none",
              borderBottom:
                idx === data.doctors.length - 1
                  ? "none"
                  : "1px solid rgba(20,20,20,0.2)",
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
              "&:hover": {
                backgroundColor: "#f5f5f5",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
            onClick={() => handleNavigateClick(el?.id)}
          >
            <Grid item xs={12} sm={6}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                gap={3}
                alignItems={"center"}
              >
                <Box>
                  <Image
                    src={el?.profilePhoto}
                    alt="Profile Photo"
                    width={200}
                    height={200}
                    className="rounded-full w-[150px] h-[150px]"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" component={"h6"}>
                    {el?.name}
                  </Typography>
                  <Typography variant="body2" color={"primary.main"}>
                    {el?.doctorSpecialties?.map(
                      (sp: any) => `${sp?.specialty?.title}, `
                    )}
                  </Typography>
                  <Box my={1}>
                    <Typography variant="body2" fontWeight={500}>
                      {el?.address}
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {el?.appointmentFee} /= Consultation fee
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
                <GenerateRating rating={el?.averageRating} />
                <Box sx={{ display: "flex", gap: 1, marginY: 1 }}>
                  <CalendarMonthIcon />
                  <Typography>Available Now</Typography>
                </Box>
                <Box>
                  <Button
                    component={Link}
                    href={`/doctors/${el?.id}`}
                    sx={{
                      backgroundColor: "#003846",
                      marginY: 1,
                      "&:hover": {
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    <Typography color="#ffff">Get Appointment</Typography>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ))
      ) : (
        <Typography
          textAlign={"center"}
          fontWeight={600}
          fontSize={"24px"}
          mt={6}
        >
          Not Found
        </Typography>
      )}
    </>
  );
};

export default DoctorsPage;
