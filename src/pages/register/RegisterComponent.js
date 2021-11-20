import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import RigisterForm from "./RigisterForm";

export default function RigisterComponent() {
  const [data, setData] = useState({});

  return (
    <div>
      <Grid container spacing={1} direction="column">
        <Grid item>
          <RigisterForm data={data ?? {}} onChange={setData} type="state" />
        </Grid>
        <Grid item>
          <Button variant="outlined" fullWidth>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
