import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
  page: Number;
  limit: Number;
  total: Number;
};

export type TUserRole = keyof typeof USER_ROLE;

export type TDrawerItem = {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: TDrawerItem[];
};

export type TResponseSuccess = {
  data: any;
  meta?: TMeta;
};

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage?: TGenericMessage;
};

type TGenericMessage = {
  path?: string | number;
  message?: string;
};

export const Gender = ["MALE", "FEMALE"];
