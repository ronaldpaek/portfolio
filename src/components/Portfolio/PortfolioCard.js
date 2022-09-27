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
			<Box
				p={6}
				mb='20px'
				borderRadius='.5rem'
				sx={theme => ({
					bgcolor: color,
					...(theme.palette.mode === 'dark' && {
						bgcolor: 'transparent',
						border: theme.border
					})
				})}
			>
				<Box borderRadius='.5rem'>
					<Box
						component='img'
						src={image}
						alt=''
						sx={{
							borderRadius: '.5rem',
							objectFit: 'cover',
							cursor: 'pointer',
						}}
						onClick={() => handleRenderCard(id)}
					/>
					<Box component='span' pt={5} color='nav.color' fontSize={14} display='block'>
						{title}
					</Box>
					<Typography
						component='h2'
						mt={2}
						sx={{
							fontSize: '1.25rem',
							cursor: 'pointer',
							color: 'text.header',
							'&:hover': {
								color: 'active.mobile.color'
							}
						}}
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
