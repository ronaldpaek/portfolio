import React from 'react';
import { Box, Typography } from '@mui/material';

const PortfolioCard = ({
  image,
  title,
  subtitle,
  color,
  i,
  handleRenderCard
}) => {
  return (
    <Box p={3} sx={{ backgroundColor: color, borderRadius: 4 }}>
      <img
        src={image}
        alt=''
        style={{ borderRadius: 8, display: 'block', width: '100%' }}
        onClick={() => handleRenderCard(i)}
      />
      <Typography variant='body1' component='h3' pt={2.5}>
        {title}
      </Typography>
      <Typography
        variant='h5'
        component='h4'
        fontWeight='700'
        mt={1}
        onClick={() => handleRenderCard(i)}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PortfolioCard;