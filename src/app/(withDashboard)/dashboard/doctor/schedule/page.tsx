"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SchdeduleModel from "./SchdeduleModel";
const Schedules = () => {
  const [open, setOpen] = useState(false);
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
    </>
  );
};

export default Schedules;
