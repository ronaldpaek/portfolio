import React from 'react';
import {
	Box,
	Typography,
	Grid,
	Stack,
	LinearProgress,
	Paper,
	Container
} from '@mui/material';

import Footer from '../components/Footer';
import { resumeList, skills, items } from '../constants';

const ResumeV2 = () => {
	return (
		<Box
			component='section'
			sx={{
				bgcolor: theme => (theme.palette.mode === 'light' ? 'white' : '#111'),
				borderRadius: { lg: '1rem' }
			}}
		>
			{/* <Box>
				<Container 
			</Box> */}
		</Box>
	);
};

const Resume = () => {
	return (
		<Paper
			component='section'
			square={true}
			elevation={0}
			sx={{
				borderRadius: {
					md: '1rem'
				}
			}}
		>
			<Box>
				<Container
					// minWidth={{md}}
					sx={{
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
					}}
				>
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
							}}
						>
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
								}}
							></Box>
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
												sx={{ backgroundColor: '#5F9EA0', borderRadius: 2 }}
											>
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
				</Container>
				<Box backgroundColor='salmon' py={6}>
					<Box
						sx={{
							paddingInline: {
								xs: 3,
								sm: 5,
								lg: 10
							}
						}}
					>
						<Grid
							container
							spacing={2}
							sx={{
								direction: {
									xs: 'column',
									lg: 'row'
								}
							}}
						>
							<Grid item xs={12} sm={6}>
								<Typography variant='h4' componenet='h3' marginBottom={3}>
									Working Skills
								</Typography>
								<Stack spacing={2.5}>
									{skills.map(({ skill, val, color }, i) => (
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
									}}
								>
									{items.map((item, i) => (
										<Box
											key={i}
											sx={{
												backgroundColor: 'lightgray',
												paddingBlock: 0.75,
												paddingInline: 2,
												borderRadius: 1
											}}
										>
											{item}
										</Box>
									))}
								</Stack>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Footer backgroundColor='#87CEFA' borderRadius={15} />
			</Box>
		</Paper>
	);
};

export default Resume;
