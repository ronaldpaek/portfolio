import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Button } from '@mui/material';
import { Home, Person, Description, BusinessCenter, DarkMode } from '@mui/icons-material';
import { FaBlogger } from "react-icons/fa";
import { RiContactsBookFill } from 'react-icons/ri';
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <Stack component='header' direction='row' justifyContent='space-between' paddingBlock={5}>
      <Box>
        <img src={logo} alt='logo' />
      </Box>
      <Stack direction='row' spacing={2} component='nav'>
        <Link to='/' style={{textDecoration: 'none'}}><Button variant='contained' startIcon={<Home />} sx={{bgcolor: 'black'}}>Home</Button></Link>
        <Link to='/about' style={{textDecoration: 'none'}}><Button variant='contained' startIcon={<Person />}>About</Button></Link>
        <Button variant='contained' startIcon={<Description />}>Resume</Button>
        <Button variant='contained' startIcon={<BusinessCenter />}>Works</Button>
        <Button variant='contained' startIcon={<FaBlogger />}>Blogs</Button>
        <Button variant='contained' startIcon={<RiContactsBookFill />}>Contact</Button>
        <Button variant='contained' sx={{borderRadius: 100, minWidth: 40, padding: 0}}>
          <DarkMode />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
