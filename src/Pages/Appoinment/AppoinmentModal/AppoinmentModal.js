import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AppoinmentModal = ({
  open,
  handleClose,
  appoinment,
  date,
  setBookingSuccess,
}) => {
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const appointment = {
      ...bookingInfo,
      time: appoinment.time,
      serviceName: appoinment.name,
      date: date.toLocaleDateString(),
    };
    fetch("https://evening-temple-55620.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleClose();
        }
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {appoinment.name}
        </Typography>
        <form onSubmit={handleBooking}>
          <TextField
            label="Time"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={appoinment.time}
            size="small"
            disabled
          />
          <TextField
            label="Your name"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="patientName"
            onBlur={handleOnBlur}
            defaultValue={user.displayName}
            size="small"
          />
          <TextField
            label="Your email"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="email"
            onBlur={handleOnBlur}
            defaultValue={user.email}
            size="small"
          />
          <TextField
            label="Your phone"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            name="phone"
            onBlur={handleOnBlur}
            defaultValue=""
            size="small"
          />
          <TextField
            label="Appoinment Date"
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
            disabled
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AppoinmentModal;
