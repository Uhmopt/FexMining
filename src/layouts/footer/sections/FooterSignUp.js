import { Send } from "@mui/icons-material";
import { Button, Paper, TextField } from "@mui/material";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function FooterSignUp() {
  return (
    <div className="text-gray-400">
      <CustomText className="mb-4" color="white" variant="h4">
        <span className="border-b-2 border-primary pb-2">NEWSL</span>ETTER
        SIGNUP
      </CustomText>

      <div className="py-2">
        <Paper className="flex items-stretch">
          <TextField fullWidth placeholder="Subscribe Now" />
          <Button variant="contained" size="large">
            <Send />
          </Button>
        </Paper>
      </div>
    </div>
  );
}
