import { USER_ROLE } from "@/components/constants/userRole/UserRole";
import { IDashbordItem } from "@/interfaces";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ReviewsIcon from "@mui/icons-material/Reviews";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ReceiptIcon from "@mui/icons-material/Receipt";

export const generateMenuItemByRole = (role: string): IDashbordItem[] => {
  const roleMenues: IDashbordItem[] = [];
  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenues.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: PeopleIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenues.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: AccountTreeIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedule`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: BookOnlineIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;
    case USER_ROLE.DOCTOR:
      roleMenues.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedule`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: BookOnlineIcon,
        }
      );
      break;
    case USER_ROLE.PATIENT:
      roleMenues.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: BookOnlineIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedule`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: DocumentScannerIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: ReceiptIcon,
        }
      );
      break;
    default:
      break;
  }
  return [...roleMenues];
};
