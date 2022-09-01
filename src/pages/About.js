import React from 'react';
import { Box, Typography, Avatar, Stack, Grid } from '@mui/material';
import { PhoneIphone, Email, CalendarMonth } from '@mui/icons-material';
import { IoLocationSharp } from 'react-icons/io5';

import { about, icon, icon1, icon2, icon3, icon4, icon5 } from '../assets';
import { Footer } from '../components';

const infoList = [
  { title: 'Phone', subtitle: '123 456 7890', icon: <PhoneIphone /> },
  { title: 'Location', subtitle: 'Hong kong china', icon: <IoLocationSharp /> },
  { title: 'Email', subtitle: 'example@gmail.com', icon: <Email /> },
  { title: 'Birthday', subtitle: 'May 27, 1990', icon: <CalendarMonth /> }
];

const skillsList = [
  { title: 'Ui/Ux Design', subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.', icon: icon },
  { title: 'App Development', subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.', icon: icon1 },
  { title: 'Photography', subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.', icon: icon2 },
  { title: 'Photography', subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.', icon: icon3 },
  { title: 'Managment', subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.', icon: icon4 },
  { title: 'Web Development', subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.', icon: icon5 },
];

const About = () => {
  return (
    <Box px={10} sx={{ backgroundColor: '#87CEFA', borderRadius: 3 }}>
      <Box py={6}>
        <Typography variant='h3' componenet='h2' fontWeight={800}>
          About Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={about} alt='about' style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h4' componenet='h3' mb={1.5}>
              Who am i?
            </Typography>
            <Typography variant='body1' componenet='p' color='gray'>
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning
              complex problems into simple, beautiful and intuitive designs.
            </Typography>
            <Typography variant='body1' componenet='p' color='gray' mt={1.5}>
              My aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand
              companies.
            </Typography>
            <Typography variant='h4' componenet='h3' my={3}>
              Personal Info
            </Typography>
            <Grid container spacing={2}>
              {infoList.map(({ title, subtitle, icon }, i) => (
                <Grid key={i} item xs={6}>
                  <Stack direction='row'>
                    <Avatar
                      variant='rounded'
                      sx={{ marginRight: 1, backgroundColor: 'black' }}>
                      {icon}
                    </Avatar>
                    <Box>
                      <Typography variant='body2' component='h4' color='gray'>
                        {title}
                      </Typography>
                      <Typography>{subtitle}</Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box pb={6}>
        <Typography variant='h3' componenet='h3' pb={3}>
          What I do!
        </Typography>
        <Grid container spacing={2}>
          {skillsList.map(({ title, subtitle, icon }, i) => (
            <Grid item key={i} xs={4}>
            <Stack
              direction='row'
              gap={2}
              sx={{
                backgroundColor: '#FBF4FE',
                padding: 3,
                borderRadius: 2
              }}>
              <Box>
                <img src={icon} alt='' />
              </Box>
              <Box>
                <Typography variant='h5' component='h4' fontWeight='800'>
                  {title}
                </Typography>
                <Typography component='p'>
                  {subtitle}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          ))}
        </Grid>
      </Box>
      <Box textAlign='center' p={5} sx={{ border: 1 }}>
        <Typography variant='h5' component='h3' fontWeight='800'>
          Clients
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
