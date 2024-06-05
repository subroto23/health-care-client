import { Box, Stack } from "@mui/material";
import { heading } from "../../doctor/profile/utlis/heading";
import { InformationCreating } from "../../doctor/profile/utlis/descripton";
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
          {InformationCreating("Gender", data?.patientHealthData?.gender)}
        </Stack>
      </Box>
    </>
  );
};

export default ProfileInformationDisplay;
