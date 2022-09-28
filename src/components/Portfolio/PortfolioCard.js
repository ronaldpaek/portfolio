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
					<Box borderRadius='.5rem' overflow='hidden'>
						<Box
							component='img'
							src={image}
							alt=''
							sx={{
								borderRadius: '.5rem',
								objectFit: 'cover',
								cursor: 'pointer',
								transition: theme =>
									theme.transitions.create('transform', {
										duration: theme.transitions.duration.standard,
										easing: theme.transitions.easing.easeInOut
									}),
								'&:hover': {
									transform: 'scale(1.1)'
								}
							}}
							onClick={() => handleRenderCard(id)}
						/>
					</Box>
					<Box
						component='span'
						pt={5}
						color='nav.color'
						fontSize={14}
						display='block'
					>
						{title}
					</Box>
					<Typography
						component='h2'
						mt={2}
						sx={{
							fontSize: '1.25rem',
							cursor: 'pointer',
							color: 'text.header',
							transition: theme =>
								theme.transitions.create('color', {
									duration: theme.transitions.duration.standard,
									easing: theme.transitions.easing.easeInOut
								}),
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
