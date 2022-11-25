import React, { useState } from "react";

import { Container, Typography } from "@mui/material";

import { Box, FormControl, InputLabel, Input, Grid } from "@mui/material/";
import { get } from "../../service/service";

const Login = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    console.log(datos);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datos);
    const response = await get("users/login", datos);
    console.log(response);
  };
  return (
    <Container>
      <Typography
        variant="body1"
        sx={{
          color: "var(--dark-gray)",
          fontSize: "2rem",
          marginTop: 0,
          marginBottom: "2rem",
        }}
      >
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input
                  id="my-input"
                  name="email"
                  aria-describedby="my-helper-text"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input
                  id="my-input"
                  name="password"
                  aria-describedby="my-helper-text"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <button type="submit">send</button>
          </Grid>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
