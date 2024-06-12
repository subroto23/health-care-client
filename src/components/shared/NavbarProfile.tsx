import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { profileDatas } from "./ProfilesData";
import { logout } from "@/services/actions/logout";

const NavbarProfile = () => {
  const { data, isLoading } = useGetSingleUserQuery({});
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  if (isLoading) {
    return;
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    logout(router);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src={data?.profilePhoto}
            sx={{ border: "1px solid black" }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {profileDatas?.map((el) => (
          <MenuItem key={el.name} onClick={handleCloseUserMenu}>
            <Typography
              variant="h6"
              component={"h2"}
              color={"primary"}
              textAlign={"center"}
              fontWeight={600}
            >
              <Link href={el.path}>{el.name}</Link>
            </Typography>
          </MenuItem>
        ))}
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography
            variant="h6"
            component={"h6"}
            color={"primary"}
            textAlign={"center"}
            fontWeight={600}
            onClick={handleLogOut}
          >
            LogOut
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default NavbarProfile;
