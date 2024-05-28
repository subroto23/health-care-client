import { getUserInfo } from "@/services/authService/auth.service";

const user = getUserInfo();

export const profileDatas = [
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Dashboard",
    path: `/dashboard/${user?.role?.toLowerCase()}`,
  },
];
