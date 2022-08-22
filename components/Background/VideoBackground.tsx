import React from "react";
import { VideoBackgroundStyled } from "./VideoBackground.styled";

const VIDEO_URL = "https://assets.codepen.io/3364143/7btrrd.mp4";
const VIDEO_WIDTH = "320";
const VIDEO_HEIGHT = "240";

const VideoBackground = () => {
  return (
    <VideoBackgroundStyled>
      <video autoPlay loop muted>
        <source src={VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VideoBackgroundStyled>
  );
};

export default VideoBackground;
