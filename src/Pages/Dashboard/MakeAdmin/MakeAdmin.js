import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://evening-temple-55620.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          setSuccess(true);
        }
      });
  };
  return (
    <div>
      <h2>Make admin</h2>
      {success && (
        <Alert sx={{ width: "50%", m: "auto" }} severity="success">
          Made Admin Succesfully
        </Alert>
      )}
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          type="email"
          label="Email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Add Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
