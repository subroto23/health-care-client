export const authStorageSaveKey = "accessToken";
export const authProtectedKey = "protectedToken";

export const Gender = ["MALE", "FEMALE"];

export const BloodGroup = [
  " A_POSITIVE",
  "O_POSITIVE",
  "B_POSITIVE",
  "AB_POSITIVE",
  "A_NEGATIVE",
  "B_NEGATIVE",
  "O_NEGATIVE",
  "AB_NEGATIVE",
];

export const BooleanValue = ["Yes", "No"];

export const UserRole = ["SUPER_ADMIN", "  ADMIN", " DOCTOR", " PATIENT"];

export const UserStatus = ["ACTIVE", " BLOCKED", "DELETED"];

export const MaritalStatus = ["MARRIED", "UNMARRIED"];
export const DietaryPreferences = ["Vegetarian", "Non Vegetarian"];

export const AppointmentStatus = [
  "SCHEDULED",
  "INPROGRESS",
  "COMPLETED",
  "CANCELED",
];

export const PaymentStatus = ["PAID", "UNPAID"];

export type TModelProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
