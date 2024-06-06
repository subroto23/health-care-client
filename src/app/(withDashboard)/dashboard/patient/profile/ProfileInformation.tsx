import { Box, Stack } from "@mui/material";
import { heading } from "../../doctor/profile/utlis/heading";
import { InformationCreating } from "../../doctor/profile/utlis/descripton";
import { convertBooleanToYesNo } from "@/utlis/convertYesNoValueToBooleanValue";
import { calculateAge } from "@/utlis/ageCalculation";
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
        <Box>
          <Box my={6} sx={{ textAlign: { xs: "center", md: "start" } }}>
            {heading("Your Health Information")}
          </Box>
          <Stack
            flexWrap={"wrap"}
            direction={"row"}
            gap={2}
            justifyContent={"space-between"}
          >
            {InformationCreating("Height", data?.patientHealthData?.height)}
            {InformationCreating("Weight", data?.patientHealthData?.weight)}
            {InformationCreating(
              "Age",
              `${calculateAge(data?.patientHealthData?.dateOfBirth)} years`
            )}
            {InformationCreating(
              "Blood Group",
              data?.patientHealthData?.bloodGroup
            )}
            {InformationCreating(
              "Married",
              data?.patientHealthData?.maritalStatus
            )}
            {InformationCreating(
              "Pregnancy Status",
              convertBooleanToYesNo(data?.patientHealthData?.pregnancyStatus)
            )}
            {InformationCreating(
              "Diabetes",
              convertBooleanToYesNo(data?.patientHealthData?.hasDiabetes)
            )}
            {InformationCreating(
              "Smoking",
              convertBooleanToYesNo(data?.patientHealthData?.smokingStatus)
            )}
            {InformationCreating(
              "Allergies",
              convertBooleanToYesNo(data?.patientHealthData?.hasAllergies)
            )}
            {InformationCreating(
              "Past Surgeries",
              convertBooleanToYesNo(data?.patientHealthData?.hasPastSurgeries)
            )}
            {InformationCreating(
              "Recent Anxiety",
              convertBooleanToYesNo(data?.patientHealthData?.recentAnxiety)
            )}
            {InformationCreating(
              "Recent Depression",
              convertBooleanToYesNo(data?.patientHealthData?.recentDepression)
            )}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProfileInformationDisplay;
