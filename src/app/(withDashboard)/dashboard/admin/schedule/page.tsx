"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ScheduleModal from "./ScheduleModal";
import { useGetAllScheduleQuery } from "@/redux/api/scheduleApi";
import Loader from "@/components/ui/Loader";
import SchedulesTable from "./SchedulesTable";

const Schedule = () => {
  const [page, setPage] = useState(1);
  //Pagination
  const query: Record<string, any> = {};
  query["page"] = page;
  //
  const { data, isLoading } = useGetAllScheduleQuery({ ...query });
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  if (isLoading) {
    return <Loader />;
  }
  const schedules: any = data?.schedules;
  const meta = data?.meta;
  return (
    <Box>
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
            Create New Schedule
          </Button>
        </Box>
      </Stack>
      <ScheduleModal open={open} setOpen={setOpen} />
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
          All Schedules
        </Typography>
      </Box>
      <SchedulesTable schedules={schedules} meta={meta} />
    </Box>
  );
};

export default Schedule;
