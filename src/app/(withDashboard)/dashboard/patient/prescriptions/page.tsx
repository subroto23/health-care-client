"use client";
import { useGetMyPrescriptionQuery } from "@/redux/api/prescription";
import Loader from "@/components/ui/Loader";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Pagination } from "@mui/material";
import { dateFormater } from "@/utlis/dateFormeting";
import { useRouter } from "next/navigation";
const PrescriptionTemplate = () => {
  const { data: presCriptions, isLoading: prescriptionLoaingData } =
    useGetMyPrescriptionQuery({});
  const router = useRouter();
  if (prescriptionLoaingData) {
    return <Loader />;
  }

  const handleNavigate = (id: string) => {
    router.push(`/dashboard/patient/prescriptions/${id}`);
  };

  const rows = presCriptions?.map((el: any) => ({
    id: el?.id,
    createAt: dateFormater(el?.createdAt),
    doctorName: el?.doctor?.name,
  }));

  const columns: GridColDef[] = [
    {
      field: "doctorName",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Doctor Name",
    },
    {
      field: "createAt",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Prescription Issue Date",
    },
    {
      field: "icon",
      headerName: "Actions",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: ({ id }: any) => {
        return (
          <Box>
            <Button onClick={() => handleNavigate(id)} sx={{ color: "white" }}>
              Show prescriptions
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <div style={{ height: "800px", width: "100%", margin: "30px 0" }}>
        <DataGrid rows={rows} columns={columns} hideFooter sx={{ py: 2 }} />
      </div>
    </>
  );
};

export default PrescriptionTemplate;
