import React from 'react';
import { Typography, Box } from '@mui/material';

const ResumeItem = ({ bgcolor, year, title, desc }) => {
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
					border: theme.border
				})
			})}
		>
			<Typography
				component='span'
				sx={{
					fontSize: '.875rem',
					color: 'text.span.resume'
				}}
			>
				{year}
			</Typography>
			<Typography
				component='h3'
				sx={{
					color: 'text.header',
					fontSize: '1.25rem',
					mt: 2
				}}
			>
				{title}
			</Typography>
			<Typography
				sx={{
					color: 'resume.columnItem.p.color',
					mt: 2
				}}
			>
				{desc}
			</Typography>
		</Box>
	);
};

export default ResumeItem;
