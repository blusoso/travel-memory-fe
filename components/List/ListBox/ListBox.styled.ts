import styled from "styled-components";

export const ListBoxWrapper = styled.div`
  background: ${({ theme }) => theme.mainColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 10em;
`;

export const ListBoxContainer = styled.div`
  ul > li > .MuiButtonBase-root {
    padding: 0.2em 0.9em;

    .MuiListItemIcon-root {
      min-width: 2.4em;
      color: ${({ theme }) => theme.mainBgColor};
    }

    .MuiListItemText-root > span {
      color: ${({ theme }) => theme.mainBgColor};
      font-size: 0.85em;
      letter-spacing: 1px;
    }
  }
`;
