import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import Typography from "@mui/material/Typography";
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: "Fluoride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero accusamus esse fugit. Eum maxime non quae dolores nulla repellendus deserunt.",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero accusamus esse fugit. Eum maxime non quae dolores nulla repellendus deserunt.",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero accusamus esse fugit. Eum maxime non quae dolores nulla repellendus deserunt.",
        img: whitening
    },
]
const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ fontWeight: 500, color: 'info.light', mt: 6 }} variant="h5" component="div">
          OUR SERVICES
        </Typography>
      <Typography sx={{ fontWeight: 500, m: 3 }} variant="h3" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service key={service.name} service={service} /> 
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
