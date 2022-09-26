import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

import { urlFor } from '@client';

const Skill = ({ bgcolor, icon, name }) => {
	return (
		<Stack
			direction='row'
			sx={theme => ({
				gap: '1rem',
				borderRadius: '.75rem',
				borderColor: 'transparent',
				p: '1.5rem',
				bgcolor,
				...(theme.palette.mode === 'dark' && {
					bgcolor: 'transparent',
					border: theme.border
				})
			})}
		>
			<Box
				component='img'
				src={urlFor(icon)}
				alt='icon'
				sx={{
					objectFit: 'contain',
					width: '2.5rem',
					height: '2.5rem'
				}}
			/>
			<Box sx={{ '& > * + *': { my: 2 } }}>
				<Typography
					component='h3'
					sx={{
						color: 'text.header',
						fontWeight: 600,
						fontSize: '1.375rem'
					}}
				>
					{name}
				</Typography>
				<Typography lineHeight='2rem' color='text.p.about'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					euismod volutpat.
				</Typography>
			</Box>
		</Stack>
	);
};

export default Skill;
