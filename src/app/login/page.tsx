"use client";
import assets from "@/assets";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import {
  Box,
  Button,
  Container,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/actions/loginUser";
import { storedUserInfo } from "@/services/authService/auth.service";

type Inputs = {
  password: string;
  email: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    try {
      const res = await loginUser(values);
      const accessToken = res?.data?.accessToken;
      if (res?.success === true && accessToken) {
        storedUserInfo(accessToken);
        toast.success(res.message);
        router.push("/");
      } else if (res?.success === false) {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error("Error! Login Failed");
    }
  };
  return (
    <Stack
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      my={2}
      px={2}
    >
      <Container
        sx={{
          boxShadow: 3,
          backgroundColor: "#ffff",
          padding: { xs: 0 },
        }}
      >
        <Box pb={4}>
          <Box position={"relative"} mb={2}>
            <Box sx={{ width: "100%" }}>
              <Image
                src={assets.images.login}
                width={500}
                height={200}
                alt="Login"
                layout="responsive"
              />
            </Box>
            <Typography
              variant="h3"
              component={"h4"}
              color={"primary.main"}
              position={"absolute"}
              fontWeight={800}
              sx={{
                bottom: "40%",
                left: "6%",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
              }}
            >
              Login
            </Typography>
          </Box>
          {/* Input Field */}
          <Box my={{ xs: 4, sm: 6 }} px={{ xs: 2, sm: 6, md: 10 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*Email Address */}
              <Stack
                direction={{
                  md: "row",
                  sm: "column",
                }}
                gap={{
                  md: 4,
                  sm: 2,
                }}
              >
                <InputLabel
                  htmlFor="email-input"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
                    fontWeight: 600,
                  }}
                >
                  Email Address:
                </InputLabel>
                <Input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  id="email-input"
                  placeholder="johandoe@email.com"
                  type="email"
                  fullWidth={true}
                  sx={{
                    pb: {
                      sm: 0,
                      md: 1,
                    },
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
                    fontWeight: 600,
                    color: "#003846",
                    borderBottom: {
                      xs: "2px solid #003846", // For extra small devices
                      sm: "2px solid #003846", // For small devices
                      md: "3px solid #003846", // For medium devices
                    },
                    flex: 1,
                    "&::placeholder": {
                      fontSize: { xs: "1rem", md: "2rem" },
                    },
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon
                        sx={{
                          color: "#003846",
                          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
                          fontWeight: 600,
                          mr: {
                            md: 2,
                            xs: 0,
                          },
                        }}
                      />
                    </InputAdornment>
                  }
                />
              </Stack>
              {/*Password */}
              <Stack
                direction={{
                  md: "row",
                  sm: "column",
                }}
                gap={{
                  md: 4,
                  sm: 2,
                }}
                my={4}
              >
                <InputLabel
                  htmlFor="password-input"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
                    fontWeight: 600,
                    mr: {
                      md: 8,
                      sm: 0,
                    },
                  }}
                >
                  Password:
                </InputLabel>
                <Input
                  {...register("password", {
                    required: "password is required",
                  })}
                  id="password-input"
                  placeholder="*************"
                  type="password"
                  sx={{
                    pb: {
                      sm: 0,
                      md: 1,
                    },
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
                    fontWeight: 600,
                    color: "#003846",
                    flex: 1,
                    borderBottom: {
                      xs: "2px solid #003846", // For extra small devices
                      sm: "2px solid #003846", // For small devices
                      md: "3px solid #003846", // For medium devices
                    },
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <PasswordIcon
                        sx={{
                          color: "#003846",
                          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
                          fontWeight: 600,
                          mr: {
                            md: 2,
                            xs: 1,
                          },
                        }}
                      />
                    </InputAdornment>
                  }
                />
              </Stack>
              {/* Forgotten Password */}
              <Stack textAlign={"end"}>
                <Typography
                  component={"p"}
                  color={"primary.main"}
                  sx={{ fontSize: { sm: "18px", md: "22px" }, fontWeight: 600 }}
                >
                  Forgot Password?
                </Typography>
              </Stack>
              <Box>
                <Button
                  type="submit"
                  fullWidth={true}
                  sx={{
                    backgroundColor: "#003846",
                    paddingY: "18px",
                    color: "#ffff",
                    marginY: {
                      md: "24px",
                      xs: "12px",
                    },
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    component={"h4"}
                    sx={{ fontWeight: 600, textTransform: "capitalize" }}
                  >
                    Login
                  </Typography>
                </Button>
                <Typography
                  variant="h5"
                  component={"h4"}
                  sx={{
                    fontWeight: 400,
                    fontSize: {
                      xs: "1rem",
                      md: "2rem",
                      sm: "1.2rem",
                    },
                    textTransform: "capitalize",
                  }}
                  textAlign={"center"}
                  my={1}
                >
                  Don’t have an account?{" "}
                  <Link href="/signup" className="text-[#04A7C3] font-semibold">
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default LoginPage;
