"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import DiolagBoxForDoctor from "./DiolagBoxForDoctor";
import DoctorsTable from "./doctorsTable";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorsApi";
import { useDebounce } from "@/redux/hooks";
const Doctors = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const query = {} as Record<string, any | null>;
  const debunced = useDebounce({ searchTerm: searchTerm, delay: 600 });
  if (!!debunced) {
    query["search"] = searchTerm;
  }
  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const doctors: any = data?.doctors;
  const meta = data?.meta;
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Button
            sx={{
              color: "#ffff",
              textTransform: "capitalize",
            }}
            onClick={handleClickOpen}
          >
            Create New Doctor
          </Button>
        </Box>
        <DiolagBoxForDoctor open={open} setOpen={setOpen} />
        <Box sx={{ marginY: { xs: 2, md: 0 } }}>
          <TextField
            label="Search"
            placeholder="Search here..."
            size="small"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></TextField>
        </Box>
      </Stack>
      <Box>
        <Typography
          variant="h4"
          component={"h1"}
          textAlign="center"
          fontWeight={900}
          my={8}
          textTransform={"uppercase"}
          color="primary.main"
        >
          All Doctors
        </Typography>
        <DoctorsTable doctors={doctors} meta={meta} />
      </Box>
    </>
  );
};

export default Doctors;
