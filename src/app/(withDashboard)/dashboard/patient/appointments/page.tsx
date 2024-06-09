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

const Appointments = () => {
  const { data, isLoading } = useGetMyAppointmentQuery({});
  const router = useRouter();

  if (isLoading) {
    return <Loader />;
  }
  //Handle Payment
  const handleControlPayment = (payment: string) => {
    console.dir(payment, { extends: true });
  };
  // Transform the data to include doctor name
  const transformValue = data?.map((el: any) => ({
    id: el.id,
    name: el.doctor.name,
    docProfilePhoto: el.doctor.profilePhoto,
    docContactNumber: el?.doctor?.contactNumber,
    doctorQualification: el?.doctor?.qualification,
    doctorCurrentWorkingPlace: el?.doctor?.currentWorkingPlace,
    paymentStatus: el.paymentStatus === "UNPAID" ? "Pay" : "Paid",
  }));

  const columns: GridColDef[] = [
    {
      field: "name",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Doctor Name",
    },
    {
      field: "docContactNumber",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Doctor Phone No.",
    },
    {
      field: "doctorQualification",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Doctor Qualification",
    },
    {
      field: "doctorCurrentWorkingPlace",
      headerAlign: "center",
      align: "center",
      flex: 3,
      headerName: "Doctor Current Working",
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              variant="outlined"
              onClick={() => handleControlPayment(row?.paymentStatus)}
              disabled={row?.paymentStatus === "Paid"}
              sx={
                row?.paymentStatus === "Paid"
                  ? { color: "green" }
                  : { color: "red", fontWeight: 600 }
              }
            >
              {row?.paymentStatus}
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
          {heading("Your Appointments")}
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

export default Appointments;
