"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

import dynamic from "next/dynamic";
const AuthButton = dynamic(() => import("@/components/ui/AuthButton"), {
  ssr: false,
});

const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: "#F2FBFC" }}>
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={2}
        >
          {/* Logo Section */}
          <Stack direction={"row"} gap={2}>
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
          <Stack direction={"row"} gap={5}>
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
          <Stack direction={"row"} gap={2}>
            <AuthButton />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
