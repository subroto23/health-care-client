"use client";
import Loader from "@/components/ui/Loader";
import { useGetMyAppointmentQuery } from "@/redux/api/appointmentApi";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { heading } from "../../doctor/profile/utlis/heading";

const PaymentHistory = () => {
  const { data, isLoading } = useGetMyAppointmentQuery({});
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
    doctorQualification: el?.doctor?.qualification,
    amount: el?.payment?.amount,
    tanId: el?.payment?.transactionId,
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
      field: "doctorQualification",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Doctor Qualification",
    },
    {
      field: "amount",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Amount",
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
    {
      field: "tanId",
      headerAlign: "center",
      align: "center",
      flex: 2,
      headerName: "Transaction Id",
    },
  ];
  return (
    <Box style={{ width: "100%", margin: "30px 0" }}>
      <Box>
        <Typography mt={3} mb={5} textAlign={"center"}>
          {heading("Payment History")}
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

export default PaymentHistory;
