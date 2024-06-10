import React from "react";
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
const PrescriptionTemplate = () => {
  const demoData = {
    patientName: "John Doe",
    date: "2024-06-10",
    doctorName: "Dr. Smith",
    contact: "123-456-7890",
    diagnosis: "Common Cold",
    medications: [
      "Paracetamol 500mg - Take one tablet every 6 hours as needed for pain.",
      "Cough Syrup - Take 10ml three times a day after meals.",
      "Vitamin C - Take one tablet daily.",
    ],
    notes: "Rest well and drink plenty of fluids. Avoid cold beverages.",
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{ padding: 4, marginTop: 4, backgroundColor: "#f3f4f6" }}
      >
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
              <Typography variant="body1" color={"#ffff"}>
                Dr. Smith
              </Typography>
              <Typography variant="body2" color={"#ffff"}>
                Contact: 123-456-7890
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
                  <strong>Name:</strong> {demoData.patientName}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Date:</strong> {demoData.date}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Diagnosis:</strong> {demoData.diagnosis}
                </Typography>
              </Grid>

              {/* Medication List */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{ backgroundColor: "#fff3e0", padding: 2 }}
              >
                <Typography variant="h6" color="primary">
                  Medications
                </Typography>
                <Box sx={{ marginLeft: 2 }}>
                  {demoData.medications.map((medication, index) => (
                    <Typography key={index}>{medication}</Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          {/* Additional Notes */}
          <Grid item xs={12} sx={{ backgroundColor: "#f0f4c3", padding: 2 }}>
            <Typography variant="h6" color="primary">
              Notes
            </Typography>
            <Typography>{demoData.notes}</Typography>
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

export default PrescriptionTemplate;
