import { Container, Grid, Paper } from "@mui/material";
import Logo from "components/Logo";
import React from "react";
import MainHeaderMenu from "./MainHeaderMenu";

export default function MainHeader() {
  return (
    <Paper square elevation={1}>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="py-8"
        >
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <MainHeaderMenu />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
