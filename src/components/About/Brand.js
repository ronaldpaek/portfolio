import React from 'react';
import { Box } from '@mui/material';

const Brand = ({ brand }) => {
	return (
		<Box sx={{ p: '30px', width: 164 }}>
			<Box
				component='img'
				src={brand}
				alt='brand'
				sx={{
					objectFit: 'cover'
				}}
			/>
		</Box>
	);
};

export default Brand;
