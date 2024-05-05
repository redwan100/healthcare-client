import { TDrawerItem } from "@/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TSidebarProps = {
  item: TDrawerItem;
};

const SidebarItem = ({ item }: TSidebarProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathname = usePathname();
  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? {
                borderRight: "3px solid #1586fd",
                background: "rgba(104, 210, 232,0.1)",
                "& svg": {
                  color: "#1586fd",
                },
              }
            : {}),
          mb: 1,
          "&:hover": {
            background: "rgba(104, 210, 232,0.1)",
          },
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
