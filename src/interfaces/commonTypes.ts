import { USER_ROLE } from "@/components/constants/userRole/UserRole";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TResponseDataFromServer = {
  data: any;
  meta: TMeta;
};

export type TErrorResponseDataFromServer = {
  statusCode: number;
  message: string;
  errorMessages?: any;
};

export type TUserRole = keyof typeof USER_ROLE;

export interface IDashbordItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: IDashbordItem[];
}

export type TModelProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
