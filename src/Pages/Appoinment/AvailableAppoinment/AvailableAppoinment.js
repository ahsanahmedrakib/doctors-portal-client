import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import SingleAppoinment from "../SingleAppoinment/SingleAppoinment";

const AvailableAppoinment = ({ date }) => {

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const AvailableAppoinments = [
    {
      name: "Teeth Orthodontcis",
      time: "8:00 AM - 9:00 AM",
      spaces: "10 SPACES AVAILABLE",
    },
    {
      name: "Cosmetic Density",
      time: "8:00 AM - 9:00 AM",
      spaces: "10 SPACES AVAILABLE",
    },
    {
      name: "Teeth Cleaning",
      time: "8:00 AM - 9:00 AM",
      spaces: "10 SPACES AVAILABLE",
    },
    {
      name: "Cavity Protection",
      time: "8:00 AM - 9:00 AM",
      spaces: "10 SPACES AVAILABLE",
    },
    {
      name: "Teeth Orthodontcis",
      time: "8:00 AM - 9:00 AM",
      spaces: "10 SPACES AVAILABLE",
    },
    {
      name: "Teeth Orthodontcis",
      time: "8:00 AM - 9:00 AM",
      spaces: "10 SPACES AVAILABLE",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", my: 5 }}>
        Available Appoinments on {date.toDateString()}
      </Typography>
      {bookingSuccess && <Alert severity="success">Appointments Booking Succesfully</Alert>}
      <Grid container spacing={2}>
        {AvailableAppoinments.map((appoinment) => (
          <SingleAppoinment setBookingSuccess={setBookingSuccess} key={appoinment.name} appoinment={appoinment} date={date} ></SingleAppoinment>
        ))}
      </Grid>

    </Container>
  );
};

export default AvailableAppoinment;
