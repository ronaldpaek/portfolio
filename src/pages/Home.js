import React from 'react';
import { Stack, Typography, Button, IconButton, Box } from '@mui/material';
import { Twitter, LinkedIn, Download } from '@mui/icons-material';
import { FaFacebookF, FaBasketballBall } from 'react-icons/fa';

import { avatar } from '../assets/images';

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
			<Stack direction='row' spacing={1}>
				<IconButton
					sx={{
						backgroundColor: 'hsl(45, 29%, 90%)',
						borderRadius: 2,
						color: '#3B83EC'
					}}>
					<FaFacebookF />
				</IconButton>
				<IconButton
					sx={{
						backgroundColor: 'hsl(45, 29%, 90%)',
						borderRadius: 2,
						color: '#1D9CEA'
					}}>
					<Twitter />
				</IconButton>
				<IconButton
					sx={{
						backgroundColor: 'hsl(45, 29%, 90%)',
						borderRadius: 2,
						color: '#E3568B'
					}}>
					<FaBasketballBall />
				</IconButton>
				<IconButton
					sx={{
						backgroundColor: 'hsl(45, 29%, 90%)',
						borderRadius: 2,
						color: '#0072B1'
					}}>
					<LinkedIn />
				</IconButton>
			</Stack>
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
