import { Button, Grid, InputLabel, Paper, Stack } from "@mui/material";
import Logo from "components/Logo";
import LoginComponent from "pages/login/LoginComponent";
import React from "react";

export default function LoginHeader() {
  return (
    <Paper square elevation={1}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="p-2"
      >
        <Grid item>
          <Button variant="outlined" fullWidth>
            Register
          </Button>
        </Grid>
        <Grid item>
          <Stack justifyContent="space-between" alignItems="center" spacing={2}>
            <Logo />
            <InputLabel>0010011000100010</InputLabel>
          </Stack>
        </Grid>
        <Grid item>
          <LoginComponent />
        </Grid>
      </Grid>
    </Paper>
  );
}
