import { Box, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import {
  BaseModalBox,
  CloseIconWrapper,
  PostWrapper,
} from "./BaseModal.styled";
import CloseIcon from "@mui/icons-material/Close";
import UserAvatar from "../Avatar/UserAvatar";
import Input from "../Input/Input";

type BaseModalProps = {
  isOpen: boolean;
  handleClose?: () => void;
};

const BaseModal = ({ isOpen, handleClose }: BaseModalProps) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <BaseModalBox>
        <CloseIconWrapper>
          <CloseIcon />
        </CloseIconWrapper>
        <PostWrapper>
          <UserAvatar letter="S" />
          <Input name="post" />
        </PostWrapper>
      </BaseModalBox>
    </Modal>
  );
};

export default BaseModal;
