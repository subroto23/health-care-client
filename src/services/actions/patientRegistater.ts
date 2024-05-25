"use server";

export const patientRegister = async (data: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/users/create-patient`,
    {
      method: "post",
      body: data,
      cache: "no-store",
    }
  );
  const response = await res.json();
  return response;
};
