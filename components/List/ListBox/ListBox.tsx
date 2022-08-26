import React from "react";
import { List } from "@mui/material";
import Item from "../Item/Item";
import { ListBoxContainer, ListBoxWrapper } from "./ListBox.styled";

export type ListItemType = {
  icon?: React.ReactNode;
  text: string;
};

export type ListBoxProps = {
  list: ListItemType[];
  isOpen?: boolean;
  onSelectedItem: (item: ListItemType) => void;
};

const ListBox = ({ list, isOpen, onSelectedItem }: ListBoxProps) => {
  return (
    <>
      {isOpen && (
        <ListBoxWrapper>
          <ListBoxContainer>
            <List>
              {list.length &&
                list.map((item, index) => (
                  <React.Fragment key={index}>
                    <Item item={item} onSelectedItem={onSelectedItem} />
                  </React.Fragment>
                ))}
            </List>
          </ListBoxContainer>
        </ListBoxWrapper>
      )}
    </>
  );
};

export default ListBox;
