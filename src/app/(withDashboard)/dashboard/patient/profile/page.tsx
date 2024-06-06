"use client";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import {
  useGetSingleUserQuery,
  useUpdateUserInfoMutation,
} from "@/redux/api/userApi";
import { useGetSinglePatientsQuery } from "@/redux/api/patientApi";
import HCAutoFileUpload from "@/components/forms/HCAutoFileUploading";
import Loader from "@/components/ui/Loader";
import ProfileInformationDisplay from "./ProfileInformation";
import FullPageProfileUpdate from "./FullPageProfileUpdate";
import { heading } from "../../doctor/profile/utlis/heading";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const PatientProfile = () => {
  const [open, setOpen] = useState(false);
  const { data: userInfo, isLoading } = useGetSingleUserQuery({});
  const {
    data,
    isLoading: userInfoLoading,
    refetch,
  } = useGetSinglePatientsQuery({
    id: userInfo?.id,
  });
  const [uploadPhoto, { isLoading: uploading }] = useUpdateUserInfoMutation();

  if (isLoading || userInfoLoading) {
    return <Loader />;
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleFileUploader = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    uploadPhoto(formData);
    refetch();
  };
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
      renderCell: ({ row }) => {
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
    <Box>
      <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
        <Grid item xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Image
              src={
                data?.profilePhoto ||
                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              }
              height={500}
              width={500}
              alt="User Photo"
            />
          </Box>
          <Box my={2}>
            {uploading ? (
              <Typography>Uploading...</Typography>
            ) : (
              <HCAutoFileUpload
                label="Change profile photo"
                name="file"
                onFileUpload={handleFileUploader}
                fullWidth={true}
              />
            )}
          </Box>
          <Box my={1}>
            <Button
              sx={{ color: "#ffff", textTransform: "capitalize" }}
              fullWidth={true}
              onClick={handleClickOpen}
            >
              <Typography variant="h6" mr={1}>
                Edit Profile
              </Typography>
              <IconButton sx={{ color: "#ffff" }}>
                <EditIcon />
              </IconButton>
            </Button>
          </Box>
          <FullPageProfileUpdate open={open} setOpen={setOpen} />
          <Stack>
            <Box mt={6} mb={2} sx={{ textAlign: "center" }}>
              {heading("Health Information")}
            </Box>
            {data?.patientHealthData?.mentalHealthHistory && (
              <Box>
                <Typography variant="h6" component={"h1"}>
                  Mental Health History
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {data?.patientHealthData?.mentalHealthHistory}
                </Typography>
              </Box>
            )}
            {data?.patientHealthData?.immunizationStatus && (
              <Box mt={2}>
                <Typography variant="h6" component={"h1"}>
                  Immunization History
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {data?.patientHealthData?.immunizationStatus}
                </Typography>
              </Box>
            )}
            <Box my={3}>
              <Typography
                variant="h6"
                component={"h1"}
                textAlign={"center"}
                mb={2}
              >
                Medical Reports
              </Typography>
              <DataGrid
                rows={data?.medicalReport}
                columns={columns}
                sx={{ py: 2 }}
                hideFooter
              />
            </Box>
          </Stack>
        </Grid>
        {/* Right Side */}
        <Grid item xs={8}>
          <ProfileInformationDisplay data={data} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PatientProfile;
