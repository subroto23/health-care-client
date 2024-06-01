import { Box, Stack } from "@mui/material";
import { InformationCreating } from "./utlis/descripton";
import { heading } from "./utlis/heading";

const ProfileInformationDisplay = ({ data }: any) => {
  return (
    <>
      <Box>
        {heading("Basic Information")}
        <Stack
          flexWrap={"wrap"}
          direction={"row"}
          gap={2}
          justifyContent={"space-between"}
        >
          {InformationCreating("Name", data?.name)}
          {InformationCreating("Email", data?.email)}
          {InformationCreating("Contact Number", data?.contactNumber)}
          {InformationCreating("Gender", data?.gender)}
        </Stack>
      </Box>
      <Box my={6}>
        {heading("Professional Information")}
        <Stack
          flexWrap={"wrap"}
          direction={"row"}
          gap={2}
          justifyContent={"space-between"}
        >
          {InformationCreating("Appoinment Fee", data?.appointmentFee)}
          {InformationCreating("Qulification", data?.qualification)}
          {InformationCreating(
            "Current Working Place",
            data?.currentWorkingPlace
          )}
          {InformationCreating("Average rating", data?.averageRating)}
        </Stack>
      </Box>
    </>
  );
};

export default ProfileInformationDisplay;
