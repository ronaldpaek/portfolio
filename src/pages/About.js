import React from 'react';
import { Box, Typography, Avatar, Stack, Grid } from '@mui/material';
import { PhoneIphone, Email, CalendarMonth } from '@mui/icons-material';
import { IoLocationSharp } from 'react-icons/io5';
import about from '../assets/about.jpeg';
import icon from '../assets/icon.svg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';
import Footer from '../components/Footer';

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
              <Grid item xs={6}>
                <Stack direction='row'>
                  <Avatar
                    variant='rounded'
                    sx={{ marginRight: 1, backgroundColor: 'black' }}>
                    <PhoneIphone />
                  </Avatar>
                  <Box>
                    <Typography variant='body2' component='h4' color='gray'>
                      Phone
                    </Typography>
                    <Typography>+123 456 7890</Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction='row'>
                  <Avatar
                    variant='rounded'
                    sx={{ marginRight: 1, backgroundColor: 'black' }}>
                    <IoLocationSharp />
                  </Avatar>
                  <Box>
                    <Typography variant='body2' component='h4' color='gray'>
                      Location
                    </Typography>
                    <Typography>Hong kong china</Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction='row'>
                  <Avatar
                    variant='rounded'
                    sx={{ marginRight: 1, backgroundColor: 'black' }}>
                    <Email />
                  </Avatar>
                  <Box>
                    <Typography variant='body2' component='h4' color='gray'>
                      Email
                    </Typography>
                    <Typography>example@mail.com</Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction='row'>
                  <Avatar
                    variant='rounded'
                    sx={{ marginRight: 1, backgroundColor: 'black' }}>
                    <CalendarMonth />
                  </Avatar>
                  <Box>
                    <Typography variant='body2' component='h4' color='gray'>
                      Birthday
                    </Typography>
                    <Typography>May 27, 1990</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box pb={6}>
        <Typography variant='h3' componenet='h3' pb={3}>
          What I do!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack
              direction='row'
              gap={2}
              sx={{
                backgroundColor: '#FBF4FE',
                padding: 3,
                borderRadius: 2
              }}>
              <Avatar src={icon} alt='image1' variant='square' />
              <Box>
                <Typography variant='h5' component='h4' fontWeight='800'>
                  Ui/Ux Design
                </Typography>
                <Typography component='p'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction='row'
              gap={2}
              sx={{
                backgroundColor: '#FBF4FE',
                padding: 3,
                borderRadius: 2
              }}>
              <Avatar src={icon1} alt='image1' variant='square' />
              <Box>
                <Typography variant='h5' component='h4' fontWeight='800'>
                  App Development
                </Typography>
                <Typography component='p'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction='row'
              gap={2}
              sx={{
                backgroundColor: '#FBF4FE',
                padding: 3,
                borderRadius: 2
              }}>
              <Avatar src={icon2} alt='image1' variant='square' />
              <Box>
                <Typography variant='h5' component='h4' fontWeight='800'>
                  Photography
                </Typography>
                <Typography component='p'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction='row'
              gap={2}
              sx={{
                backgroundColor: '#FBF4FE',
                padding: 3,
                borderRadius: 2
              }}>
              <Avatar src={icon3} alt='image1' variant='square' />
              <Box>
                <Typography variant='h5' component='h4' fontWeight='800'>
                  Photography
                </Typography>
                <Typography component='p'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction='row'
              gap={2}
              sx={{
                backgroundColor: '#FBF4FE',
                padding: 3,
                borderRadius: 2
              }}>
              <Avatar src={icon4} alt='image1' variant='square' />
              <Box>
                <Typography variant='h5' component='h4' fontWeight='800'>
                  Management
                </Typography>
                <Typography component='p'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction='row'
              gap={2}
              sx={{
                backgroundColor: '#FBF4FE',
                padding: 3,
                borderRadius: 2
              }}>
              <Avatar src={icon5} alt='image1' variant='square' />
              <Box>
                <Typography variant='h5' component='h4' fontWeight='800'>
                  Web Development
                </Typography>
                <Typography component='p'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box textAlign='center' p={5} sx={{border: 1}}>
        <Typography variant='h5' component='h3' fontWeight='800'>Clients</Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
