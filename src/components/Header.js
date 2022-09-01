import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Button, useMediaQuery, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Home,
  Person,
  Description,
  BusinessCenter,
  DarkMode,
  Clear
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
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
  const matches = useMediaQuery(theme => theme.breakpoints.down('lg'));
  return <>{matches ? <MobileNavBar /> : <DesktopNavBar />}</>;
};

const MobileNavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(prevToggle => !prevToggle);
  };

  return (
    <Box component='header' sx={{ backgroundColor: 'hsl(45, 29%, 90%)' }}>
      <Box px={2} direction='row'>
        <Stack
          direction='row'
          py={2.5}
          justifyContent='space-between'
          alignItems='center'>
          <Link to='/'>
            <Box
              component='img'
              src={logo}
              alt='logo'
              style={{ maxWidth: '80%' }}
            />
          </Link>
          <Stack direction='row'>
            <IconButton sx={{ bgcolor: 'white', marginLeft: 2 }}>
              <DarkMode />
            </IconButton>
            <IconButton
              sx={{ bgcolor: 'white', marginLeft: 2 }}
              onClick={handleClick}>
              {toggle ? <Clear /> : <MenuIcon />}
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      {toggle && (
        <Box
          component='nav'
          sx={{ position: 'absolute', top: 64, left: 0, right: 0 }}>
          <Stack
            component='ul'
            sx={{
              bgcolor: 'white',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              padding: 0
            }}>
            {navList.map(({ name, to, startIcon }, i) => (
              <Box
                component='li'
                key={i}
                sx={{ listStyle: 'none', paddingBlock: 1.5, paddingLeft: 2 }}>
                <Link
                  to={to}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'black'
                  }}>
                  <span style={{ fontSize: '1.25rem', marginRight: '.5rem' }}>
                    {startIcon}
                  </span>
                  {name}
                </Link>
              </Box>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

const DesktopNavBar = () => {
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
