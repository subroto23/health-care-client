import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        py={12}
        className=" bg-gradient-to-r from-[#003846] to-[90%]  to-[#04A7C3]"
      >
        <Stack direction={"row"} gap={3} alignItems={"center"}>
          <Image
            src={assets.images.footerLogo}
            width={50}
            height={50}
            alt="Footer Logo"
          />
          <Typography
            variant="h4"
            component={"h6"}
            fontWeight={600}
            color={"#ffff"}
          >
            Health Care
          </Typography>
        </Stack>
        <Stack>
          <Typography
            component={"p"}
            fontWeight={400}
            color={"#ffff"}
            mt={2}
            fontSize={20}
          >
            &copy; {year}, Healthcare. All rights reserved.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
