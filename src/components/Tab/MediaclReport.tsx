import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const MediaclReport = ({ data }: any) => {
  const columns: GridColDef[] = [
    {
      field: "reportName",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Report Name",
    },
    {
      field: "reportLink",
      headerAlign: "center",
      align: "center",
      flex: 1,
      headerName: "Report Link",
      renderCell: ({ row }: any) => {
        return (
          <Box textAlign={"center"}>
            <Button
              variant="outlined"
              sx={{ color: "red" }}
              href={row.reportLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Show
            </Button>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <Box>
        {data?.medicalReport.length > 0 ? (
          <>
            {" "}
            <DataGrid
              rows={data?.medicalReport}
              columns={columns}
              sx={{ py: 2 }}
              hideFooter
            />
          </>
        ) : (
          <>
            <Typography
              variant="h6"
              component={"h1"}
              textAlign={"center"}
              mb={2}
            >
              Medical Report not found
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default MediaclReport;
