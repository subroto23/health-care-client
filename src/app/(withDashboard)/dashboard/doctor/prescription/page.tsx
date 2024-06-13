"use client";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import HCDatePicker from "@/components/forms/HCDatePicker";
import { useState } from "react";
import { useCreatePrescriptionMutation } from "@/redux/api/prescription";
import HCForm from "@/components/forms/FormProvider";
import MUIRichTextEditor from "mui-rte";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import { convertToRaw, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const Prescription = ({ params }: any) => {
  const [createPrescription, { isLoading: creating }] =
    useCreatePrescriptionMutation();
  const [instructions, setInstructions] = useState("");

  //Customize RichText
  const defaultTheme = createMuiTheme();

  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginTop: 20,
          border: "1px solid gray",
          width: "100%",
          padding: "10px",
        },
        editor: {
          borderTop: "1px solid gray",
          minHeight: "200px",
        },
      },
    },
  });

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
  const handleChange = (state: any) => {
    convertToRaw(state.getCurrentContent());
    const html = stateToHTML(state.getCurrentContent());
    setInstructions(html);
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
              <Box sx={{ marginY: 3 }}>
                <ThemeProvider theme={defaultTheme}>
                  <MUIRichTextEditor
                    label="Start typing..."
                    onChange={handleChange}
                  />
                </ThemeProvider>
              </Box>
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
