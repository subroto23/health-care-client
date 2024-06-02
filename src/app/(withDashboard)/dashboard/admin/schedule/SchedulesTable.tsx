import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Pagination } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { dateFormater } from "@/utlis/dateFormeting";
import { useDeleteScheduleMutation } from "@/redux/api/scheduleApi";
import { timeFormatter } from "@/utlis/timeFormetter";

const SchedulesTable = ({ schedules, meta, page, setPage }: any) => {
  const updateSchedule = schedules?.map((el: any) => {
    return {
      id: el?.id,
      startDate: dateFormater(el.startDate),
      endDate: dateFormater(el.endtDate),
      startTime: timeFormatter(el.startDate),
      endTime: timeFormatter(el.endDate),
    };
  });
  const columns: GridColDef[] = [
    {
      field: "startDate",
      headerAlign: "center",
      align: "center",
      flex: 2,
      headerName: "Start Date",
    },
    {
      field: "startTime",
      headerAlign: "center",
      align: "center",
      flex: 2,
      headerName: "Start Time",
    },
    {
      field: "endDate",
      headerAlign: "center",
      align: "center",
      flex: 2,
      headerName: "End Date",
    },
    {
      field: "endTime",
      headerAlign: "center",
      align: "center",
      flex: 2,
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
          //   await deleteSchedule(id)
          //     .unwrap()
          //     .then((res) => {
          //       if (res?.id) {
          //         Swal.fire({
          //           title: "Deleted!",
          //           text: "Your file has been deleted.",
          //           icon: "success",
          //         });
          //       }
          //     });
          toast.error(
            "Failed !!! Developer is sleeping not implemented delete api"
          );
        }
      })
      .catch(() => toast.error("Failed to delete !!!"));
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const countPageNumber = Math.ceil(meta?.total / meta?.limit);
  return (
    <div style={{ height: 400, width: "100%", margin: "30px 0" }}>
      <DataGrid
        rows={updateSchedule}
        columns={columns}
        sx={{ py: 2 }}
        slots={{
          footer: () => {
            return (
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <Pagination
                  count={countPageNumber}
                  page={page}
                  onChange={handleChange}
                />
              </Box>
            );
          },
        }}
      />
    </div>
  );
};

export default SchedulesTable;
