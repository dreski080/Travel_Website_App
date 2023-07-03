import React from "react";

import { Box, Container, Typography } from "@mui/material";

import SecondaryButton from "../secondary-button/SecondaryButton";
import aboutUsImg from "../../assets/main/about-us-img.svg";

const AboutUs = () => {
  return <Container disableGutters maxWidth='xl' sx={{
    px: {
      xs: 2,
      sm: 5,
     md: 10
    },
    my: 15
  }}>
    <Box sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row'
      },
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4
    }}>
      <Box sx={{flex: 1}}>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontWeight: '600',
          fontSize: '32px',
          lineHeight: '48px',
          color: '#161414',
          textAlign: {
            xs: 'center',
            md: 'left'
          }
        }}>About Us</Typography>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '32px',
          color: '#5b5b5b',
          my: 4
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ullamcorper libero, sed consectetur ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed maximus tempus libero, vel pellentesque urna mollis sed.</Typography>
        <SecondaryButton text='Read more' />
      </Box>

      <Box sx={{flex: 1}}>
        <img src={aboutUsImg} style={{
          borderRadius: '24px',
          maxWidth: '100%'
        }} />
      </Box>
    </Box>
  </Container>;
};

export default AboutUs;
