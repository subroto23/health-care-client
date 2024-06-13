import { Container, Grid, Box, Button, Typography } from "@mui/material";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import HCForm from "@/components/forms/FormProvider";
import HCDatePicker from "@/components/forms/HCDatePicker";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useCreatePrescriptionMutation } from "@/redux/api/prescription";

const Prescription = ({ data, params }: any) => {
  const [createPrescription, { isLoading: creating }] =
    useCreatePrescriptionMutation();
  const [instructions, setInstructions] = useState("");
  const handleSubmit = async (values: FieldValues) => {
    const requestValue = {
      appointmentId: params.appointmentId,
      instructions,
      followUpDate: values.followUpDate?.$d,
    };
    try {
      const res = await createPrescription(requestValue).unwrap();
      if (res?.id) {
        toast.success("Prescription Created Successfully");
        setInstructions("");
      } else if (res?.success === false) {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error("Failed to create !!!");
    }
  };
  return (
    <Container>
      <Box
        sx={{
          paddingY: { md: 5, xs: 2, sm: 3 },
        }}
      >
        <HCForm onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant="h6" mb={2}>
                Write Medicine Instruction
              </Typography>
              <ReactQuill
                theme="snow"
                value={instructions}
                onChange={setInstructions}
              />
              ;
            </Grid>
            <Grid item xs={12}>
              <HCDatePicker
                name="followUpDate"
                label="Follow up Date"
                fullWidth={true}
                disablePast={false}
              ></HCDatePicker>
            </Grid>

            <Grid item md={12} textAlign={"end"}>
              <Button type="submit" sx={{ color: "#ffff" }}>
                {creating ? "Creating..." : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </HCForm>
      </Box>
    </Container>
  );
};

export default Prescription;
