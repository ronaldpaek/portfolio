import React from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';
import { Download } from '@mui/icons-material';

import { SocialMediaLinks } from '../components';
import { avatar } from '../assets';

const Home = ({ name, title }) => {
	return (
		<Stack
			alignItems='center'
			component='main'
			sx={{
				justifyContent: 'center',
				height: {
					xs: '90vh',
					md: '80vh'
				}
			}}>
			<Box
				sx={{
					maxWidth: {
						xs: 250,
						lg: 280
					}
				}}>
				<img
					alt='avatar'
					src={avatar}
					style={{
						borderRadius: '50%',
						width: '100%'
					}}
				/>
			</Box>
			<Typography
				variant='h5'
				component='h1'
				mt={3}
				mb={0.5}
				fontWeight={800}
				sx={{ fontSize: '1.75rem' }}>
				{name}
			</Typography>
			<Typography variant='body1' mb={2} component='p' color='gray'>
				{title}
			</Typography>
			<SocialMediaLinks />
			<Button
				variant='contained'
				sx={{
					borderRadius: 100,
					paddingBlock: 1.5,
					paddingInline: 5,
					marginTop: 3
				}}
				startIcon={<Download />}>
				Download CV
			</Button>
		</Stack>
	);
};

export default Home;
