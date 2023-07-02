import React from "react";

import { Button } from "@mui/material";

import btnArrowIcon from "../../assets/main/btn-arrow-icon.svg";

const SecondaryButton = ({ text }) => {
  return <Button variant='contained' sx={{
    width: {
      xs: '100%',
      md: 'auto'
    },
    backgroundColor: '#f6f4ff',
    textTransform: 'none',
    p: 1.25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0.5,
    borderRadius: '12px',
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: '16px',
    color: '#5243c2',
    '&:hover' : {
      backgroundColor: '#f6f4ff'
    }
  }}>
    {text}
    <img src={btnArrowIcon} />
  </Button>;
};

export default SecondaryButton;
