import React from 'react';
import { Box } from '@mui/material';

import { about } from '../../assets';

const AboutMeImage = () => {
	return (
		<Box gridColumn={{ xs: 'span 12', md: 'span 4' }}>
			<Box
				component='img'
				src={about}
				alt='profile'
				sx={{
					borderRadius: '35px',
					overflow: 'hidden',
					mb: 3
				}}
			/>
		</Box>
	);
};

export default AboutMeImage;
