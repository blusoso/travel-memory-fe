import React from "react";
import { Modal } from "@mui/material";
import { BaseModalBox, CloseIconWrapper } from "./BaseModal.styled";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../hooks/hooks";
import { closeModal } from "../../store/modal/modalSlice";

type BaseModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

const BaseModal = ({ children, isOpen }: BaseModalProps) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <BaseModalBox>
        <CloseIconWrapper onClick={handleClose}>
          <CloseIcon />
        </CloseIconWrapper>
        {children}
      </BaseModalBox>
    </Modal>
  );
};

export default BaseModal;
