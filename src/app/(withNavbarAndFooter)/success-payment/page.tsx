"use client";
import Loader from "@/components/ui/Loader";
import { Box, Typography, Container, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const SuccessPayment = () => {
  const [paymentMeesage, setPaymentmessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const tran_id = searchParams.get("tran_id");
  const status = searchParams.get("status");
  useEffect(() => {
    if (tran_id || status === "VALID") {
      setLoading(true);
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/payments/validation-payment?tran_id=${tran_id}&status=${status}`
        )
        .then((res) => {
          if (!res?.data.success === false) {
            setPaymentmessage("Your Payments Request Failed");
            setLoading(false);
          } else {
            setPaymentmessage("");
            setLoading(false);
          }
        });
    }
  }, [tran_id, status]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#f0f4f8",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "20%",
            margin: "auto",
            "@media (min-width:600px)": {
              margin: "auto",
            },
          }}
        >
          {paymentMeesage ? (
            <svg
              viewBox="0 0 24 24"
              className="text-color-[#34d399] w-[4rem] h-[4rem] mx-auto mb-4"
            >
              <path
                fill="#34d399"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
          ) : (
            <>
              <svg
                fill="#8f0000"
                viewBox="0 -8 528 528"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#8f0000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>fail</title>
                  <path d="M264 456Q210 456 164 429 118 402 91 356 64 310 64 256 64 202 91 156 118 110 164 83 210 56 264 56 318 56 364 83 410 110 437 156 464 202 464 256 464 310 437 356 410 402 364 429 318 456 264 456ZM264 288L328 352 360 320 296 256 360 192 328 160 264 224 200 160 168 192 232 256 168 320 200 352 264 288Z"></path>
                </g>
              </svg>
            </>
          )}
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            {paymentMeesage ? "Payment Done!" : "Payment failed"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666666",
              marginTop: "16px",
            }}
          >
            {paymentMeesage
              ? "Thank you for completing your secure online payment."
              : "Payment not completed at this time"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666666",
              marginTop: "8px",
            }}
          >
            {paymentMeesage ? " Have a great day!" : null}
          </Typography>
          <Box sx={{ textAlign: "center", marginTop: "40px" }}>
            <Button
              component={Link}
              href="/dashboard/patient/appointments"
              sx={{
                color: "#ffffff",
                fontWeight: "bold",
                padding: "12px 24px",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#4338ca",
                },
              }}
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SuccessPayment;
