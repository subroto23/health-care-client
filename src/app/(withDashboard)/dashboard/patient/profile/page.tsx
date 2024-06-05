"use client";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
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
  return (
    <Box>
      <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
        <Grid item xs={4}>
          <Image
            src={
              data?.profilePhoto ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            height={500}
            width={500}
            alt="User Photo"
          />
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
              <IconButton>
                <EditIcon />
              </IconButton>
            </Button>
          </Box>
          <FullPageProfileUpdate open={open} setOpen={setOpen} />
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
