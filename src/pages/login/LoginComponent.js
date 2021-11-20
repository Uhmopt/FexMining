import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function LoginComponent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state?.auth?.isAuth);
  const [data, setData] = useState({});

  const handleSubmit = () => {
    onLogined();
  };

  const onLogined = () => {
    dispatch({
      type: "SET_AUTH",
      payload: (s = {}) => ({
        ...(s ?? {}),
        user: { id: "1", first_name: "test", last_name: "client" },
        token: "user logined",
      }),
    });
  };

  useEffect(() => {
    console.log("called", isAuth);
    if (isAuth) {
      history.push("/home");
    }
    // eslint-disable-next-line
  }, [isAuth]);
  console.log("render", isAuth);

  return (
    <div>
      <Grid container spacing={1} direction="column">
        <Grid item>
          <LoginForm data={data ?? {}} onChange={setData} type="state" />
        </Grid>
        <Grid item>
          <Button onClick={handleSubmit} variant="outlined" fullWidth>
            log in
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
