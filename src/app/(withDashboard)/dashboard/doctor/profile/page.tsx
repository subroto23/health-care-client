"use client";
import Loader from "@/components/ui/Loader";
import {
  useGetSingleUserQuery,
  useUpdateUserInfoMutation,
} from "@/redux/api/userApi";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ProfileInformationDisplay from "./ProfileInformationDisplay";
import HCAutoFileUpload from "@/components/forms/HCAutoFileUploading";

const DoctorProfile = () => {
  const { data, isLoading } = useGetSingleUserQuery({});
  if (isLoading) {
    <Loader />;
  }
  const [uploadPhoto, { isLoading: uploading }] = useUpdateUserInfoMutation();
  const handleFileUploader = (file: File) => {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    uploadPhoto(formData);
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
