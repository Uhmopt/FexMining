import { Email, Logout, Person } from "@mui/icons-material";
import { Button, Container, Grid, Paper } from "@mui/material";
import { APP_EMAIL } from 'lib/global';
import React from "react";
export default function LoginHeader() {
  return (
    <Paper square elevation={1}>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Button size="small" variant="text" color="inherit" startIcon={<Email color="primary" />} >
              {APP_EMAIL}
            </Button>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              className="p-2"
            >
              <Grid item>
                <Button size="small" variant="text" color="inherit" startIcon={<Person color="primary" />} >
                  LOGIN
            </Button></Grid>
              <Grid item>
                <Button size="small" variant="text" color="inherit" startIcon={<Logout color="primary" />} >
                  SIGNUP
            </Button></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
