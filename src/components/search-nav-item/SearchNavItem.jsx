import React from "react";

import { Box, Container, Typography } from "@mui/material";

const SearchNavItem = ({ normalText, boldText, iconImg }) => {
  return <Box sx={{
    p: {
      xs: 1.5,
      md: 2
    },
    my: {
      xs: 1,
      md: 0
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  }}>
    <img src={iconImg} />
    <Box>
      <Typography sx={{
        fontFamily: 'Poppins',
        fontWeight: '300',
        fontSize: '14px',
        color: '#5b5b5b'
      }}>
        {normalText}
      </Typography>
      <Typography sx={{
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: '16px',
        color: '#161414'
      }}>
        {boldText}
      </Typography>
    </Box>
  </Box>;
};

export default SearchNavItem;
