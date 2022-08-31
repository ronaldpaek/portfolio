import React from 'react';
import { Box, Typography, Grid, Stack, LinearProgress } from '@mui/material';
import { FaGraduationCap } from 'react-icons/fa';
import { School } from '@mui/icons-material';
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <>
      <Box
        componenet='section'
        px={10}
        sx={{
          backgroundColor: '#87CEFA',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}>
        <Box py={6} px={2}>
          <Typography variant='h3' componenet='h2' fontWeight={800} mb={5}>
            Resume
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Stack direction='row'>
                  <School sx={{ fontSize: 35, marginRight: 1 }} />
                  <Typography variant='h4' componenet='h3'>
                    Education
                  </Typography>
                </Stack>
                <Stack spacing={1} p={2} backgroundColor='#5F9EA0'>
                  <Typography color='gray'>2021-2023</Typography>
                  <Typography>Ph.D in Horriblensess</Typography>
                  <Typography>ABC University, Los Angeles, CA</Typography>
                </Stack>
                <Stack spacing={1} p={2} backgroundColor='#5F9EA0'>
                  <Typography color='gray'>2021-2023</Typography>
                  <Typography>Ph.D in Horriblensess</Typography>
                  <Typography>ABC University, Los Angeles, CA</Typography>
                </Stack>
                <Stack spacing={1} p={2} backgroundColor='#5F9EA0'>
                  <Typography color='gray'>2021-2023</Typography>
                  <Typography>Ph.D in Horriblensess</Typography>
                  <Typography>ABC University, Los Angeles, CA</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Stack direction='row'>
                  <School sx={{ fontSize: 35, marginRight: 1 }} />
                  <Typography variant='h4' componenet='h3'>
                    Education
                  </Typography>
                </Stack>
                <Stack spacing={1} p={2} backgroundColor='#5F9EA0'>
                  <Typography color='gray'>2021-2023</Typography>
                  <Typography>Ph.D in Horriblensess</Typography>
                  <Typography>ABC University, Los Angeles, CA</Typography>
                </Stack>
                <Stack spacing={1} p={2} backgroundColor='#5F9EA0'>
                  <Typography color='gray'>2021-2023</Typography>
                  <Typography>Ph.D in Horriblensess</Typography>
                  <Typography>ABC University, Los Angeles, CA</Typography>
                </Stack>
                <Stack spacing={1} p={2} backgroundColor='#5F9EA0'>
                  <Typography color='gray'>2021-2023</Typography>
                  <Typography>Ph.D in Horriblensess</Typography>
                  <Typography>ABC University, Los Angeles, CA</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Stack direction='row'>
                  <School sx={{ fontSize: 35, marginRight: 1 }} />
                  <Typography variant='h4' componenet='h3'>
                    Education
                  </Typography>
                </Stack>
                <Stack spacing={1} p={2} backgroundColor='#5F9EA0'>
                  <Typography color='gray'>2021-2023</Typography>
                  <Typography>Ph.D in Horriblensess</Typography>
                  <Typography>ABC University, Los Angeles, CA</Typography>
                </Stack>
                <Stack spacing={1} p={2} backgroundColor='#5F9EA0'>
                  <Typography color='gray'>2021-2023</Typography>
                  <Typography>Ph.D in Horriblensess</Typography>
                  <Typography>ABC University, Los Angeles, CA</Typography>
                </Stack>
                <Stack spacing={1} p={2} backgroundColor='#5F9EA0'>
                  <Typography color='gray'>2021-2023</Typography>
                  <Typography>Ph.D in Horriblensess</Typography>
                  <Typography>ABC University, Los Angeles, CA</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box backgroundColor='salmon' py={6}>
        <Box px={10}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant='h4' componenet='h3' marginBottom={3}>
                Working Skills
              </Typography>
              <Stack spacing={2.5}>
                <Box>
                  <Stack direction='row' justifyContent='space-between'>
                    <Typography>Web Design</Typography>
                    <Typography>65%</Typography>
                  </Stack>
                  <LinearProgress
                    variant='determinate'
                    color='warning'
                    value={65}
                  />
                </Box>
                <Box>
                  <Stack direction='row' justifyContent='space-between'>
                    <Typography>Mobile App</Typography>
                    <Typography>85%</Typography>
                  </Stack>
                  <LinearProgress
                    variant='determinate'
                    color='secondary'
                    value={85}
                  />
                </Box>
                <Box>
                  <Stack direction='row' justifyContent='space-between'>
                    <Typography>Illustrator</Typography>
                    <Typography>75%</Typography>
                  </Stack>
                  <LinearProgress
                    variant='determinate'
                    color='primary'
                    value={75}
                  />
                </Box>
                <Box>
                  <Stack direction='row' justifyContent='space-between'>
                    <Typography>Photoshope</Typography>
                    <Typography>90%</Typography>
                  </Stack>
                  <LinearProgress
                    variant='determinate'
                    color='success'
                    value={90}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h4' componenet='h3' marginBottom={4}>
                Knowledges
              </Typography>
              <Stack spacing={3}>
                <Stack direction='row' spacing={2}>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Digital Design
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Marketing
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Social Media
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Print
                  </Box>
                </Stack>
                <Stack direction='row' spacing={2}>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Time Management
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Flexiblity
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Print
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Print
                  </Box>
                </Stack>
                <Stack direction='row' spacing={2}>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Time Management
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Flexiblity
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: 'lightgray',
                      paddingBlock: 0.75,
                      paddingInline: 2,
                      borderRadius: 1
                    }}>
                    Print
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Resume;
