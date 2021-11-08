import React from "react";
import chair from "../../../images/chair.png";
import chairBg from "../../../images/bg.png";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Banner = () => {
  const backgorund = {
    background: `url${chairBg}`,
  };

  const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: "600px",
  };

  return (
    <Container style={backgorund} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ ...verticalCenter, textAlign: "left" }}
        >
          <Box>
            <Typography variant="h3" style={{ fontWeight: 500 }}>
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography variant="inherit" sx={{ color: "gray", my: 5 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              dolore quisquam magni temporibus assumenda dolorem itaque dolorum
              culpa modi aut?
            </Typography>
            <Button variant="contained" sx={{ py: 1, backgroundColor: '#0FCFE6' }}>Get Appoinment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img src={chair} style={{ width: "600px" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
