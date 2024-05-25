"use client";
import assets from "@/assets";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Person2Icon from "@mui/icons-material/Person2";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useForm, SubmitHandler } from "react-hook-form";

type TPatient = {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
};

type Inputs = {
  password: string;
  patient: TPatient;
};

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
import { jsonDataToFormDataConverer } from "@/lib/formData/converFormData";
import { patientRegister } from "@/services/actions/patientRegistater";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/actions/loginUser";
import { storedUserInfo } from "@/services/authService/auth.service";

const Registation = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    const data = jsonDataToFormDataConverer(values);
    try {
      const res = await patientRegister(data);
      if (res?.data?.id) {
        toast.success(res.message);
        //Autometic Login user When Suuccessfully registaion
        const result = await loginUser({
          email: values.patient.email,
          password: values.password,
        });
        const accessToken = result?.data?.accessToken;
        if (result?.success === true && accessToken) {
          storedUserInfo(accessToken);
          router.push("/");
        }
      } else if (res?.success === false) {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error("Error! Not Created Account");
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
                fontSize: { xs: "1rem", sm: "2rem", md: "3rem" }, // Responsive font size
              }}
            >
              Sign Up
            </Typography>
          </Box>
          {/* Input Field */}
          <Box my={{ xs: 4, sm: 6 }} px={{ xs: 2, sm: 6, md: 10 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*Name Field */}
              <Stack
                direction={{
                  md: "row",
                  sm: "column",
                }}
                gap={{
                  md: 4,
                  sm: 2,
                }}
                my={6}
              >
                <InputLabel
                  htmlFor="name-input"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
                    fontWeight: 600,
                    mr: {
                      md: 9,
                    },
                  }}
                >
                  Full Name:
                </InputLabel>
                <Input
                  {...register("patient.name", {
                    required: "Name is required",
                  })}
                  id="name-input"
                  placeholder="John Doe"
                  type="text"
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
                      <Person2Icon
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
                my={6}
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
                  {...register("patient.email", {
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
              {/*Phone Field */}
              <Stack
                direction={{
                  md: "row",
                  sm: "column",
                }}
                gap={{
                  md: 4,
                  sm: 2,
                }}
                my={6}
              >
                <InputLabel
                  htmlFor="phone-input"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
                    fontWeight: 600,
                  }}
                >
                  Phone Number:
                </InputLabel>
                <Input
                  {...register("patient.contactNumber", {
                    required: "Phone Number is required",
                  })}
                  id="phone-input"
                  placeholder="0173456789"
                  type="tel"
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
                      <PhoneIcon
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
              {/* Address */}
              <Stack
                direction={{
                  md: "row",
                  sm: "column",
                }}
                gap={{
                  md: 4,
                  sm: 2,
                }}
                my={6}
              >
                <InputLabel
                  htmlFor="address-input"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
                    fontWeight: 600,
                    mr: {
                      md: 10,
                    },
                  }}
                >
                  Address:
                </InputLabel>
                <Input
                  {...register("patient.address", {
                    required: "Address is required",
                  })}
                  id="address-input"
                  placeholder="137,Farmget,Dhaka"
                  type="text"
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
                      <FmdGoodIcon
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
                    required: "Password is required",
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
              <Button
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
                type="submit"
              >
                <Typography
                  variant="h5"
                  component={"h4"}
                  sx={{ fontWeight: 600, textTransform: "capitalize" }}
                >
                  Registation
                </Typography>
              </Button>
            </form>
            <Box>
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
                Already have an account?{" "}
                <Link href="/login" className="text-[#04A7C3] font-semibold">
                  Login
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default Registation;
