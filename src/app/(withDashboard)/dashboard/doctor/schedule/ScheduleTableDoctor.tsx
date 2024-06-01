import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { dateFormater } from "@/utlis/dateFormeting";
import convertTo12HourTime from "@/utlis/convertTime12Hour";
import { useDeleteDoctorsScheduleMutation } from "@/redux/api/doctorScheduleApi";

const DoctorScheduleTable = ({ payload }: any) => {
  const { data, meta } = payload;
  const rows = data?.map((el: any) => ({
    id: el.schedule.id,
    doctorId: el.doctorId,
    isBooked: el.isBooked,
    startDate: dateFormater(el.schedule.startDate),
    startTime: convertTo12HourTime(el.schedule.startDate),
    endDate: dateFormater(el.schedule.endDate),
    endTime: convertTo12HourTime(el.schedule.endDate),
    scheduleId: el.scheduleId,
  }));
  const columns: GridColDef[] = [
    {
      field: "startDate",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Start Date",
    },
    {
      field: "startTime",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Start Time",
    },
    {
      field: "endDate",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "End Date",
    },
    {
      field: "endTime",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "End Time",
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
              onClick={() => handleDelete(row?.scheduleId)}
              sx={{ color: "red" }}
            >
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  const [deleteSchedule] = useDeleteDoctorsScheduleMutation();

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
          await deleteSchedule(id)
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
      <DataGrid rows={rows} columns={columns} sx={{ py: 2 }} />
    </div>
  );
};

export default DoctorScheduleTable;
