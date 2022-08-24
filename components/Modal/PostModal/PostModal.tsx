import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import UserAvatar from "../../Avatar/UserAvatar";
import DateRangeInput from "../../DatePicker/DateRangeInput";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Input, { FORM_TYPE } from "../../Input/Input";
import { Button } from "@mui/material";
import BaseModal from "../BaseModal";
import { PostWrapper } from "./PostModal.styled";

type PostModalType = {
  isOpen: boolean;
};

const PostModal = ({ isOpen }: PostModalType) => {
  const themeContext = useContext(ThemeContext);

  return (
    <BaseModal isOpen={isOpen}>
      <PostWrapper>
        <UserAvatar letter="S" />
        <div>
          <div style={{ marginBottom: "0.7em" }}>
            <DateRangeInput />
          </div>
          <div style={{ marginBottom: "0.2em" }}>
            <Input
              type={FORM_TYPE.TEXTAREA}
              name="post"
              width="100%"
              autoFocus
              bgColor={themeContext.mainBgColor}
            />
          </div>
          <ImageOutlinedIcon fontSize="small" />
          <div style={{ textAlign: "right" }}>
            <Button variant="outlined">Post</Button>
          </div>
        </div>
      </PostWrapper>
    </BaseModal>
  );
};

export default PostModal;
