import React, { useContext, useState, useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addPost, updatePost } from "../../../store/post/postSlice";
import {
  closeModal,
  selectSelectedPost,
} from "../../../store/modal/modalSlice";

type PostModalType = {
  isOpen: boolean;
};

const PostModal = ({ isOpen }: PostModalType) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector(selectSelectedPost);

  const initPostData = {
    _id: "",
    title: "",
    message: "",
    creator: "bluso.so",
    tags: [],
    selectedFile: "",
  };
  const [postData, setPostData] = useState<NewPostType>(initPostData);

  useEffect(() => {
    if (selectedPost) {
      setPostData({
        _id: selectedPost?._id,
        title: selectedPost?.title,
        message: selectedPost?.message,
        creator: selectedPost?.creator,
        tags: selectedPost?.tags,
        selectedFile: selectedPost?.selectedFile,
      });
    } else {
      setPostData(initPostData);
    }
  }, [selectedPost]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (postData.title && postData.message && postData.creator) {
      if (postData._id !== "") {
        dispatch(updatePost(postData));
      } else {
        dispatch(addPost(postData));
      }
      dispatch(closeModal());
    }
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
              value={postData.title}
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
              value={postData.message}
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
