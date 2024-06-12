import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1" color={"black"}>
              404
            </Typography>
            <Typography variant="h6" color={"black"}>
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button
              component={Link}
              href="/"
              variant="contained"
              sx={{
                color: "black",
                background: "primary.main",
                marginTop: 2,
              }}
            >
              Back Home
            </Button>
          </Grid>
          <Grid xs={6}>
            <Image
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
