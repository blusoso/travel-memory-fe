import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import UserAvatar from "../../Avatar/UserAvatar";
import DateRangeInput from "../../DatePicker/DateRangeInput";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Input, { FORM_TYPE } from "../../Input/Input";
import { Button } from "@mui/material";
import BaseModal from "../BaseModal";
import { ImageFileLabel, PostWrapper } from "./PostModal.styled";
import { getBase64 } from "../../../utils/file";
import { NewPostType } from "../../../store/post/api";

type PostModalType = {
  isOpen: boolean;
};

const PostModal = ({ isOpen }: PostModalType) => {
  const themeContext = useContext(ThemeContext);
  const [postData, setPostData] = useState<NewPostType>({
    title: "",
    message: "",
    creator: "",
    tags: [],
    selectedFile: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("submit");
  };

  const handleFileInputChange = async (e: any) => {
    const file = e.target.files[0];
    const result = await getBase64(file);
    setPostData({ ...postData, selectedFile: result });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  return (
    <BaseModal isOpen={isOpen}>
      <PostWrapper>
        <UserAvatar letter="S" />
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div style={{ marginBottom: "0.7em" }}>
            <Input
              name="title"
              placeholder="Title"
              autoFocus
              bgColor={themeContext.mainBgColor}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              name="tags"
              placeholder="Tags"
              autoFocus
              bgColor={themeContext.mainBgColor}
              onChange={handleChange}
            />
          </div>
          <div style={{ margin: "0.7em 0" }}>
            <DateRangeInput />
          </div>
          <div style={{ marginBottom: "0.2em" }}>
            <Input
              type={FORM_TYPE.TEXTAREA}
              name="message"
              placeholder="Message"
              bgColor={themeContext.mainBgColor}
              onChange={handleChange}
            />
          </div>
          <ImageFileLabel>
            <ImageOutlinedIcon fontSize="small" />
            <input type="file" onChange={handleFileInputChange} />
          </ImageFileLabel>
          <div style={{ textAlign: "right" }}>
            <Button type="submit" variant="outlined">
              Post
            </Button>
          </div>
        </form>
      </PostWrapper>
    </BaseModal>
  );
};

export default PostModal;
