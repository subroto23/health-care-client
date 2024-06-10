import React from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";

const Prescription = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Prescription
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Patient Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Doctor Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Contact" variant="outlined" />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Diagnosis"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Medications"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Notes"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button variant="contained" color="primary">
              Save Prescription
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Prescription;
