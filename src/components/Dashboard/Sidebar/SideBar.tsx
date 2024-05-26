import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { generateMenuItemByRole } from "@/utlis/dashboardItemsGenerator";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/authService/auth.service";
import SidebarLink from "./SidebarLink";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  const sideBarItems = generateMenuItemByRole(userRole);
  return (
    <Box>
      <Stack
        component={Link}
        href="/"
        direction={"row"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        py={2}
      >
        <Image src={assets.images.logo} alt="Logo" width={40} height={40} />
        <Typography
          variant="h6"
          component={"h1"}
          color={"#04A7C3"}
          fontWeight={600}
        >
          Health Care
        </Typography>
      </Stack>
      <Box>
        <List>
          {sideBarItems.map((el, index) => (
            <SidebarLink el={el} key={index} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
