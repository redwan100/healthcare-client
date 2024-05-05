import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
    page:Number;
    limit:Number;
    total:Number;
}

export type TUserRole = keyof typeof USER_ROLE


export type TDrawerItem = {
    title:string;
    path:string;
    parentPath?:string;
    icon?:OverridableComponent<SvgIconTypeMap<{},"svg">> & {muiName:string};
    child?:TDrawerItem[]
}