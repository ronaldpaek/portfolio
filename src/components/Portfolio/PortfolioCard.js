import React from 'react';
import { Box, Typography } from '@mui/material';

const PortfolioCard = ({
	image,
	title,
	subtitle,
	color,
	id,
	handleRenderCard
}) => {
	return (
		<Box>
			<Box p={6} mb='20px' borderRadius='.5rem' bgcolor={color}>
				<Box borderRadius='.5rem'>
					<img
						src={image}
						alt=''
						style={{
							borderRadius: '.5rem',
							display: 'block',
							width: '100%',
							objectFit: 'cover'
						}}
						onClick={() => handleRenderCard(id)}
					/>
					<Box component='span' pt={5}>
						{title}
					</Box>
					<Typography
						component='h2'
						mt={2}
						onClick={() => handleRenderCard(id)}
					>
						{subtitle}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default PortfolioCard;
