import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AppoinmentModal from "../AppoinmentModal/AppoinmentModal";

const SingleAppoinment = (props) => {
  const { name, time, spaces } = props.appoinment;
  const setBookingSuccess = props.setBookingSuccess;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4} sx={{ py: 2 }}>
        <Paper elevation={2} sx={{ py: 5 }}>
          <Typography variant="h5" sx={{ color: "info.main" }}>
            {name}
          </Typography>
          <Typography variant="h6" sx={{ color: "info.secondary" }}>
            {time}
          </Typography>
          <Typography variant="inherit" sx={{ color: "info.secondary" }}>
            {spaces}
          </Typography>
          <Button onClick={handleOpen} sx={{ my: 2 }} variant="contained">
            BOOK APPOINMENT
          </Button>
        </Paper>
      </Grid>

      <AppoinmentModal open={open} setBookingSuccess={setBookingSuccess} handleClose={handleClose} appoinment={props.appoinment} date={ props.date}></AppoinmentModal>
    </>
  );
};

export default SingleAppoinment;
