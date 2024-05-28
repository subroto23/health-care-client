export type TResponseDoctors = {
  id: string;
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  address: string;
  registrationsNumber: string;
  designation: string;
  currentWorkingPlace: string;
  qualification: string;
  appointmentFee: number;
  experience: string;
  gender: string;
  specilities?: {
    id: string;
    isDeleted: null;
  };
};
