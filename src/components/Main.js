import React from 'react';
import { Stack, Avatar, Typography, Button } from '@mui/material';
import { Twitter, LinkedIn, Download } from '@mui/icons-material';
import { FaFacebookF, FaBasketballBall } from 'react-icons/fa';
import avatar from '../assets/avatar.jpeg';

const Main = () => {
  return (
    <Stack spacing={2} paddingBlock={5} alignItems='center' component='main'>
      <Avatar alt='avatar' src={avatar} sx={{ width: 300, height: 300 }} />
      <Typography variant='h4' component='h1' fontWeight={800}>
        Monalisa Ashley
      </Typography>
      <Typography variant='body1' component='h1' color='gray'>
        Ui/Ux Designer
      </Typography>
      <Stack direction='row' spacing={1}>
        <Button variant='contained' color='secondary'>
          <FaFacebookF />
        </Button>
        <Button variant='contained' color='secondary'>
          <Twitter />
        </Button>
        <Button variant='contained' color='secondary'>
          <FaBasketballBall />
        </Button>
        <Button variant='contained' color='secondary'>
          <LinkedIn />
        </Button>
      </Stack>
      <Button variant='contained' sx={{borderRadius: 100, paddingBlock: 1.5, paddingInline: 4}} startIcon={<Download />}>Download CV</Button>
    </Stack>
  );
};

export default Main;
