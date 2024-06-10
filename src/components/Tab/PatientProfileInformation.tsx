import { Box, Stack } from "@mui/material";
import { calculateAge } from "@/utlis/ageCalculation";
import { heading } from "@/app/(withDashboard)/dashboard/doctor/profile/utlis/heading";
import { InformationCreating } from "@/app/(withDashboard)/dashboard/doctor/profile/utlis/descripton";
import { convertBooleanToYesNo } from "@/utlis/convertYesNoValueToBooleanValue";
const PatientProfileInformation = ({ data }: any) => {
  return (
    <>
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
        {InformationCreating("Married", data?.patientHealthData?.maritalStatus)}
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
    </>
  );
};

export default PatientProfileInformation;
