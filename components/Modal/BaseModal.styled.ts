import styled from "styled-components";
import { Glassmorphism } from "../Glassmorphism/Glassmorphism.styled";

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 0.7em;
  right: 1.1em;
  cursor: pointer;
`;

export const BaseModalBox = styled(Glassmorphism)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.4em 2.2em;
`;
