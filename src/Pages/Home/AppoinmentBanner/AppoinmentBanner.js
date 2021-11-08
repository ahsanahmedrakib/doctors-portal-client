import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import appBg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appoinmentBg = {
  background: `url(${appBg})`,
  backgroundColor: "rgba(45, 58, 74, 0.9",
  backgroundBlendMode: "darken, luminosity",
  marginTop: "150px",
  height: 485
};

const AppoinmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={appoinmentBg}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <img
            src={doctor}
            alt=""
            style={{ width:'110%', marginTop: "-139px" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            textAlign: "left",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "info.light" }}>
              APPOINMENT
            </Typography>
            <Typography variant="h3" style={{ color: "white" }} sx={{ my: 3 }}>
              Make an appoinment <br /> Today
            </Typography>
            <Typography variant="inherit" style={{ color: "#bdbdbd" }} sx={{ my: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius
              inventore quam debitis a possimus reprehenderit aut, animi eaque
              minima!
            </Typography>
            <Button variant="contained" sx={{ py: 1, px: 3, mt: 5, backgroundColor: '#0FCFE6' }}>Learn more</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;
