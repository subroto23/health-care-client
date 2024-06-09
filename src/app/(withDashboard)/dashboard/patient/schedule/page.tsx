"use client";
import Loader from "@/components/ui/Loader";
import { useGetMyAppointmentQuery } from "@/redux/api/appointmentApi";
import convertTo12HourTime from "@/utlis/convertTime12Hour";
import { dateFormater } from "@/utlis/dateFormeting";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import VideocamIcon from "@mui/icons-material/Videocam";
import { heading } from "../../doctor/profile/utlis/heading";

const Schedule = () => {
  const { data, isLoading } = useGetMyAppointmentQuery({});
  const router = useRouter();

  if (isLoading) {
    return <Loader />;
  }
  //Handle Payment
  const handleControlPayment = (payment: string) => {
    console.dir(payment, { extends: true });
  };

  //Handle Video Calling
  const handleVideoCallingId = (id: string) => {
    console.log(id);
  };

  // Transform the data to include doctor name
  const transformValue = data?.map((el: any) => ({
    id: el.id,
    name: el.doctor.name,
    docProfilePhoto: el.doctor.profilePhoto,
    docContactNumber: el?.doctor?.contactNumber,
    scheduleDate: dateFormater(el?.schedule?.startDate),
    scheduleTime: `${convertTo12HourTime(
      el?.schedule?.startDate
    )} - ${convertTo12HourTime(el?.schedule?.endDate)}`,
    videoCallingId: el.videoCallingId,
    paymentStatus: el.paymentStatus === "UNPAID" ? "Pay" : "Paid",
  }));

  const columns: GridColDef[] = [
    {
      field: "name",
      headerAlign: "center",
      align: "center",
      flex: 2,
      headerName: "Doctor Name",
    },
    {
      field: "scheduleDate",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Schedule Date",
    },
    {
      field: "scheduleTime",
      headerAlign: "center",
      align: "center",
      flex: 2,
      headerName: "Schedule Time",
    },
    {
      field: "videoCall",
      headerName: "Join Video Call",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              variant="outlined"
              startIcon={<VideocamIcon />}
              onClick={() => handleVideoCallingId(row?.videoCallingId)}
              sx={{ color: "green" }}
              disabled={row?.paymentStatus === "Pay"}
            >
              Join
            </Button>
          </Box>
        );
      },
    },
  ];
  return (
    <Box style={{ width: "100%", margin: "30px 0" }}>
      <Box>
        <Typography mt={3} mb={5} textAlign={"center"}>
          {heading("Your Schedules")}
        </Typography>
      </Box>
      <DataGrid
        rows={data && transformValue}
        columns={columns}
        hideFooter
        sx={{ py: 2 }}
      />
    </Box>
  );
};

export default Schedule;
