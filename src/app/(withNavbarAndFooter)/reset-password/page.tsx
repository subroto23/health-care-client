"use client";
import KeyIcon from "@mui/icons-material/Key";
import HCForm from "@/components/forms/FormProvider";
import HCInputForm from "@/components/forms/HCInputForm";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("user");
  const token = searchParams.get("token");
  const router = useRouter();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const handleSubmit = async (values: FieldValues) => {
    try {
      const dataValues = {
        password: values?.password,
        id: userId,
        token,
      };
      const res = await resetPassword(dataValues).unwrap();
      if (res) {
        router.push("/login");
        toast.success(res?.message);
      }
    } catch (error) {
      toast.error("Failed to Reset Password !!!");
    }
  };

  return (
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
          Reset Your Password
        </Typography>
        <HCForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Password Field */}
            <Grid item xs={12}>
              <HCInputForm
                name="password"
                label="New Password"
                type="password"
                placeholder="*************"
                fullWidth={true}
              ></HCInputForm>
            </Grid>
            {/* Password Field */}
            <Grid item xs={12}>
              <HCInputForm
                name="conformPassword"
                label="Conform Password"
                type="password"
                placeholder="**************"
                fullWidth={true}
              ></HCInputForm>
            </Grid>
            <Grid item md={12} textAlign={"end"}>
              <Button type="submit" sx={{ color: "#ffff" }}>
                {isLoading ? "Reseting..." : "Reset"}
              </Button>
            </Grid>
          </Grid>
        </HCForm>
      </Box>
    </Container>
  );
};

export default ResetPassword;
