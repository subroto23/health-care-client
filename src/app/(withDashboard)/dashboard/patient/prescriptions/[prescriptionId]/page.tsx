"use client";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import { useGetSinglePrescriptionQuery } from "@/redux/api/prescription";
import Loader from "@/components/ui/Loader";
import { dateFormater } from "@/utlis/dateFormeting";
const PresCriptionShow = ({ params }: any) => {
  const { data, isLoading } = useGetSinglePrescriptionQuery({
    id: params?.prescriptionId,
  });

  if (isLoading) {
    return <Loader />;
  }

  const prescriptionInfo = {
    patientName: data?.patient?.name,
    patientEmail: data?.patient?.email,
    createdAt: dateFormater(data?.createdAt),
    designation: data?.doctor?.designation,
    qualification: data?.doctor?.qualification,
    workingPlace: data?.doctor?.currentWorkingPlace,
    doctorName: data?.doctor?.name,
    contact: data?.doctor?.contactNumber,
    followupDate: dateFormater(data?.followUpDate),
    diagnosis: "Common Cold",
    medications: data?.instructions,
    notes: "Rest well and drink plenty of fluids. Avoid cold beverages.",
  };
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        {/* Header with Logo and Doctor Info */}
        <Box
          sx={{
            background: "linear-gradient(45deg,  #051937 60%, #021047 30% )",
            color: "#fff",
            padding: 2,
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
              <Image
                src={assets.images.logo}
                alt="Logo"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item xs={12} md={9} textAlign={"end"}>
              <Typography variant="h6" gutterBottom>
                Health Care
              </Typography>
              <Typography variant="body2" color={"#ffff"}>
                Contact: 123-456-7890
              </Typography>
              <Typography variant="body1" color={"#ffff"}>
                issue Date: {prescriptionInfo?.createdAt}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          <Grid item xs={12}>
            <Divider />
          </Grid>

          {/* Two-column layout */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {/* Doctor Info */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{ backgroundColor: "#fff3e0", padding: 2 }}
              >
                <Typography variant="h6" color="primary">
                  {/* Medications */}
                  Doctor Information
                </Typography>
                <Box sx={{ marginLeft: 2 }}>
                  <Typography variant="subtitle1">
                    <strong>Name:</strong> {prescriptionInfo.doctorName}
                  </Typography>
                  <Typography variant="subtitle1">
                    {prescriptionInfo?.qualification}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: 14 }}>
                    {prescriptionInfo?.designation}
                  </Typography>
                </Box>
              </Grid>
              {/* Patient Info */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{ backgroundColor: "#e3f2fd", padding: 2 }}
              >
                <Typography variant="h6" color="primary">
                  Patient Information
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Name:</strong> {prescriptionInfo.patientName}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Email:</strong> {prescriptionInfo.patientEmail}
                </Typography>
                {/* <Typography variant="subtitle1">
                  <strong>Diagnosis:</strong> {prescriptionInfo.diagnosis}
                </Typography> */}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Box sx={{ marginY: 5, paddingX: 6 }}>
            <Typography variant="subtitle1">
              <strong> Medications:</strong>
            </Typography>
            <Box
              sx={{
                lineHeight: 2,
                textTransform: "capitalize",
                minHeight: "248px",
              }}
              dangerouslySetInnerHTML={{
                __html: prescriptionInfo?.medications,
              }}
            ></Box>
          </Box>

          {/* Additional Notes */}
          <Grid item xs={12} sx={{ backgroundColor: "#f0f4c3", padding: 2 }}>
            <Typography variant="h6" color="primary">
              Notes
            </Typography>
            <Typography>{prescriptionInfo.notes}</Typography>
            {prescriptionInfo.followupDate ? (
              <Typography>
                <strong> Follow Up:</strong> {prescriptionInfo.followupDate}
              </Typography>
            ) : null}
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center", marginTop: 2 }}>
            <Typography variant="body2" color="textSecondary">
              This is a Health Care generated prescription.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PresCriptionShow;
