import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = ({backgroundColor}) => {
  return (
    <Box py={3} component='footer' textAlign='center' sx={{ backgroundColor, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
      <Typography componenet='p'>
        © 2022 All Rights Reserved by ib-themes.
      </Typography>
    </Box>
  );
};

export default Footer;
