import HCForm from "@/components/forms/FormProvider";
import HCFileUpload from "@/components/forms/HCFileUploader";
import HCInputForm from "@/components/forms/HCInputForm";
import HcModelBox from "@/components/ui/DialogBox";
import { jsonDataToFormDataConverer } from "@/lib/formData/converFormData";
import { useCreateSpecilityMutation } from "@/redux/api/specilityApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export type IModelProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const defaultValues = {
  title: "",
  file: {},
};

export const specilityValidationSchema = z.object({
  title: z.string({ required_error: "Specility Title is required" }),
  file: z.instanceof(File),
});

const HCModelBoxComponent = ({ open, setOpen }: IModelProps) => {
  const [createSpecility] = useCreateSpecilityMutation();
  const handleSubmitButton = async (values: FieldValues) => {
    const formDataValue = jsonDataToFormDataConverer(values);
    try {
      const res = await createSpecility(formDataValue).unwrap();
      if (res?.id) {
        toast.success(res?.message);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to create specility !!!");
    }
  };

  return (
    <HcModelBox open={open} setOpen={setOpen} title={"Create Speciality"}>
      <HCForm
        onSubmit={handleSubmitButton}
        resolver={zodResolver(specilityValidationSchema)}
        defaultValues={defaultValues}
      >
        <Grid container spacing={3} direction={"column"} px={{ md: 2 }}>
          <Grid item md={12}>
            <HCInputForm
              name="title"
              label="Speciality Title"
              type="text"
            ></HCInputForm>
          </Grid>
          <Grid item md={12}>
            <HCFileUpload name={"file"} label="Upload Icon" fullWidth={true} />
          </Grid>
          <Grid item md={12} textAlign={"end"}>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </HCForm>
    </HcModelBox>
  );
};

export default HCModelBoxComponent;
