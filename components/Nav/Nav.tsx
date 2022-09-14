import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
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
import { useAppDispatch } from "../../hooks/hooks";
import { openModal } from "../../store/modal/modalSlice";
import { useRouter } from "next/router";
import Link from "next/link";

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

const Nav = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const [selectedMenu, setSelectedMenu] = useState(MENU_LIST[0]);
  const [userLoggedIn, setUserLoggedIn] = useState<
    UserLocalStorageData | undefined
  >(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("profile");
      if (user) {
        setUserLoggedIn(JSON.parse(user || "").result);
      }
    }
  }, []);

  const handleSignOut = () => {
    if (session && session.user) {
      signOut();
    } else {
      localStorage.removeItem("profile");
    }
    location.reload();
  };

  const renderLogoutButton = () => (
    <Button variant="outlined" onClick={handleSignOut}>
      Sign out
    </Button>
  );

  const renderUserInfo = () => {
    if (session && session.user) {
      return (
        <>
          {session.user.image ? (
            <UserAvatar image={session.user.image} />
          ) : (
            <UserAvatar letter={session.user.email.charAt(0)} />
          )}
          {renderLogoutButton()}
        </>
      );
    } else if (userLoggedIn) {
      return (
        <>
          <UserAvatar letter={userLoggedIn.name.charAt(0)} />
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
      <Button variant="outlined" onClick={() => dispatch(openModal({}))}>
        Post
      </Button>
    </NavContainer>
  );
};

export default Nav;
