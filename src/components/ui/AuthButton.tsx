import { logout } from "@/services/actions/logout";
import { isLoggedIn, removeUser } from "@/services/authService/auth.service";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavbarProfile from "../shared/NavbarProfile";

const AuthButton = () => {
  const user = isLoggedIn();
  const router = useRouter();
  const handleLogOut = () => {
    logout(router);
  };
  return (
    <>
      {user ? (
        <>
          <NavbarProfile />
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default AuthButton;
