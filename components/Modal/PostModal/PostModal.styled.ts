import styled from "styled-components";

export const PostHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 0.7em;
`;

export const PostWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

export const ImageFileLabel = styled.label`
  svg {
    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }
`;
