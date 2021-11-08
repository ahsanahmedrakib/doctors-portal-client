import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AvailableAppoinment from "../AvailableAppoinment/AvailableAppoinment";
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader'

const Appoinment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation />
      <AppoinmentHeader date={date} setDate={setDate} />
      <AvailableAppoinment date={date} />
    </div>
  );
};

export default Appoinment;
