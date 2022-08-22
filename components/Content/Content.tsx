import { Grid } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import { ContentWrapper } from "./Content.styled";

const Content = () => {
  return (
    <ContentWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} lg={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <Card />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default Content;
