import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import SearchInput from "../Input/SearchInput/SearchInput";
import {
  ListBoxUserSettingPosition,
  MenuContainer,
  NavContainer,
  ProfileContainer,
  SearchBarContainer,
} from "./Nav.styled";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, Button } from "@mui/material";
import UserAvatar from "../Avatar/UserAvatar";
import { useAppDispatch } from "../../hooks/hooks";
import { openModal } from "../../store/modal/modalSlice";
import Link from "next/link";
import decode from "jwt-decode";
import ListBox, { ListItemType } from "../List/ListBox/ListBox";

type MENU_LIST_TYPE = {
  name: string;
  link: string;
};

export type UserLocalStorageData = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

const MENU_LIST: MENU_LIST_TYPE[] = [
  { name: "discover", link: "/" },
  { name: "calendar", link: "/" },
];

const USER_SETTING_LIST_TEXT = {
  LOG_OUT: "Log out",
};

const USER_SETTING_LIST = [
  {
    text: USER_SETTING_LIST_TEXT.LOG_OUT,
  },
];

const Nav = () => {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(MENU_LIST[0]);
  const [userLoggedIn, setUserLoggedIn] = useState<
    UserLocalStorageData | undefined
  >(undefined);

  const logOut = () => {
    localStorage.removeItem("profile");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("profile");
      if (user) {
        setUserLoggedIn(JSON.parse(user).result);

        const token = JSON.parse(user).token;
        if (token) {
          const decodedToken: any = decode(token);

          if (decodedToken && decodedToken.exp * 1000 < new Date().getTime()) {
            logOut();
          }
        }
      }
    }
  }, []);

  const handleSignOut = () => {
    if (session && session.user) {
      signOut();
    } else {
      logOut();
    }
    location.reload();
  };

  const onSelectedItem = (selectedItem: ListItemType) => {
    if (selectedItem.text === USER_SETTING_LIST_TEXT.LOG_OUT) {
      handleSignOut();
    }
  };

  const renderLogoutButton = () => (
    <ListBoxUserSettingPosition>
      <ListBox
        list={USER_SETTING_LIST}
        isOpen={isOpen}
        onSelectedItem={onSelectedItem}
      />
    </ListBoxUserSettingPosition>
  );

  const renderUserInfo = () => {
    if (session && session.user) {
      return (
        <>
          {session.user.image ? (
            <UserAvatar
              image={session.user.image}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <UserAvatar
              letter={session.user.name?.charAt(0)}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          {renderLogoutButton()}
        </>
      );
    } else if (userLoggedIn) {
      return (
        <>
          <UserAvatar
            letter={userLoggedIn.name.charAt(0)}
            onClick={() => setIsOpen(!isOpen)}
          />
          {renderLogoutButton()}
        </>
      );
    } else {
      return (
        <Button variant="outlined" onClick={() => signIn()}>
          Sign in
        </Button>
      );
    }
  };

  return (
    <NavContainer>
      <MenuContainer>
        <ul>
          {MENU_LIST.map((menu: MENU_LIST_TYPE, index: number) => (
            <Link href={menu.link} key={`${menu.name}-${index}`}>
              <li
                className={menu === selectedMenu ? "--active" : "--inactive"}
                onClick={() => setSelectedMenu(menu)}
              >
                {menu.name}
              </li>
            </Link>
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
        {renderUserInfo()}
      </ProfileContainer>
      {(userLoggedIn || session) && (
        <Button variant="outlined" onClick={() => dispatch(openModal({}))}>
          Post
        </Button>
      )}
    </NavContainer>
  );
};

export default Nav;
