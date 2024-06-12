import { getUserInfo } from "@/services/authService/auth.service";

const user = getUserInfo();
const role = user?.role?.toLowerCase();

export const profileDatas = [
  {
    name: "Profile",
    path: `/dashboard/${role}/profile`,
  },
  {
    name: "Dashboard",
    path: `/dashboard/${role}`,
  },
];
