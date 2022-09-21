import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				overflow: 'hidden',
				borderBottomLeftRadius: '1rem',
				borderBottomRightRadius: '1rem',
				bgcolor: 'inherit'
			}}
		>
			<Typography
				sx={{
					color: 'secondary.main',
					textAlign: 'center',
					py: 6
				}}
			>
				© 2022 All Rights Reserved by ib-themes.
			</Typography>
		</Box>
	);
};

export default Footer;
