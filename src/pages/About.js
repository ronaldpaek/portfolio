import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';

import { AboutMe, WhatIDo, Clients, Footer } from '../components';
import { client } from '../client';

const About = () => {
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = `*[_type == 'skills']`;

		client
			.fetch(query)
			.then(data => {
				setSkills(data);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<Box component='section'>
			<Container
				disableGutters
				sx={{
					px: {
						xs: 4,
						sm: 5,
						md: 10,
						lg: 20
					},
					borderRadius: { lg: '1rem' },
					bgcolor: 'primary.main',
					maxWidth: { xl: '1280px' },
					'@media (min-width: 992px)': {
						maxWidth: '992px'
					}
				}}
			>
				<Box>
					<AboutMe />
					<WhatIDo skills={skills} />
					<Clients />
					<Footer />
				</Box>
			</Container>
		</Box>
	);
};

export default About;

// <Box component='section'>
// 	<Container disableGutters component={Paper} sx={style.sectionContainer}>
// 		<Box>
// 			<Box py={6}>
// 				<Typography component='h2' sx={style.sectionTitle}>
// 					About Me
// 					<Box component='span' sx={style.titleLine} />
// 				</Typography>
// 				<Stack sx={style.aboutMeContainer}>
// 					<Box sx={style.aboutMeImgContainer}>
// 						<Box
// 							component='img'
// 							src={about}
// 							alt='profile'
// 							sx={style.aboutMeImg}
// 						/>
// 					</Box>
// 					<Box sx={style.whoAmIContainer}>
// 						<Box>
// 							<Box sx={{ mr: { sm: 6, md: 8 } }}>
// 								<Typography component='h3' sx={style.whoAmITitle}>
// 									Who am i?
// 								</Typography>
// 								<Typography sx={style.whoAmIBody}>
// 									I'm Creative Director and UI/UX Designer from Sydney,
// 									Australia, working in web development and print media. I
// 									enjoy turning complex problems into simple, beautiful and
// 									intuitive designs.
// 								</Typography>
// 								<Typography mt={1.25} sx={style.whoAmIBody}>
// 									My aim is to bring across your message and identity in the
// 									most creative way. I created web design for many famous
// 									brand companies.
// 								</Typography>
// 							</Box>
// 							<Box mt={1.25}>
// 								<Typography
// 									component='h3'
// 									my={2.5}
// 									sx={{ my: 2.5, fontWeight: 500, fontSize: '1.5625rem' }}>
// 									Personal Info
// 								</Typography>
// 								<Box sx={style.gridContainer}>
// 									{infoList.map(({ title, description, component }, i) => (
// 										<Box key={i} sx={style.infoItem}>
// 											<Paper component='span' sx={style.infoContainer}>
// 												<Icon component={component}></Icon>
// 											</Paper>
// 											<Box>
// 												<Typography sx={{ fontSize: '.75rem' }}>
// 													{title}
// 												</Typography>
// 												<Typography
// 													component='h6'
// 													sx={{ fontWeight: 'bold' }}>
// 													{description}
// 												</Typography>
// 											</Box>
// 										</Box>
// 									))}
// 								</Box>
// 							</Box>
// 						</Box>
// 					</Box>
// 				</Stack>
// 			</Box>
// 			<Box pb={6}>
// 				<Typography
// 					componenet='h3'
// 					sx={{ pb: 2.5, fontSize: '35px', fontWeight: 'bold' }}>
// 					What I do!
// 				</Typography>
// 				<Box sx={style.whatIdoGrid}>
// 					{skills.map(({ name, bgColor, icon }, i) => (
// 						<Box
// 							key={i}
// 							sx={{
// 								display: 'flex',
// 								gap: '1rem',
// 								borderRadius: '.75rem',
// 								p: 3,
// 								backgroundColor: bgColor
// 							}}>
// 							<Box
// 								component='img'
// 								src={urlFor(icon)}
// 								alt='icon'
// 								sx={{
// 									objectFit: 'contain',
// 									width: '2.5rem',
// 									height: '2.5rem',
// 									display: 'block',
// 									maxWidth: '100%'
// 								}}
// 							/>
// 							<Box>
// 								<Typography
// 									component='h3'
// 									sx={{ fontWeight: 'bold', fontSize: '1.375rem' }}>
// 									{name}
// 								</Typography>
// 								<Typography mt={1}>
// 									Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
// 									sed diam euismod volutpat.
// 								</Typography>
// 							</Box>
// 						</Box>
// 					))}
// 				</Box>
// 			</Box>
// 			<Box
// 				textAlign='center'
// 				py={'2.5rem'}
// 				sx={{ bgcolor: 'rgb(248 251 251)', borderRadius: '.75rem' }}>
// 				<Typography variant='h5' component='h3' fontWeight='800'>
// 					Clients
// 				</Typography>
// 				<Box
// 					component={Marquee}
// 					pauseOnHover={true}
// 					gradient={false}
// 					sx={{
// 						pt: '2rem',
// 						px: pxToRem(8)
// 					}}>
// 					{brands.map((brand, i) => (
// 						<Box key={i} sx={{ p: '30px', width: 164 }}>
// 							<Box
// 								component='img'
// 								src={brand}
// 								alt=''
// 								sx={{
// 									maxWidth: '100%',
// 									display: 'block',
// 									objectFit: 'cover'
// 								}}
// 							/>
// 						</Box>
// 					))}
// 				</Box>
// 			</Box>
// 			<Footer />
// 		</Box>
// 	</Container>
// </Box>
