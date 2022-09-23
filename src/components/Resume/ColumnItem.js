import React from 'react';
import { Typography, Box } from '@mui/material';

const ColumnItem = ({ bgcolor, year, title, desc }) => {
	return (
		<Box
			sx={theme => ({
				mb: 6,
				borderRadius: '0.5rem',
				py: 4,
				pl: 5,
				pr: 3,
				bgcolor,
				...(theme.palette.mode === 'dark' && {
					bgcolor: 'transparent',
					borderColor: '#212425',
					borderWidth: 2
				})
			})}
		>
			<Typography
				component='span'
				sx={{
					fontSize: '.875rem',
					color: theme =>
						theme.palette.mode === 'light' ? '#44566C' : '#B7B7B7'
				}}
			>
				{year}
			</Typography>
			<Typography
				component='h3'
				sx={{
					color: theme => theme.custom.neutral,
					fontSize: '1.25rem'
				}}
			>
				{title}
			</Typography>
			<Typography
				sx={{
					color: theme => (theme.palette.mode === 'light' ? 'black' : '#B7B7B7')
				}}
			>
				{desc}
			</Typography>
		</Box>
	);
};

export default ColumnItem;
