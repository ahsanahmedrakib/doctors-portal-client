import {
  TextField,
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import login from "../../../images/login.png";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, error, loading, loginWithEmail, googleSignIn } = useAuth();

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
    loginWithEmail(loginData.email, loginData.password, location, history);
  };

  const handleGoogleSignIn = () => {
    googleSignIn(location, history);
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1">Login</Typography>
          {error && <Alert severity="error">{error.slice(16,90)}</Alert>}
          {user?.email && <Alert severity="success">Login Succesfull</Alert>}
          <form onSubmit={handleSubmit}>
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
            <Button
              sx={{ width: "75%", my: 1 }}
              type="submit"
              variant="contained"
            >
              Sign in
            </Button>
            <p>Or</p>
            <Button
              sx={{ width: "75%", my: 1 }}
              type="submit"
              variant="contained"
              onClick={handleGoogleSignIn}
            >
              Sign in With Google
            </Button>
            <NavLink to="/register">
              <Button variant="text">New User? Register Here</Button>
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

export default Login;
