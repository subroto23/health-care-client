"use client"; // Error components must be Client Components

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{ py: { xs: 24, md: 20, lg: 24 }, px: { xs: 4, md: 44, lg: 24 } }}
        >
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "text.primary" }}
              >
                Something Went Wrong
              </Typography>
              <Typography variant="body1" sx={{ color: "text.primary" }}>
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </Typography>
              <Button onClick={() => reset()}>Try again</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
