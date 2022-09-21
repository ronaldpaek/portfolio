import React from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';
import { Download } from '@mui/icons-material';

import { SocialMediaLinks } from '../components';
import { avatar } from '../assets';

const Home = ({ name, title }) => {
	return (
		<Stack
			component='main'
			sx={{
				alignItems: 'center',
				justifyContent: 'center',
				height: {
					xs: '100vh',
					md: '90vh',
					lg: '80vh',
					xl: '71vh'
				}
			}}>
			<Box
				component='img'
				alt='profile'
				src={avatar}
				sx={{
					borderRadius: '50%',
					width: '250px',
					height: '250px',
					'@media (min-width: 1536px)': {
						width: '280px',
						height: '280px'
					}
				}}
			/>
			<Typography
				component='h3'
				variant='h3'
				sx={{
					fontSize: '1.625rem',
					fontWeight: 600,
					mb: '0.25rem',
					mt: '1.5rem'
				}}>
				{name}
			</Typography>
			<Typography
				sx={{
					color: '#7B7B7B',
					mb: '1rem'
				}}>
				{title}
			</Typography>
			<SocialMediaLinks />
			<Button
				variant='contained'
				sx={{
					mx: 'auto',
					mt: '1.5rem',
					display: 'flex',
					alignItems: 'center',
					borderRadius: '35px',
					backgroundImage:
						'linear-gradient(to right, #DD2476, #FA5252, #DD2476, #fa5252ef)',
					'&:hover': {
						backgroundPosition: '100% 0',
						transition: 'all .4 ease-in-out'
					},
					px: '2rem',
					py: '.75rem',
					color: '#FFF',
					fontSize: '1.125rem'
				}}
				startIcon={<Download />}>
				Download CV
			</Button>
		</Stack>
	);
};

export default Home;
