import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  user-select: none;
`;

export const MenuContainer = styled.div`
  margin-right: 1.8em;

  ul {
    list-style: none;
    display: flex;
    margin: 0;

    li {
      padding: 1em 1.7em 1.2em 1.7em;
      text-transform: capitalize;
      cursor: pointer;

      &.--inactive {
        color: ${({ theme }) => theme.secondaryColor};
      }

      &.--active {
        border-bottom: 3px solid ${({ theme }) => theme.mainColor};
      }
    }
  }
`;
export const SearchBarContainer = styled.div``;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.8em;
  gap: 1.5em;

  .MuiBadge-root {
    span {
      min-width: 5px;
      height: 5px;
    }
  }
`;
