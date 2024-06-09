import {
  BloodGroup,
  BooleanValue,
  DietaryPreferences,
  Gender,
  MaritalStatus,
} from "@/components/constants/globalConstants";
import HCForm from "@/components/forms/FormProvider";
import HCDatePicker from "@/components/forms/HCDatePicker";
import HCInputForm from "@/components/forms/HCInputForm";
import HCSelectForm from "@/components/forms/HCSelectForm";
import HCFullScreenDialog from "@/components/ui/HCFullScreenDialogBox";
import Loader from "@/components/ui/Loader";
import {
  useGetSinglePatientsQuery,
  useUpdatePatientsrInfoMutation,
} from "@/redux/api/patientApi";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import {
  convertBooleanToYesNo,
  convertYesNoToBoolean,
} from "@/utlis/convertYesNoValueToBooleanValue";
import { Box, Button, Container, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FullPageProfileUpdate = ({ open, setOpen }: TProps) => {
  const {
    data: userInfo,
    isLoading: loader,
    refetch,
  } = useGetSingleUserQuery({});

  const { data, isLoading } = useGetSinglePatientsQuery({
    id: userInfo?.id,
  });

  const [updateInfo, { isLoading: updating }] =
    useUpdatePatientsrInfoMutation();
  //
  if (loader || isLoading) {
    <Loader />;
  }
  //Default Values
  const defaultValues = {
    name: data?.name,
    patientHealthData: {
      height: data?.patientHealthData?.height,
      gender: data?.patientHealthData?.gender,
      weight: data?.patientHealthData?.weight,
      maritalStatus: data?.patientHealthData?.maritalStatus,
      bloodGroup: data?.patientHealthData?.bloodGroup,
      hasAllergies: convertBooleanToYesNo(
        data?.patientHealthData?.hasAllergies
      ),
      hasDiabetes: convertBooleanToYesNo(data?.patientHealthData?.hasDiabetes),
      dietaryPreferences: convertBooleanToYesNo(
        data?.patientHealthData?.dietaryPreferences
      ),
      smokingStatus: convertBooleanToYesNo(
        data?.patientHealthData?.smokingStatus
      ),
      pregnancyStatus: convertBooleanToYesNo(
        data?.patientHealthData?.pregnancyStatus
      ),
      hasPastSurgeries: convertBooleanToYesNo(
        data?.patientHealthData?.hasPastSurgeries
      ),
      recentAnxiety: convertBooleanToYesNo(
        data?.patientHealthData?.recentAnxiety
      ),
      recentDepression: convertBooleanToYesNo(
        data?.patientHealthData?.recentDepression
      ),
      mentalHealthHistory: data?.patientHealthData?.mentalHealthHistory,
      immunizationStatus: data?.patientHealthData?.immunizationStatus,
    },
  };

  function convertToISO(dateString: string) {
    const date = new Date(dateString);
    const isoDateString = date.toISOString();
    return isoDateString;
  }

  const handleSubmit = async (values: FieldValues) => {
    // Date formating
    if (values.patientHealthData.dateOfBirth) {
      values.patientHealthData.dateOfBirth = convertToISO(
        values?.patientHealthData?.dateOfBirth.$d
      );
    }
    const updatedValues = convertYesNoToBoolean(values);
    try {
      values.patientId = userInfo.id;
      const res = await updateInfo(updatedValues).unwrap();
      if (res) {
        toast.success("Profile Updated Successfully");
        refetch();
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to Update !!!");
    }
  };

  return (
    <HCFullScreenDialog
      open={open}
      setOpen={setOpen}
      title="Update Your Information"
    >
      <Container>
        <Box
          sx={{
            paddingY: { md: 5, xs: 2, sm: 3 },
          }}
        >
          <HCForm onSubmit={handleSubmit} defaultValues={defaultValues}>
            <Grid container spacing={5}>
              {/* Name Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="name"
                  label="Full Name"
                  type="text"
                  placeholder="Dr.Johan Doe"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Gender Number Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.gender"
                  label="Gender"
                  type="text"
                  fullWidth={true}
                  items={Gender}
                ></HCSelectForm>
              </Grid>
              {/* Date Of Birth */}
              <Grid item xs={12} sm={6} md={4}>
                <HCDatePicker
                  name="patientHealthData.dateOfBirth"
                  label="Date Of Birth"
                  fullWidth={true}
                  disablePast={false}
                ></HCDatePicker>
              </Grid>
              {/* Height  Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="patientHealthData.height"
                  label="Height Inch"
                  type="text"
                  placeholder="72"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* weight  Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="patientHealthData.weight"
                  label="Weight Kg"
                  type="text"
                  placeholder="50"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Marital Status */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.maritalStatus"
                  label="Are you Married"
                  type="text"
                  fullWidth={true}
                  items={MaritalStatus}
                ></HCSelectForm>
              </Grid>
              {/* Blood Group */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.bloodGroup"
                  label="Blood Group"
                  type="text"
                  fullWidth={true}
                  items={BloodGroup}
                ></HCSelectForm>
              </Grid>
              {/* hasAllergies Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.hasAllergies"
                  label="Has Alleragies"
                  type="text"
                  fullWidth={true}
                  items={BooleanValue}
                ></HCSelectForm>
              </Grid>
              {/* hasDiabetes Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.hasDiabetes"
                  label="Has Diabetes"
                  type="text"
                  fullWidth={true}
                  items={BooleanValue}
                ></HCSelectForm>
              </Grid>
              {/* SmokingStatus Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.smokingStatus"
                  label="Smoking Status"
                  type="text"
                  fullWidth={true}
                  items={BooleanValue}
                ></HCSelectForm>
              </Grid>
              {/* DietaryPreferences Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.dietaryPreferences"
                  label="Dietary Preferences"
                  type="text"
                  fullWidth={true}
                  items={DietaryPreferences}
                ></HCSelectForm>
              </Grid>
              {/* pregnancyStatus Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.pregnancyStatus"
                  label="Pregnancy Status"
                  type="text"
                  fullWidth={true}
                  items={BooleanValue}
                ></HCSelectForm>
              </Grid>
              {/* hasPastSurgeries Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.hasPastSurgeries"
                  label="Has Past Surgeries"
                  type="text"
                  fullWidth={true}
                  items={BooleanValue}
                ></HCSelectForm>
              </Grid>
              {/* recentAnxiety Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.recentAnxiety"
                  label="Recent Anxiety"
                  type="text"
                  fullWidth={true}
                  items={BooleanValue}
                ></HCSelectForm>
              </Grid>
              {/* recentDepression Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="patientHealthData.recentDepression"
                  label="Recent Depression"
                  type="text"
                  fullWidth={true}
                  items={BooleanValue}
                ></HCSelectForm>
              </Grid>
              {/* MentalHealthHistory*/}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="patientHealthData.mentalHealthHistory"
                  label="Mental Health History"
                  type="text"
                  placeholder="N/A or history"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* immunizationStatus*/}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="patientHealthData.immunizationStatus"
                  label="Immunization Status"
                  type="text"
                  placeholder="Up to date"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* medicalReport*/}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="medicalReport.reportName"
                  label="Report Name"
                  type="text"
                  placeholder="CBC test"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* medicalReport*/}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="medicalReport.reportLink"
                  label="Report Link"
                  type="text"
                  placeholder="http://www.test.image.jpg"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              <Grid item md={12} textAlign={"end"}>
                <Button type="submit" sx={{ color: "#ffff" }}>
                  {updating ? "Updating..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </HCForm>
        </Box>
      </Container>
    </HCFullScreenDialog>
  );
};

export default FullPageProfileUpdate;
