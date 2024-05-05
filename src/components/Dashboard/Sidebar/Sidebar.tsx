import assets from "@/assets";
import { getUserInfo } from "@/services/auth.service";
import { TUserRole } from "@/types";
import drawerItems from "@/utils/drawerItems";
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        mt={1}
        component={Link}
        href={"/"}
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component={"h1"}
          fontWeight={700}
          sx={{
            cursor: "pointer",
          }}
        >
          Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as TUserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
