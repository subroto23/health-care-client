"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SchdeduleModel from "./SchdeduleModel";
import DoctorScheduleTable from "./ScheduleTableDoctor";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
const Schedules = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  //Pagination
  const query: Record<string, any> = {};
  query["page"] = page;
  //
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Button
            sx={{ color: "#ffff", textTransform: "capitalize" }}
            onClick={handleClickOpen}
          >
            Create Schedule
          </Button>
        </Box>
        <Box>
          <TextField
            label="Search"
            placeholder="Search here..."
            size="small"
          ></TextField>
        </Box>
      </Stack>
      <SchdeduleModel open={open} setOpen={setOpen} />
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
          Your Schedules
        </Typography>
      </Box>
      {!isLoading && (
        <DoctorScheduleTable payload={data} setPage={setPage} page={page} />
      )}
    </>
  );
};

export default Schedules;
