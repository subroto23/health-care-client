import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

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

          {/* Button and UserMenu */}
          <Stack direction={"row"} gap={2}>
            <Button component={Link} href={"/login"}>
              <Typography
                variant="h6"
                component={"p"}
                color="#ffff"
                textTransform={"capitalize"}
              >
                Login
              </Typography>
            </Button>
            <Button component={Link} href="/signup">
              <Typography
                variant="h6"
                component={"p"}
                color="#ffff"
                textTransform={"capitalize"}
              >
                Signup
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
