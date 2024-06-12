"use client";
import { Button, CardActions, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const CardButton = ({ id }: any) => {
  const router = useRouter();
  const handleClickeabeleAppointment = (clickedId: string) => {
    router.push(`/doctors/${clickedId}`);
  };

  const handleClickedProfile = (clickedProfileId: string) => {
    router.push(`/doctors/${clickedProfileId}`);
  };
  return (
    <CardActions
      sx={{
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="contained"
        size="small"
        onClick={() => handleClickeabeleAppointment(id)}
      >
        <Typography
          textTransform={"capitalize"}
          fontWeight={600}
          color={"#ffff"}
          fontSize={{ xs: 12, sm: 14, md: 16 }}
        >
          Book Now
        </Typography>
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={() => handleClickedProfile(id)}
      >
        <Typography
          textTransform={"capitalize"}
          fontWeight={600}
          fontSize={{ xs: 12, sm: 14, md: 16 }}
          color="#04A7C3"
        >
          View Profile
        </Typography>
      </Button>
    </CardActions>
  );
};

export default CardButton;
