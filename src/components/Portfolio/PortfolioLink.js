import React from 'react';
import { Box } from '@mui/material';

const PortfolioLink = ({ link, setFilterChoice }) => {
	return (
		<Box
			component='li'
			onClick={() => setFilterChoice(link.toLowerCase())}
			sx={{
				mr: 4,
				mx: { md: 4 },
				color: 'text.p.about',
				'&:hover': {
					color: 'active.mobile.color'
				}
			}}
		>
			{link}
		</Box>
	);
};

export default PortfolioLink;
