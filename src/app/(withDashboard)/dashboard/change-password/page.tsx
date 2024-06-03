"use client";
import HCForm from "@/components/forms/FormProvider";
import HCInputForm from "@/components/forms/HCInputForm";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { logout } from "@/services/actions/logout";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import KeyIcon from "@mui/icons-material/Key";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();
  //
  const handleSubmit = async (values: FieldValues) => {
    try {
      const res = await changePassword(values).unwrap();
      if (res) {
        toast.success(res?.message);
        logout(router);
      }
    } catch (error) {
      toast.error("Failed to Update !!!");
    }
  };
  const defaultValues = {
    oldPassword: "",
    newPassword: "",
  };
  return (
    <>
      <Container>
        <Box
          maxWidth={700}
          sx={{
            paddingY: { xs: 2 },
            marginX: "auto",
            border: { xs: "1px solid black", md: "none" },
            paddingX: "10px",
          }}
        >
          {/* Key Icon */}
          <Box
            sx={{
              textAlign: "center",
              marginBottom: 1,

              "& svg": {
                width: 100,
                height: 100,
                color: "primary.main",
              },
            }}
          >
            <KeyIcon />
          </Box>

          <Typography
            sx={{
              marginBottom: 4,
              fontWeight: 600,
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              textAlign: "center",
            }}
          >
            Change Your Password
          </Typography>
          <HCForm onSubmit={handleSubmit} defaultValues={defaultValues}>
            <Grid container spacing={2}>
              {/* Password Field */}
              <Grid item xs={12}>
                <HCInputForm
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                  placeholder="*************"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              {/* Password Field */}
              <Grid item xs={12}>
                <HCInputForm
                  name="newPassword"
                  label="New Password"
                  type="password"
                  placeholder="**************"
                  fullWidth={true}
                ></HCInputForm>
              </Grid>
              <Grid item md={12} textAlign={"end"}>
                <Button type="submit" sx={{ color: "#ffff" }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </HCForm>
        </Box>
      </Container>
    </>
  );
};

export default ChangePassword;
