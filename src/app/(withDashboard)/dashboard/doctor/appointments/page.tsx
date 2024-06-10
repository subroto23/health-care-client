"use client";
import Loader from "@/components/ui/Loader";
import { useGetMyAppointmentQuery } from "@/redux/api/appointmentApi";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { heading } from "../profile/utlis/heading";
import { dateFormater } from "@/utlis/dateFormeting";
import convertTo12HourTime from "@/utlis/convertTime12Hour";

const Appointments = () => {
  const { data, isLoading } = useGetMyAppointmentQuery({});
  const router = useRouter();

  if (isLoading) {
    return <Loader />;
  }
  //Handle Payment
  const handleControlTreatment = (clickedValue: {
    patientId: string;
    appontmentId: string;
  }) => {
    const { patientId, appontmentId } = clickedValue;
    router.push(`/dashboard/doctor/treatment/${patientId}/${appontmentId}`);
  };
  // Transform the data to include doctor name
  const transformValue = data?.map((el: any) => ({
    id: el?.id,
    patientId: el?.patient?.id,
    name: el?.patient?.name,
    scheduleDate: dateFormater(el?.schedule?.startDate),
    schedulTime: `${convertTo12HourTime(el?.schedule?.startDate)}`,
  }));

  const columns: GridColDef[] = [
    {
      field: "name",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Patient Name",
    },
    {
      field: "scheduleDate",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Schedule Date",
    },
    {
      field: "schedulTime",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Schedule Time",
    },
    {
      field: "Icon",
      headerName: "Treatment",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              variant="outlined"
              onClick={() =>
                handleControlTreatment({
                  patientId: row?.patientId,
                  appontmentId: row?.id,
                })
              }
            >
              Treatment
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
