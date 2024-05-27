"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import dynamic from "next/dynamic";
import useMediaQuery from "@mui/material/useMediaQuery";

const AuthButton = dynamic(() => import("@/components/ui/AuthButton"), {
  ssr: false,
});

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F2FBFC",
        padding: { xs: 2, sm: 3 },
        borderBottom: { xs: "1px solid gray", md: "none" },
      }}
    >
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={{ xs: 1, sm: 2 }}
          gap={{ xs: 1, sm: 3 }}
        >
          {/* Logo Section */}
          <Stack direction={"row"} gap={{ xs: 1, sm: 2 }} alignItems={"center"}>
            <Link href="/">
              <Image
                src={assets.images.logo}
                width={30}
                height={30}
                alt="Logo"
              />
            </Link>

            <Typography
              variant="h6"
              component={"h2"}
              color={"primary"}
              fontWeight={600}
            >
              <Link href="/">Healthcare</Link>
            </Typography>
          </Stack>

          {/* NavLink Section */}
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Stack
              direction={"row"}
              gap={{ xs: 2, sm: 5 }}
              alignItems={"center"}
            >
              <Typography
                variant="h6"
                component={Link}
                href="/"
                color={"primary"}
                fontWeight={600}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                href="/doctors"
                fontWeight={600}
              >
                Doctors
              </Typography>
              <Typography
                variant="h6"
                component={Link}
                href="/medicine"
                fontWeight={600}
              >
                Medicine
              </Typography>
            </Stack>
          </Box>

          {/* Auth Button Section */}
          <Stack direction={"row"} gap={{ xs: 1, sm: 2 }}>
            <AuthButton />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
