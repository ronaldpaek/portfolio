import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Masonry } from '@mui/lab';

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
} from '../assets';
import { Footer } from '../components';

const navList = ['All', 'Video', 'Web Design', 'Logo', 'Graphic Design'];

const itemData = [
  { image: image1, title: 'UI/UX', subtitle: 'Chul urina', color: '#FFF0F0' },
  { image: image2, title: 'Logo', subtitle: 'Chul urina', color: '#FFF3FC' },
  {
    image: image3,
    title: 'Ui/UX',
    subtitle: 'T-Shirt Design',
    color: '#FFF3FC'
  },
  {
    image: image4,
    title: 'UI/UX',
    subtitle: 'Packaging Box',
    color: '#E9FAFF'
  },
  {
    image: image5,
    title: 'Video',
    subtitle: 'Modern Bag Design',
    color: '#F4F4FF'
  },
  {
    image: image6,
    title: 'Web Desgin',
    subtitle: 'Aura Dione',
    color: '#FFFAE9'
  },
  { image: image7, title: 'Video', subtitle: 'Chul urina', color: '#F4F4FF' },
  {
    image: image8,
    title: 'Web Design',
    subtitle: 'Aura Dione',
    color: '#FFF0F8'
  },
  { image: image9, title: 'Video', subtitle: 'Chul urina', color: '#F4F4FF' }
];

const Portfolio = () => {
  return (
    <Box component='section' sx={{ backgroundColor: 'palegoldenrod', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
      <Box px={8}>
        <Box py={6}>
          <Typography variant='h3' component='h2' fontWeight='800'>
            Portfolio
          </Typography>
          <Stack
            direction='row'
            component='ul'
            justifyContent='flex-end'
            p={0}
            mt={3.5}
            mb={0}>
            {navList.map((item, i) => (
              <Box key={i} component='li' fontWeight='700' color='gray' mx={2} sx={{ listStyle: 'none' }}>
                {item}
              </Box>
            ))}
          </Stack>
        </Box>
        <Masonry columns={3} spacing={2}>
          {itemData.map(({ image, title, subtitle, color }, i) => (
            <Box key={i} p={3} sx={{ backgroundColor: color, borderRadius: 4 }}>
              <img
                src={image}
                alt=''
                style={{ borderRadius: 8, display: 'block', width: '100%' }}
              />
              <Typography variant='body1' component='h3' pt={2.5}>
                {title}
              </Typography>
              <Typography variant='h5' component='h4' fontWeight='700' mt={1}>
                {subtitle}
              </Typography>
            </Box>
          ))}
        </Masonry>
      </Box>
      <Footer backgroundColor='white' borderRadius={15} />
    </Box>
  );
};

export default Portfolio;
