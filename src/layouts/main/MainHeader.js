import { Grid, Paper, Stack } from "@mui/material";
import Logo from "components/Logo";
import React from "react";

export default function MainHeader() {
  return (
    <Paper square elevation={1}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="p-2"
      >
        <Grid item>
          <Stack justifyContent="space-between" alignItems="center" spacing={2}>
            <Logo />
          </Stack>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Paper>
  );
}
