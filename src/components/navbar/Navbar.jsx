import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Box, Drawer, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/main/logo.svg";
import userAvatar from "../../assets/main/user-avatar.svg";
import { navItems } from "../../data.js";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)

  return <AppBar position='static' elevation={0} color='transparent'>
    <Container maxWidth='xl' sx={{ px: 10, pt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }} disableGutters>
      <img src={logo} alt='logo' style={{cursor: 'pointer'}} />
      <Box sx={{
        display: {
          xs: 'none',
          lg: 'flex'
        },
        alignItems: 'center',
        gap: '54px'
      }}>
        {
          navItems.map(item => (
            <Link href='#' key={item.id} underline="none" color='#fff'
            sx={{
              fontWeight: '300',
              fontSize: '14px',
              opacity: 0.7,
              '&:hover': {
                opacity: 1
              },
              '&:first-of-type': {
                opacity: 1
              }
            }}>
            {item.name}
            </Link>
          ))
        }
      </Box>

      <Box sx={{
        display: {
          xs: 'none',
          lg: 'flex'
        },
        alignItems: 'center',
        gap: '8px'
      }}>
        <Box>
          <Typography sx={{fontWeight: '400', fontSize: '12px', lineHeight: '21px', color: '#fff', opacity: 0.5}}>Holla</Typography>
          <Typography sx={{fontWeight: '400', fontSize: '12px', lineHeight: '21px', color: '#fff'}}>Reski Damayanti</Typography>
        </Box>

        <img src={userAvatar} alt='avatar' style={{cursor: 'pointer'}} />
      </Box>

      <MenuIcon sx={{
        display: {
          xs: 'block',
          lg: 'none'
        },
        cursor: 'pointer',
        color: '#fff'
      }} onClick={() => setOpenModal(true)} />

      <Drawer anchor='left' open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{
          position: 'relative',
          width: 250,
          backgroundColor: '#5243c2',
          height: '100%',
          py: 3,
          px: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5
        }}
        role='presentation'
        onClick={() => setOpenModal(false)}
        onKeyDown={() => setOpenModal(false)}
        >
          <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <Box>
          <Typography sx={{fontWeight: '400', fontSize: '12px', lineHeight: '21px', color: '#fff', opacity: 0.5}}>Holla</Typography>
          <Typography sx={{fontWeight: '400', fontSize: '12px', lineHeight: '21px', color: '#fff'}}>Reski Damayanti</Typography>
        </Box>

        <img src={userAvatar} alt='avatar' style={{cursor: 'pointer'}} />
      </Box>

      <Box sx={{
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3
      }}>
        {
          navItems.map(item => (
            <Link href='#' key={item.id} underline="none" color='#fff'
            sx={{
              fontWeight: '300',
              fontSize: '14px',
              opacity: 0.7,
              '&:hover': {
                opacity: 1
              },
              '&:first-of-type': {
                opacity: 1
              }
            }}>
            {item.name}
            </Link>
          ))
        }
      </Box>
      <Typography sx={{color: '#fff', fontWeight: '500', cursor: 'pointer', position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)' }}>
        &#169; 2rism
      </Typography>
        </Box>
      </Drawer>
    </Container>
  </AppBar>;
};
export default Navbar;
