import { Button, Stack, TextField } from "@mui/material";
import React from "react";

export default function GetInTouchForm() {
  return (
    <div>
      <Stack spacing={6}>
        <TextField placeholder="Your Name*" fullWidth />
        <TextField placeholder="Email Address*" fullWidth />
        <TextField multiline fullWidth rows={12} />
        <Button variant="contained" color="secondary" size="large">
          SEND MESSAGE
        </Button>
      </Stack>
    </div>
  );
}
