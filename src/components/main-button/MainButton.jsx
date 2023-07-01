import React from "react";

import { Button } from "@mui/material";

const MainButton = ({ iconImg, text }) => {
  return <Button variant='contained' sx={{
    width: {
      xs: '100%',
      md: 'auto'
    },
    backgroundColor: '#7b61ff',
    p: {
      xs: 1.5,
      md: 3
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '12px',
    fontFamily: 'inherit',
    fontSize: '18px',
    fontWeight: '600',
    '&:hover' : {
      backgroundColor: '#7b61ff'
    }
  }}>
    <img src={iconImg} />
    {text}
  </Button>;
};

export default MainButton;
