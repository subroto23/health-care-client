import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useDeleteDoctorsMutation } from "@/redux/api/doctorsApi";

const DoctorsTable = ({ doctors, meta }: any) => {
  const [deleteDoctors] = useDeleteDoctorsMutation();
  const columns: GridColDef[] = [
    {
      field: "name",
      headerAlign: "center",
      align: "center",
      flex: 2,
      headerName: "Name",
    },
    {
      field: "email",
      headerAlign: "center",
      align: "center",
      flex: 2,
      headerName: "Email",
    },
    {
      field: "experience",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Exprience",
    },
    {
      field: "appointmentFee",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Appoint Fees",
    },
    {
      field: "qualification",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Qualification",
    },
    {
      field: "designation",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Designation",
    },
    {
      field: "icon",
      headerName: "Actions",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(row?.id)}
              sx={{ color: "red" }}
            >
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          await deleteDoctors(id)
            .unwrap()
            .then((res) => {
              if (res?.id) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
        }
      })
      .catch((err) => toast.error("Error!! Deleted"));
  };
  return (
    <div style={{ height: 400, width: "100%", margin: "30px 0" }}>
      <DataGrid rows={doctors} columns={columns} sx={{ py: 2 }} />
    </div>
  );
};

export default DoctorsTable;
