import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ListItemType } from "../ListBox/ListBox";

export type ListItemProps = {
  item: ListItemType;
  onSelectedItem: (item: ListItemType) => void;
};

const Item = ({ item, onSelectedItem }: ListItemProps) => {
  return (
    <ListItem disablePadding onClick={() => onSelectedItem(item)}>
      <ListItemButton>
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
};

export default Item;
