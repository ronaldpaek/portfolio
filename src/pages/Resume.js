import React from 'react';
import { Box, Typography, Grid, Stack, LinearProgress } from '@mui/material';
import { School, BusinessCenter, WorkspacePremium } from '@mui/icons-material';

import Footer from '../components/Footer';

const resumeList = [
  {
    topic: 'Education',
    Icon: School,
    list: [
      {
        date: '2021-2023',
        title: 'Ph.D in Horribleness',
        subtitle: 'ABC University, Los Angeles, CA'
      },
      {
        date: '2019 - Present',
        title: 'Sr. Software Tester',
        subtitle: 'Google Inc.'
      },
      {
        date: '2021',
        title: 'Best Developer',
        subtitle: 'University Of Melbourne, NA'
      }
    ]
  },
  {
    topic: 'Experience',
    Icon: BusinessCenter,
    list: [
      {
        date: '2017-2021',
        title: 'Computer Science',
        subtitle: 'Imperialize Technical Institute'
      },
      {
        date: '2015-2017',
        title: 'Cr. Web Developer',
        subtitle: 'ib-themes ltd.'
      },
      {
        date: '2008',
        title: 'Best Writter',
        subtitle: 'Online Typodev Soluation Ltd.'
      }
    ]
  },
  {
    topic: 'Awards',
    Icon: WorkspacePremium,
    list: [
      {
        date: '2015-2017',
        title: 'Graphic Designer',
        subtitle: 'Web Graphy, Los Angeles, CA'
      },
      {
        date: '2014 - 2015',
        title: 'Jr. Web Developer',
        subtitle: 'Creative Gigs.'
      },
      {
        date: '2015-2017',
        title: 'Best Freelancer',
        subtitle: 'Fiver & Upwork Level 2 & Top Rated'
      }
    ]
  }
];

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
            {resumeList.map(({ topic, Icon, list }, _) => (
              <Grid key={topic} item xs={4}>
                <Stack spacing={2}>
                  <Stack direction='row'>
                    <Icon sx={{ fontSize: 35, marginRight: 1 }} />
                    <Typography variant='h4' componenet='h3'>
                      {topic}
                    </Typography>
                  </Stack>
                  {list.map(({ date, title, subtitle }, i) => (
                    <Stack key={i} spacing={1} p={2}  sx={{backgroundColor: '#5F9EA0', borderRadius: 2}}>
                      <Typography color='gray'>{date}</Typography>
                      <Typography>{title}</Typography>
                      <Typography>{subtitle}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            ))}
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
      <Footer backgroundColor='#87CEFA'/>
    </>
  );
};

export default Resume;
