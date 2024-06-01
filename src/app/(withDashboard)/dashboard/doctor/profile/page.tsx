"use client";
import Loader from "@/components/ui/Loader";
import {
  useGetSingleUserQuery,
  useUpdateUserInfoMutation,
} from "@/redux/api/userApi";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import ProfileInformationDisplay from "./ProfileInformationDisplay";
import HCAutoFileUpload from "@/components/forms/HCAutoFileUploading";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import FullPageProfileUpdate from "./FullPageModelOpen";

const DoctorProfile = () => {
  const { data, isLoading } = useGetSingleUserQuery({});
  const [open, setOpen] = useState(false);
  if (isLoading) {
    <Loader />;
  }
  const [uploadPhoto, { isLoading: uploading }] = useUpdateUserInfoMutation();
  const handleFileUploader = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    uploadPhoto(formData);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
        <Grid item xs={4}>
          <Image
            src={data?.profilePhoto}
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
                <EditIcon sx={{ color: "#ffff", fontSize: "20px" }} />
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

export default DoctorProfile;
