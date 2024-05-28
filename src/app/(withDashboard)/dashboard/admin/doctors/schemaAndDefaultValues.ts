import { z } from "zod";
export const inputFieldsValidationSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .refine((val) => val.trim().length > 0, {
      message: "Password is required",
    }),
  doctor: z.object({
    name: z
      .string()
      .min(3, { message: "Name should be at least 3 characters" })
      .refine((val) => val.trim().length > 0, { message: "Name is required" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .refine((val) => val.trim().length > 0, { message: "Email is required" }),
    contactNumber: z
      .string()
      .regex(/^01[3-9]\d{8}$/, {
        message: "Invalid contact number",
      })
      .refine((val) => val.trim().length > 0, {
        message: "Contact number is required",
      }),
    address: z.string().refine((val) => val.trim().length > 0, {
      message: "Address is required",
    }),
    registrationsNumber: z.string().refine((val) => val.trim().length > 0, {
      message: "Registrations number is required",
    }),
    designation: z.string().refine((val) => val.trim().length > 0, {
      message: "Designation is required",
    }),
    currentWorkingPlace: z.string().refine((val) => val.trim().length > 0, {
      message: "Current working place is required",
    }),
    qualification: z.string().refine((val) => val.trim().length > 0, {
      message: "Qualification is required",
    }),
    appointmentFee: z
      .number()
      .min(0, { message: "Appointment fee must be a non-negative number" }),
    experience: z.string().refine((val) => val.trim().length > 0, {
      message: "Experience is required",
    }),
    gender: z.string().refine((val) => val.trim().length > 0, {
      message: "Gender is required",
    }),
  }),
});

export const defaultValues = {
  password: "",
  doctor: {
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    address: "",
    registrationsNumber: "",
    designation: "",
    currentWorkingPlace: "",
    qualification: "",
    appointmentFee: "",
    experience: "",
    gender: "",
  },
};
