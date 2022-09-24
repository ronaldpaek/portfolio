import React from 'react';
import { Box, Typography } from '@mui/material';

const WhoAmI = () => {
	return (
		<Box sx={{ mr: { md: 12, xl: 16 } }}>
			<Typography
				component='h3'
				sx={{
					fontWeight: 500,
					fontSize: '1.5625rem',
					mb: 2.5
				}}
			>
				Who am i?
			</Typography>
			<Typography
				sx={{
					lineHeight: 1.7,
					mb: 2.5,
					color: 'text.p.about'
				}}
			>
				I'm Creative Director and UI/UX Designer from Sydney, Australia, working
				in web development and print media. I enjoy turning complex problems
				into simple, beautiful and intuitive designs.
			</Typography>
			<Typography
				sx={{
					lineHeight: 1.7,
					mt: 2.5,
					color: 'text.p.about'
				}}
			>
				My aim is to bring across your message and identity in the most creative
				way. I created web design for many famous brand companies.
			</Typography>
		</Box>
	);
};

export default WhoAmI;
