import React, { useState } from "react";

import { FormControl, InputLabel, Input, Grid } from "@mui/material/";
const Formulario = () => {
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

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
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
        <Grid item xs={8}>
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
      </Grid>
    </div>
  );
};

export default Formulario;
