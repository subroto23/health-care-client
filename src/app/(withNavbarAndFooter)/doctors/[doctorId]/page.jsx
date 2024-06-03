"use client";
import { useGetSingleDoctorsQuery } from "@/redux/api/doctorsApi";
import Loader from "@/components/ui/Loader";
import DoctorInfoCard from "../DoctorInfoCard";
import { Container } from "@mui/material";

const DoctorInformation = ({ params }) => {
  const doctorId = params?.doctorId;
  const { data, isLoading } = useGetSingleDoctorsQuery({ id: doctorId });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Container>
        <DoctorInfoCard data={data} />
      </Container>
    </>
  );
};

export default DoctorInformation;
