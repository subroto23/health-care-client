import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Box, Typography } from "@mui/material";

const GenerateRating = ({ rating }: any) => {
  const startStars = Array.from({ length: rating }, (_, index) => (
    <Typography key={index} color="#F97316">
      <GradeIcon></GradeIcon>
    </Typography>
  ));

  const endStars = Array.from({ length: 5 - rating }, (_, index) => (
    <Typography key={index} color="#F97316">
      <StarHalfIcon></StarHalfIcon>
    </Typography>
  ));

  return (
    <Box sx={{ display: "flex", gap: "4px", color: "" }}>
      {startStars}
      {endStars}
    </Box>
  );
};

export default GenerateRating;
