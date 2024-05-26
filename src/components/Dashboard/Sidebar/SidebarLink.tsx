import { IDashbordItem } from "@/interfaces";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ el }: { el: IDashbordItem }) => {
  const currentLink = `/dashboard/${el?.path}`;
  const pathName = usePathname();
  return (
    <Link href={currentLink}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === currentLink
            ? {
                borderRight: "3px solid #04A7C3",
                "& svg": {
                  color: "#04A7C3",
                },
              }
            : {}),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{el?.icon && <el.icon />}</ListItemIcon>
          <ListItemText primary={el?.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarLink;
