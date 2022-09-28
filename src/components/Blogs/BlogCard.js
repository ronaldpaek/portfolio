import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

const BlogCard = ({
	smallImage,
	title,
	color,
	id,
	handleModalCard,
	date,
	tag
}) => {
	return (
		<Box
			p={5}
			borderRadius='.5rem'
			mb={2}
			height={1}
			sx={theme => ({
				bgcolor: color,
				...(theme.palette.mode === 'dark' && {
					bgcolor: 'transparent',
					border: theme.border
				})
			})}
		>
			<Box borderRadius='.5rem' overflow='hidden'>
				<Box
					component='img'
					src={smallImage}
					alt=''
					borderRadius='.5rem'
					onClick={() => handleModalCard(id)}
					sx={{
						cursor: 'pointer',
						transition: theme =>
							theme.transitions.create('transform', {
								duration: theme.transitions.duration.standard
							}),
						'&:hover': {
							transform: 'scale(1.1)'
						}
					}}
				/>
			</Box>
			<Stack direction='row' mt={4} fontSize={14}>
				<Typography component='span' color='nav.color' fontSize='inherit'>
					{date}
				</Typography>
				<Typography
					component='span'
					sx={{
						position: 'relative',
						pl: '1.5rem',
						color: 'nav.color',
						fontSize: 'inherit',
						'&:after': {
							content: '""',
							position: 'absolute',
							left: '0.5rem',
							top: '50%',
							height: '0.25rem',
							width: '0.25rem',
							bgcolor: 'rgb(68 86 108)',
							borderRadius: '50%',
							transform: 'translateY(-50%)'
						}
					}}
				>
					{tag}
				</Typography>
			</Stack>
			<Typography
				component='h3'
				onClick={() => handleModalCard(id)}
				sx={{
					fontSize: '1.125rem',
					color: 'text.header',
					pr: 4,
					mt: 3,
					cursor: 'pointer',
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
				{title}
			</Typography>
		</Box>
	);
};

export default BlogCard;
