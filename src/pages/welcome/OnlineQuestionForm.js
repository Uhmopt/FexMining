import { Send } from "@mui/icons-material";
import { Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";

export default function OnlineQuestionForm() {
  return (
    <div className="w-full relative my-4">
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Paper>
            <TextField label="Your Name*" variant="outlined" fullWidth />
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Paper>
            <TextField label="Email Address*" variant="outlined" fullWidth />
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Paper>
            <TextField label="Your Website*" variant="outlined" fullWidth />
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Paper>
            <TextField label="Topic*" variant="outlined" fullWidth />
          </Paper>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper>
            <TextField variant="outlined" fullWidth multiline rows={6} />
          </Paper>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} className="my-4">
          <Button
            color="primary"
            variant="contained"
            startIcon={<Send />}
            fullWidth
          >
            SEND MESSAGE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
