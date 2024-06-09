import HCForm from "@/components/forms/FormProvider";
import HCFullScreenDialog from "@/components/ui/HCFullScreenDialogBox";
import { Box, Button, Container, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import HCInputForm from "@/components/forms/HCInputForm";
import HCSelectForm from "@/components/forms/HCSelectForm";
import { Gender } from "@/components/constants/globalConstants";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import Loader from "@/components/ui/Loader";
import MultipuleSelectorSpecilitiesForDoctor from "./MultipuleSelectorChip";
import { useEffect, useState } from "react";
import { useGetAllSpecilityQuery } from "@/redux/api/specilityApi";
import {
  useGetSingleDoctorsQuery,
  useUpdateDoctorInfoMutation,
} from "@/redux/api/doctorsApi";

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
  const { data, isLoading } = useGetSingleDoctorsQuery({
    id: userInfo?.id,
  });

  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  const [updateInfo, { isLoading: updating }] = useUpdateDoctorInfoMutation();

  const { data: specialities, isLoading: loderSpecility } =
    useGetAllSpecilityQuery({});
  if (isLoading || updating || loderSpecility) {
    <Loader />;
  }
  //Specilities
  const specilitiesAfterFormating = selectedValue?.map((id: string) => {
    return {
      specialistId: id,
      isDeleted: false,
    };
  });

  //
  const handleSubmit = async (values: FieldValues) => {
    try {
      values["specialities"] = specilitiesAfterFormating;
      values["doctorId"] = data?.id;
      const res = await updateInfo(values).unwrap();
      if (res) {
        toast.success(res?.message);
        refetch();
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to Update !!!");
    }
  };
  const defaultValues = {
    name: data?.name,
    contactNumber: data?.contactNumber,
    address: data?.address,
    registrationsNumber: data?.registrationsNumber,
    designation: data?.designation,
    currentWorkingPlace: data?.currentWorkingPlace,
    qualification: data?.qualification,
    appointmentFee: data?.appointmentFee,
    experience: data?.experience,
    gender: data?.gender,
  };
  //Set Default Specilities
  const doctorSpecility = data?.doctorSpecialties;
  useEffect(() => {
    const specilityIds = doctorSpecility?.map((el: any) => el.specialitiesId);
    setSelectedValue(specilityIds);
  }, [doctorSpecility]);
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
              {/* Email Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="contactNumber"
                  label="Contact Number"
                  type="phone"
                  placeholder="070012345"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Password Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="address"
                  label="Address"
                  type="address"
                  placeholder="122,Dhaka"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Contact Number Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="currentWorkingPlace"
                  label="Current Working Place"
                  type="text"
                  placeholder="Dhaka Medical college"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Gender Number Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="gender"
                  label="Gender"
                  type="text"
                  fullWidth={true}
                  items={Gender}
                ></HCSelectForm>
              </Grid>
              {/* Registrations Number Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="registrationsNumber"
                  label="Doctor Licience No"
                  type="text"
                  placeholder="doc124"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Experience Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="experience"
                  label="Experience"
                  type="text"
                  placeholder="8 Years"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Appointment Fees  Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="appointmentFee"
                  label="Appointment Fees"
                  type="number"
                  placeholder="800"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Qualification Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="qualification"
                  label="Qualification"
                  type="text"
                  placeholder="MD"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Designation Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="designation"
                  label="Designation"
                  type="text"
                  placeholder="Senior Doctor"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Designation Field */}
              <Grid item xs={12} sm={6} md={4}>
                <MultipuleSelectorSpecilitiesForDoctor
                  specialities={specialities}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
              </Grid>
              <Grid item md={12} textAlign={"end"}>
                <Button type="submit" sx={{ color: "#ffff" }}>
                  Submit
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
