import React from "react";

import { Box, Typography } from "@mui/material";

const DestionationItem = ({ name, location, image }) => {
  return <Box sx={{
    width: {
      xs: '70vh',
      sm: '60vh',
      md: 'auto'
    }
  }}>
    <img src={image} alt='' style={{ width: '100%', objectFit: 'cover', cursor: 'pointer'}} />
    <Typography sx={{
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: '16px',
      color: '#161414'
    }}>
      {name}
    </Typography>

    <Typography sx={{
      fontFamily: 'Poppins',
      fontWeight: '300',
      fontSize: '13px',
      color: '#979797'
    }}>
      {location}
    </Typography>
  </Box>;
};

export default DestionationItem;
