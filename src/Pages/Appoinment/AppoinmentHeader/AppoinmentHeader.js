import { Container, Grid } from "@mui/material";
import React from "react";
import chair from '../../../images/chair.png'
import Calendar from "../../Shared/Calender/Calendar"

const AppoinmentHeader = ({date, setDate}) => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
            <Calendar date={date} setDate={setDate}></Calendar>
        </Grid>
        <Grid item xs={12} md={6}>
            <img src={chair} style={{ width: '100%' }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppoinmentHeader;
