import React, { useState } from "react";

import { Container, Typography } from "@mui/material";

import {
  TextField,
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  Grid,
} from "@mui/material/";
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
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          color: "var(--dark-gray)",
          fontSize: "4rem",
        }}
      >
        Login
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            minWidth: "50%",
            maxWidth: "60%",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Email"
              name="email"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Password"
              name="password"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            <Button type="submit" variant="contained" disableElevation>
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
