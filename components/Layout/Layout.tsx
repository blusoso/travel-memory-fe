import React from "react";
import VideoBackground from "../Background/VideoBackground";
import { GlassmorphismBackdrop } from "../Glassmorphism/Glassmorphism.styled";
import Nav from "../Nav/Nav";
import { LayoutWrapper } from "./Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
  hasNav?: boolean;
};

const Layout = ({ children, hasNav = true }: LayoutProps) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <VideoBackground />
        <GlassmorphismBackdrop />
      </div>
      {hasNav && <Nav />}
      <main style={{ width: "100%", height: "100%" }}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </main>
    </>
  );
};

export default Layout;
