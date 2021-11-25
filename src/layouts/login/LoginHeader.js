import { Email, Logout, Person } from "@mui/icons-material";
import { Container, Grid, Paper } from "@mui/material";
import LinkButton from "components/buttons/LinkButton";
import { APP_EMAIL } from "lib/global";
import React from "react";
export default function LoginHeader() {
  return (
    <Paper square elevation={1}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <LinkButton icon={<Email color="primary" />}>
              {APP_EMAIL}
            </LinkButton>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item className="p-2">
                <LinkButton icon={<Person color="primary" />}>LOGIN</LinkButton>
              </Grid>
              <Grid item className="p-2">
                <LinkButton icon={<Logout color="primary" />}>
                  SIGNUP
                </LinkButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
