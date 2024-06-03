import DoctorsPage from "@/components/pages/doctors/DoctorsPage";
import { Box, Container } from "@mui/material";

const Doctors = async () => {
  return (
    <Box>
      <Container sx={{ marginX: "auto" }}>
        <DoctorsPage />
      </Container>
    </Box>
  );
};

export default Doctors;
