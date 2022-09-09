import React, { useState } from "react";
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

const MENU_LIST: MENU_LIST_TYPE[] = [
  { name: "discover", link: "/" },
  { name: "calendar", link: "/" },
];

const Nav = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const [selectedMenu, setSelectedMenu] = useState(MENU_LIST[0]);

  const user = "xx";

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
        {session && session.user ? (
          <>
            {session.user.image ? (
              <UserAvatar image={session.user.image} />
            ) : (
              <UserAvatar letter="S" />
            )}
            <Button variant="outlined" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <Button variant="outlined" onClick={() => signIn()}>
            Sign in
          </Button>
        )}
      </ProfileContainer>
      <Button variant="outlined" onClick={() => dispatch(openModal({}))}>
        Post
      </Button>
    </NavContainer>
  );
};

export default Nav;
