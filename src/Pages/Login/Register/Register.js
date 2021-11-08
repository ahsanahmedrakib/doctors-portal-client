import { TextField, Container, Grid, Typography, Button, Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, error, registerUser, loading } = useAuth(); 

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert("Password did not matched")
      return;
    }
    registerUser(loginData.name, loginData.email, loginData.password, history)
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1">Register</Typography>
          {error && <Alert severity="error">{error.slice(16,90)}</Alert>}
          {user?.email && <Alert severity="success">Succesfully Registered</Alert>}
         <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "75%", my: 1 }}
              id="standard-basic"
              label="Name"
              variant="standard"
              name="name"
              onChange={handleOnChange}
            />
            <TextField
              sx={{ width: "75%", my: 1 }}
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              onChange={handleOnChange}
            />
            <TextField
              sx={{ width: "75%", my: 1 }}
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              name="password"
              onChange={handleOnChange}
            />
            <TextField
              sx={{ width: "75%", my: 1 }}
              id="standard-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              name="password2"
              onChange={handleOnChange}
            />
            <Button
              sx={{ width: "75%", my: 1 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <NavLink to="/login">
              <Button variant="text">Already Register? Please Login</Button>
            </NavLink>
          </form> 
          {loading && <CircularProgress color="success" />}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
