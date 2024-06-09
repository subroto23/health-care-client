import { Gender } from "@/components/constants/globalConstants";
import HCForm from "@/components/forms/FormProvider";
import HCInputForm from "@/components/forms/HCInputForm";
import HCSelectForm from "@/components/forms/HCSelectForm";
import HCFullScreenDialog from "@/components/ui/HCFullScreenDialogBox";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

import {
  defaultValues,
  inputFieldsValidationSchema,
} from "./schemaAndDefaultValues";
import { jsonDataToFormDataConverer } from "@/lib/formData/converFormData";
import { useCreateDoctorMutation } from "@/redux/api/doctorsApi";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DiolagBoxForDoctor = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();
  const handleSubmit = async (values: FieldValues) => {
    const formDataValue = jsonDataToFormDataConverer(values);
    try {
      const res = await createDoctor(formDataValue).unwrap();
      if (res?.id) {
        toast.success(res?.message);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to create specility !!!");
    }
  };
  return (
    <HCFullScreenDialog
      open={open}
      setOpen={setOpen}
      title="Create A New Doctor"
    >
      <Container>
        <Box
          sx={{
            paddingY: { md: 5, xs: 2, sm: 3 },
          }}
        >
          <HCForm
            onSubmit={handleSubmit}
            resolver={zodResolver(inputFieldsValidationSchema)}
            defaultValues={defaultValues}
          >
            <Grid container spacing={5}>
              {/* Name Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.name"
                  label="Full Name"
                  type="text"
                  placeholder="Dr.Johan Doe"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Email Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.email"
                  label="Email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Password Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="************"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Contact Number Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.contactNumber"
                  label="Contact Number"
                  type="text"
                  placeholder="01761432255"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Gender Number Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCSelectForm
                  name="doctor.gender"
                  label="Gender"
                  type="text"
                  placeholder="01761432255"
                  fullWidth={true}
                  items={Gender}
                ></HCSelectForm>
              </Grid>
              {/* Address Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.address"
                  label="Address"
                  type="text"
                  placeholder="122,Faridpur,Dhaka"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Registrations Number Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.registrationsNumber"
                  label="Doctor Licience No"
                  type="text"
                  placeholder="doc124"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Experience Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.experience"
                  label="Experience"
                  type="text"
                  placeholder="8 Years"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Appointment Fees  Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.appointmentFee"
                  label="Appointment Fees"
                  type="number"
                  placeholder="800"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Qualification Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.qualification"
                  label="Qualification"
                  type="text"
                  placeholder="MD"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Qualification Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.currentWorkingPlace"
                  label="Current Working Place"
                  type="text"
                  placeholder="Rajshi Medical College"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Designation Field */}
              <Grid item xs={12} sm={6} md={4}>
                <HCInputForm
                  name="doctor.designation"
                  label="Designation"
                  type="text"
                  placeholder="Senior Doctor"
                  fullWidth={true}
                ></HCInputForm>
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

export default DiolagBoxForDoctor;
