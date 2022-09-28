import React from 'react';
import { Box } from '@mui/material';

import { about } from '@assets';

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
					objectFit: 'cover',
					mb: { xs: 3, md: 0 },
					width: { md: 330 },
					height: { md: 400 }
				}}
			/>
		</Box>
	);
};

export default AboutMeImage;
