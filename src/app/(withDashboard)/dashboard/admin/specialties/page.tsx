"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import HCModelBoxComponent from "./HCModelBoxComponent";
import SpecilityTable from "./SpecilitiesTable";

const Specialties = () => {
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
            Create Speciality
          </Button>
        </Box>
        <HCModelBoxComponent open={open} setOpen={setOpen} />
        <Box>
          <TextField
            label="Search"
            placeholder="Search here..."
            size="small"
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
          All Specilities
        </Typography>
        <SpecilityTable />
      </Box>
    </>
  );
};

export default Specialties;
