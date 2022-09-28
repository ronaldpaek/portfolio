import React from 'react';
import { Box } from '@mui/material';

const PortfolioLink = ({ link, setFilterChoice, filterChoice }) => {
	const choice = link.toLowerCase();
	return (
		<Box
			component='li'
			onClick={() => setFilterChoice(choice)}
			sx={{
				mr: 4,
				mx: { md: 4 },
				cursor: 'pointer',
				color: choice === filterChoice ? 'active.mobile.color' : 'text.p.about',
				transition: theme =>
					theme.transitions.create('color', {
						duration: theme.transitions.duration.standard,
						easing: theme.transitions.easing.easeInOut
					}),
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
