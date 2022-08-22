import React, { useState } from "react";
import SearchInput from "../Input/SearchInput/SearchInput";
import {
  MenuContainer,
  NavContainer,
  ProfileContainer,
  SearchBarContainer,
} from "./Nav.styled";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, Button } from "@mui/material";
import UserAvatar from "../Avatar/UserAvatar";

const MENU_LIST = ["discover", "calendar"];

const Nav = () => {
  const [selectedMenu, setSelectedMenu] = useState(MENU_LIST[0]);

  return (
    <NavContainer>
      <MenuContainer>
        <ul>
          {MENU_LIST.map((menu, index) => (
            <li
              key={`${menu}-${index}`}
              className={menu === selectedMenu ? "--active" : "--inactive"}
              onClick={() => setSelectedMenu(menu)}
            >
              {menu}
            </li>
          ))}
        </ul>
      </MenuContainer>
      <SearchBarContainer>
        <SearchInput name="navbar" />
      </SearchBarContainer>
      <ProfileContainer>
        <Badge
          color="primary"
          variant="dot"
          sx={{
            cursor: "pointer",
          }}
        >
          <NotificationsIcon />
        </Badge>
        <UserAvatar letter="S" />
      </ProfileContainer>
      <Button variant="outlined">Post</Button>
    </NavContainer>
  );
};

export default Nav;
