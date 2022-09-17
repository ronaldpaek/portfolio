import React from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';
import { Download } from '@mui/icons-material';

import { SocialMediaLinks } from '../components';
import { avatar } from '../assets';

const style = {
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		height: {
			xs: '100vh',
			sm: '90vh',
			md: '80vh',
			lg: '71vh',
		}
	},
	profile: {
		borderRadius: '999px',
		display: 'block',
		maxWidth: '100%',
		width: {
			xs: '250px',
			xl: '280px',
		},
		height: {
			xs: '250px',
			xl: '280px',
		}
	},
	title: {
		fontSize: '1.625rem',
		fontWeight: 600,
		mb: .5,
		mt: 3
	},
	subtitle: {
		color: 'rgb(123 123 123)',
		mb: 2,
	},
	downloadButton: {
		mx: 'auto',
		mt: 3,
		display: 'flex',
		alignItems: 'center',
		borderRadius: '35px',
		// backgroundImage: 'linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)',
    // boxShadow: '0 4px 15px 0 rgba(49, 196, 190, 0.75)',
		backgroundImage: 'linear-gradient(to right, #DD2476, #FA5252, #DD2476, #fa5252ef)',
		'&:hover': {
			backgroundPosition: '100% 0',
			transition: 'all .4 ease-in-out'
		},
		px: 4,
		py: 1.5,
		color: 'rgb(255, 255, 255)',
		fontSize: '1rem',
	},
};

const Home = ({ name, title }) => {
	return (
		<Stack
			component='main'
			sx={style.container}>
			<Box
				component='img'
				alt='profile'
				src={avatar}
				sx={style.profile}>
			</Box>
			<Typography
				component='h3'
				sx={style.title}>
				{name}
			</Typography>
			<Typography component='p' sx={style.subtitle}>
				{title}
			</Typography>
			<SocialMediaLinks />
			<Button
				variant='contained'
				sx={style.downloadButton}
				startIcon={<Download />}>
				Download CV
			</Button>
		</Stack>
	);
};

export default Home;
