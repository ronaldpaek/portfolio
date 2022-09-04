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

const skillsList = [
	{ skill: 'WebDesign', val: 65, color: 'warning' },
	{ skill: 'Mobile App', val: 85, color: 'secondary' },
	{ skill: 'Illustrator', val: 75, color: 'primary' },
	{ skill: 'Photoshope', val: 90, color: 'success' }
];

const items = [
	'Digital Design',
	'Maarketing',
	'Social Media',
	'Print',
	'Time Management',
	'Flexiblity',
	'Print',
	'Print',
	'Time Management',
	'Flexiblity',
	'Print'
];

const Resume = () => {
	return (
		<>
			<Box
				componenet='section'
				sx={{
					backgroundColor: '#87CEFA',
					borderTopLeftRadius: {
						xs: 0,
						md: 15
					},
					borderTopRightRadius: {
						xs: 0,
						md: 20
					},
					paddingInline: {
						xs: 2.5,
						sm: 5,
						lg: 10
					}
				}}>
				<Box py={6} px={2}>
					<Typography
						variant='h3'
						componenet='h2'
						fontWeight={800}
						mb={5}
						sx={{
							display: 'inline-flex',
							alignItems: 'center',
							marginTop: {
								xs: 5,
								md: 0
							}
						}}>
						Resume
						<Box
							component='span'
							sx={{
								background:
									'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
								height: 2,
								width: '11rem',
								marginLeft: '1.5rem',
								display: {
									xs: 'none',
									sm: 'inline'
								}
							}}></Box>
					</Typography>
					<Grid container spacing={2}>
						{resumeList.map(({ topic, Icon, list }, _) => (
							<Grid key={topic} item xs={12} sm={6} lg={4}>
								<Stack spacing={3}>
									<Stack direction='row'>
										<Icon sx={{ fontSize: 35, marginRight: 1 }} />
										<Typography variant='h4' componenet='h3'>
											{topic}
										</Typography>
									</Stack>
									{list.map(({ date, title, subtitle }, i) => (
										<Stack
											key={i}
											spacing={2}
											p={2}
											sx={{ backgroundColor: '#5F9EA0', borderRadius: 2 }}>
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
				<Box
					sx={{
						paddingInline: {
							xs: 3,
							sm: 5,
							lg: 10
						}
					}}>
					<Grid
						container
						spacing={2}
						sx={{
							direction: {
								xs: 'column',
								lg: 'row'
							}
						}}>
						<Grid item xs={12} sm={6}>
							<Typography variant='h4' componenet='h3' marginBottom={3}>
								Working Skills
							</Typography>
							<Stack spacing={2.5}>
								{skillsList.map(({ skill, val, color }, i) => (
									<Box key={i}>
										<Stack direction='row' justifyContent='space-between'>
											<Typography>{skill}</Typography>
											<Typography>{val + '%'}</Typography>
										</Stack>
										<LinearProgress
											variant='determinate'
											color={color}
											value={val}
										/>
									</Box>
								))}
							</Stack>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant='h4' componenet='h3' marginBottom={4}>
								Knowledges
							</Typography>
							<Stack
								sx={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									rowGap: {
										xs: 1.5,
										md: 2
									},
									columnGap: {
										xs: 1.5,
										md: 2
									}
								}}>
								{items.map((item, i) => (
									<Box
										key={i}
										sx={{
											backgroundColor: 'lightgray',
											paddingBlock: 0.75,
											paddingInline: 2,
											borderRadius: 1
										}}>
										{item}
									</Box>
								))}
							</Stack>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Footer backgroundColor='#87CEFA' borderRadius={15} />
		</>
	);
};

export default Resume;
