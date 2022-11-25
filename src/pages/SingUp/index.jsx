import React, { useState } from "react";

import { Container, Typography } from "@mui/material";

import { Box, FormControl, InputLabel, Input, Grid } from "@mui/material/";
import { post } from "../../service/service";
const SingUp = () => {
  const [datos, setDatos] = useState({
    name: "",
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
    const response = await post("users/signup", datos);
    console.log(response);
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "var(--dark-gray)",
          fontSize: "2rem",
          marginTop: 0,
          marginBottom: "2rem",
        }}
      >
        SingUp
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <FormControl>
                <InputLabel htmlFor="my-input-name">Name</InputLabel>
                <Input
                  id="my-input-name"
                  name="name"
                  fullWidth
                  aria-describedby="my-helper-text"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <FormControl>
                <InputLabel htmlFor="my-input-email">Email</InputLabel>
                <Input
                  id="my-input-email"
                  name="email"
                  fullWidth
                  aria-describedby="my-helper-text"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <FormControl>
                <InputLabel htmlFor="my-input-password">Password</InputLabel>
                <Input
                  id="my-input-password"
                  name="password"
                  fullWidth
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

export default SingUp;
