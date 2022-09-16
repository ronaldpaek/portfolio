import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Stack, Container, Icon } from '@mui/material';
import Marquee from 'react-fast-marquee';

import { skillsList, brands, infoList } from '../constants';
import { about } from '../assets';
import { Footer } from '../components';
import { style } from '../styles';
import { urlFor, client } from '../client';

const About = () => {
	const [abouts, setAbouts] = useState([]);
	console.log(abouts);

	useEffect(() => {
		const query = `*[_type == 'abouts']`;

		client.fetch(query).then(data => {
			console.log('hello');
			setAbouts(data);
		});
	}, []);

	return (
		<Box component='section'>
			<Container disableGutters sx={style.sectionContainer}>
				<Box>
					<Box py={6}>
						<Typography component='h2' sx={style.sectionTitle}>
							About Me
							<Box component='span' sx={style.titleLine} />
						</Typography>
						<Stack sx={style.aboutMeContainer}>
							<Box sx={style.aboutMeImgContainer}>
								<Box
									component='img'
									src={about}
									alt='profile'
									sx={style.aboutMeImg}
								/>
							</Box>
							<Box sx={style.whoAmIContainer}>
								<Box sx={{ mr: { sm: 6, md: 8 } }}>
									<Typography component='h3' sx={style.whoAmITitle}>
										Who am i?
									</Typography>
									<Typography sx={style.whoAmIBody}>
										I'm Creative Director and UI/UX Designer from Sydney,
										Australia, working in web development and print media. I
										enjoy turning complex problems into simple, beautiful and
										intuitive designs.
									</Typography>
									<Typography mt={1.25} sx={style.whoAmIBody}>
										My aim is to bring across your message and identity in the
										most creative way. I created web design for many famous
										brand companies.
									</Typography>
									<Box mt={1.25}>
										<Typography
											component='h3'
											my={2.5}
											sx={{ my: 2.5, fontWeight: 500, fontSize: '1.5625rem' }}>
											Personal Info
										</Typography>
									</Box>
									<Box sx={style.gridContainer}>
										{infoList.map(({ title, description, component }, i) => (
											<Box key={i} sx={style.infoItem}>
												<Paper component='span' sx={style.infoContainer}>
													<Icon component={component}></Icon>
												</Paper>
												<Box>
													<Typography sx={{ fontSize: '.75rem' }}>
														{title}
													</Typography>
													<Typography
														component='h6'
														sx={{ fontWeight: 'bold' }}>
														{description}
													</Typography>
												</Box>
											</Box>
										))}
									</Box>
								</Box>
							</Box>
						</Stack>
					</Box>
					<Box pb={6}>
						<Typography
							componenet='h3'
							sx={{ pb: 2.5, fontSize: '35px', fontWeight: 'bold' }}>
							What I do!
						</Typography>
						<Box sx={style.whatIdoGrid}>
							{skillsList.map(({ title, subtitle, icon }, i) => (
								<Box
									key={i}
									sx={{
										display: 'flex',
										gap: '1rem',
										borderRadius: '.75rem',
										p: 3,
										bgcolor: '#FBF4FE'
									}}>
									<Box
										component='img'
										src={icon}
										alt='icon'
										sx={{
											objectFit: 'contain',
											width: '2.5rem',
											height: '2.5rem',
											display: 'block',
											maxWidth: '100%'
										}}
									/>
									<Box>
										<Typography
											component='h3'
											sx={{ fontWeight: 'bold', fontSize: '1.375rem' }}>
											{title}
										</Typography>
										<Typography mt={1}>{subtitle}</Typography>
									</Box>
								</Box>
							))}
						</Box>
					</Box>
					<Box
						textAlign='center'
						p={5}
						sx={{ bgcolor: 'lightgray', borderRadius: 3 }}>
						<Typography variant='h5' component='h3' fontWeight='800'>
							Clients
						</Typography>
						<Marquee
							pauseOnHover={true}
							gradient={false}
							style={{ paddingTop: '2rem' }}>
							<Stack direction='row'>
								{brands.map((brand, i) => (
									<Box key={i} p={4}>
										<img
											src={brand}
											alt=''
											style={{
												maxWidth: '100%',
												display: 'block',
												objectFit: 'cover'
											}}
										/>
									</Box>
								))}
							</Stack>
						</Marquee>
					</Box>
					<Footer />
				</Box>
			</Container>
		</Box>
	);
};

export default About;
