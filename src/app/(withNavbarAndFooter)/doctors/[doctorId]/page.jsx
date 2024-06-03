"use client";
import { useGetSingleDoctorsQuery } from "@/redux/api/doctorsApi";
import Loader from "@/components/ui/Loader";
import DoctorInfoCard from "../DoctorInfoCard";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { dateFormater } from "@/utlis/dateFormeting";
import convertTo12HourTime from "@/utlis/convertTime12Hour";
import { heading } from "@/app/(withDashboard)/dashboard/doctor/profile/utlis/heading";
import { useCreateAppointmentMutation } from "@/redux/api/appointmentApi";
import { toast } from "sonner";

const DoctorInformation = ({ params }) => {
  const doctorId = params?.doctorId;
  const { data, isLoading } = useGetSingleDoctorsQuery({ id: doctorId });
  const { data: schedules, isLoading: loader } = useGetAllDoctorSchedulesQuery(
    {}
  );
  const [createAppointment] = useCreateAppointmentMutation();

  if (isLoading || loader) {
    return <Loader />;
  }
  const handleClicked = async (scheduleId) => {
    const appointmentValues = {
      doctorId: data?.id,
      scheduleId: scheduleId,
    };
    try {
      const res = await createAppointment(appointmentValues).unwrap();
      if (res?.id) {
        toast.success(res?.message);
      }
    } catch (error) {
      toast.error("Failed to Update !!!");
    }
  };

  return (
    <>
      <Container>
        <DoctorInfoCard data={data} />
        <Box mb={8}>
          <Box my={2}>{heading("Choose your Appointment Time")}</Box>
          <Grid container spacing={2}>
            {schedules?.data?.map((el) => {
              if (el?.isBooked) {
                return;
              }
              const startDate = dateFormater(el?.schedule?.startDate);
              const startTime = convertTo12HourTime(el?.schedule?.startDate);
              const endTime = convertTo12HourTime(el?.schedule?.endDate);
              return (
                <Grid item xs={6} sm={3} key={el?.schedule?.id}>
                  <Card
                    sx={{
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    onClick={() => handleClicked(el?.schedule?.id)}
                  >
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                        fontWeight={600}
                        textAlign={"center"}
                      >
                        {startDate}
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight={800}
                        textAlign={"center"}
                      >
                        {startTime} - {endTime}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DoctorInformation;