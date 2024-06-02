"use client";
import HCForm from "@/components/forms/FormProvider";
import HCInputForm from "@/components/forms/HCInputForm";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { logout } from "@/services/actions/logout";
import { Box, Button, Container, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

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
          maxWidth={500}
          sx={{
            paddingY: { xs: 2 },
            marginX: "auto",
            boxShadow: 2,
            paddingX: "10px",
          }}
        >
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
