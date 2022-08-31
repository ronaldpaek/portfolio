import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Button } from '@mui/material';
import {
  Home,
  Person,
  Description,
  BusinessCenter,
  DarkMode
} from '@mui/icons-material';
import { FaBlogger } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';

import { logo } from '../assets';

const navList = [
  { name: 'Home', to: '/', startIcon: <Home /> },
  { name: 'About', to: '/about', startIcon: <Person /> },
  { name: 'Resume', to: '/resume', startIcon: <Description /> },
  { name: 'Works', to: '/works', startIcon: <BusinessCenter /> },
  { name: 'Blogs', to: '/blogs', startIcon: <FaBlogger /> },
  { name: 'Contact', to: '/contact', startIcon: <RiContactsBookFill /> }
];

const Header = () => {
  return (
    <Stack
      component='header'
      direction='row'
      justifyContent='space-between'
      paddingBlock={5}>
      <Box>
        <img src={logo} alt='logo' />
      </Box>
      <Stack direction='row' spacing={2} component='nav'>
        {navList.map(({ name, to, startIcon }, i) => (
          <Link key={i} to={to} style={{ textDecoration: 'none' }}>
            <Button variant='contained' startIcon={startIcon}>
              {name}
            </Button>
          </Link>
        ))}
        <Button
          variant='contained'
          sx={{ borderRadius: 100, minWidth: 40, padding: 0 }}>
          <DarkMode />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
