import { Grid, IconButton, Typography } from "@mui/material";
import { dateFormater } from "@/utlis/dateFormeting";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const Doctor4ColumnCard = ({ data }: any) => {
  return (
    <Grid
      container
      my={1}
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={6} sm={3}>
        <Typography variant="body1" component={"h6"}>
          Total Exprience
        </Typography>
        <Typography variant={"h6"} component={"h1"} fontWeight={800}>
          {data?.experience}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="body1" component={"h1"}>
          Regi No
        </Typography>
        <Typography variant={"h6"} fontWeight={800}>
          {data?.registrationsNumber}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="body1">Joined HC</Typography>
        <Typography variant={"h6"} fontWeight={800}>
          {dateFormater(data?.createdAt)}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="body1">Average Rating</Typography>
        <Typography
          variant={"h6"}
          fontWeight={800}
          sx={{
            "& svg": {
              color: "#F97316",
            },
          }}
        >
          <IconButton>
            <StarHalfIcon />
          </IconButton>{" "}
          {data?.averageRating}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Doctor4ColumnCard;
