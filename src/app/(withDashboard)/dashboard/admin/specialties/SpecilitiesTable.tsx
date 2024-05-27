import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useDeleteSpecilityMutation,
  useGetAllSpecilityQuery,
} from "@/redux/api/specilityApi";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { toast } from "sonner";

export default function SpecilityTable() {
  const { data, isLoading } = useGetAllSpecilityQuery({});
  const [deleteSpecility] = useDeleteSpecilityMutation();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row?.icon} width={30} height={30} alt="Icon" />
          </Box>
        );
      },
    },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(row?.id)}
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
          await deleteSpecility(id)
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
      <DataGrid rows={data} columns={columns} sx={{ py: 2 }} />
    </div>
  );
}
