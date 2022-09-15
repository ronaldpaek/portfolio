import React, { useState, useEffect } from 'react';
import {
	Box,
	Typography,
	Paper,
	Stack,
	Grid,
	Container,
	SvgIcon
} from '@mui/material';
import {
	PhoneIphone,
	Email,
	CalendarMonth,
	Place,
	Repeat
} from '@mui/icons-material';
import Marquee from 'react-fast-marquee';

import {
	about,
	icon,
	icon1,
	icon2,
	icon3,
	icon4,
	icon5,
	brand,
	brand1,
	brand2,
	brand3,
	brand4
} from '../assets';
import { Footer } from '../components';
import { urlFor, client } from '../client';
import styled from '@emotion/styled';

const infoList = [
	{
		title: 'Phone',
		description: '123 456 7890',
		pathData:
			'M 15.5 1 h -8 C 6.12 1 5 2.12 5 3.5 v 17 C 5 21.88 6.12 23 7.5 23 h 8 c 1.38 0 2.5 -1.12 2.5 -2.5 v -17 C 18 2.12 16.88 1 15.5 1 Z m -4 21 c -0.83 0 -1.5 -0.67 -1.5 -1.5 s 0.67 -1.5 1.5 -1.5 s 1.5 0.67 1.5 1.5 s -0.67 1.5 -1.5 1.5 Z m 4.5 -4 H 7 V 4 h 9 v 14 Z'
	},
	{
		title: 'Location',
		description: 'Hong kong china',
		pathData:
			'M 12 2 C 8.13 2 5 5.13 5 9 c 0 5.25 7 13 7 13 s 7 -7.75 7 -13 c 0 -3.87 -3.13 -7 -7 -7 Z m 0 9.5 c -1.38 0 -2.5 -1.12 -2.5 -2.5 s 1.12 -2.5 2.5 -2.5 s 2.5 1.12 2.5 2.5 s -1.12 2.5 -2.5 2.5 Z'
	},
	{
		title: 'Email',
		description: 'example@gmail.com',
		pathData:
			'M 20 4 H 4 c -1.1 0 -1.99 0.9 -1.99 2 L 2 18 c 0 1.1 0.9 2 2 2 h 16 c 1.1 0 2 -0.9 2 -2 V 6 c 0 -1.1 -0.9 -2 -2 -2 Z m 0 4 l -8 5 l -8 -5 V 6 l 8 5 l 8 -5 v 2 Z'
	},
	{
		title: 'Birthday',
		description: 'May 27, 1990',
		pathData:
			'M 19 4 h -1 V 2 h -2 v 2 H 8 V 2 H 6 v 2 H 5 c -1.11 0 -1.99 0.9 -1.99 2 L 3 20 c 0 1.1 0.89 2 2 2 h 14 c 1.1 0 2 -0.9 2 -2 V 6 c 0 -1.1 -0.9 -2 -2 -2 Z m 0 16 H 5 V 10 h 14 v 10 Z M 9 14 H 7 v -2 h 2 v 2 Z m 4 0 h -2 v -2 h 2 v 2 Z m 4 0 h -2 v -2 h 2 v 2 Z m -8 4 H 7 v -2 h 2 v 2 Z m 4 0 h -2 v -2 h 2 v 2 Z m 4 0 h -2 v -2 h 2 v 2 Z'
	}
];

const icons = [PhoneIphone, Email, CalendarMonth, Place];

const skillsList = [
	{
		title: 'Ui/Ux Design',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon
	},
	{
		title: 'App Development',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon1
	},
	{
		title: 'Photography',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon2
	},
	{
		title: 'Photography',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon3
	},
	{
		title: 'Managment',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon4
	},
	{
		title: 'Web Development',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon5
	}
];

const brands = [
	brand,
	brand1,
	brand2,
	brand3,
	brand4,
	brand,
	brand1,
	brand2,
	brand3,
	brand4
];

const style = {
	sectionContainer: {
		backgroundColor: 'rgb(255, 255, 255)',
		maxWidth: {
			md: 992,
			lg: 1280
		},
		px: {
			xs: 2,
			sm: 5,
			md: 10
		},
		borderRadius: {
			md: 4
		}
	},
	sectionTitle: {
		fontWeight: 700,
		fontFamily: 'Roboto Slab, serif',
		fontSize: '2.5rem',
		display: 'inline-flex',
		alignItems: 'center',
		mt: {
			xs: 6,
			md: 0
		}
	},
	titleLine: {
		background:
			'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
		height: 2,
		width: '11rem',
		ml: '1.5rem',
		display: {
			xs: 'none',
			sm: 'inline'
		}
	},
	aboutMeContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 4,
		pt: {
			xs: 2,
			sm: 5
		}
	},
	aboutMeImgContainer: {
		flexBasis: {
			xs: '100%',
			sm: 0
		},
		flexGrow: {
			sm: 4
		}
	},
	aboutMeImg: {
		maxWidth: '100%',
		objectFit: 'cover',
		display: 'block',
		borderRadius: 8,
		overflow: 'hidden',
		width: {
			xs: '100%',
			sm: 330
		},
		height: {
			xs: 'auto',
			sm: 400
		}
	},
	whoAmIContainer: {
		flexBasis: {
			xs: '100%',
			sm: 0
		},
		flexGrow: {
			sm: 8
		}
	},
	whoAmITitle: {
		fontWeight: 500,
		fontSize: '1.5625rem',
		mb: 1.25
	},
	whoAmIBody: {
		color: 'rgb(68, 86, 108)'
	},
	gridContainer: {
		display: 'grid',
		gap: '1.5rem',
		gridTemplateColumns: {
			xs: 'repeat(1, minmax(0, 1fr))',
			sm: 'repeat(2, minmax(0, 1fr))'
		}
	},
	infoItem: {
		display: 'flex'
	},
	infoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		mr: '.625rem',
		borderRadius: '.375rem',
		width: '3rem',
		color: 'rgb(233 59 129)'
	},
	whatIdoGrid: {
		display: 'grid',
		gap: '2rem',
		gridTemplateColumns: {
			xs: 'repeat(1, minmax(0, 1fr))', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))'
		}
	}
};

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
										{infoList.map(({ title, description, pathData }, i) => (
											<Box key={i} sx={style.infoItem}>
												<Paper component='span' sx={style.infoContainer}>
													<SvgIcon sx={style.svg}>
														<path d={pathData} />
													</SvgIcon>
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
									<Box component='img' src={icon} alt='icon' sx={{objectFit: 'contain', width: '2.5rem', height: '2.5rem', display: 'block', maxWidth: '100%'}} />
										<Box>
											<Typography component='h3' sx={{fontWeight: 'bold', fontSize: '1.375rem'}}>
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
