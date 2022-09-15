import React, { useState } from "react";
import ListBox, { ListItemType } from "../../List/ListBox/ListBox";
import MoreHorizon from "./MoreHorizon";
import { MORE_HORIZON_POST_ITEM_TEXT } from "../../Card/PostCard";
import { useAppDispatch } from "../../../hooks/hooks";
import { openModal } from "../../../store/modal/modalSlice";
import { deletePost, Post } from "../../../store/post/postSlice";
import { LisBoxPostPosition } from "./PostMoreHorizon.styled";

type PostMoreHorizonProps = {
  listBox: ListItemType[];
  post: Post;
};

const PostMoreHorizon = ({ listBox, post }: PostMoreHorizonProps) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleListBox = () => {
    setIsOpen(!isOpen);
  };

  const onSelectedItem = (selectedItem: ListItemType) => {
    if (selectedItem.text === MORE_HORIZON_POST_ITEM_TEXT.EDIT) {
      dispatch(openModal({ post }));
    } else if (selectedItem.text === MORE_HORIZON_POST_ITEM_TEXT.DELETE) {
      dispatch(deletePost(post._id));
    }
    toggleListBox();
  };

  return (
    <>
      <LisBoxPostPosition>
        <ListBox
          list={listBox}
          isOpen={isOpen}
          onSelectedItem={onSelectedItem}
        />
      </LisBoxPostPosition>
      <MoreHorizon bottom="1.2em" right="0.65em" onClick={toggleListBox} />
    </>
  );
};

export default PostMoreHorizon;
