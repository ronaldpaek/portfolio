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
			<Box borderRadius='.5rem'>
				<Box
					component='img'
					src={smallImage}
					alt=''
					borderRadius='.5rem'
					sx={{
						cursor: 'pointer'
					}}
					onClick={() => handleModalCard(id)}
				/>
			</Box>
			<Stack direction='row' mt={4}>
				<Typography component='span' color='nav.color'>
					{date}
				</Typography>
				<Typography
					component='span'
					sx={{
						position: 'relative',
						pl: '1.5rem',
						color: 'nav.color',
						'&:after': {
							content: `''`,
							position: 'absolute',
							left: '0.5rem',
							top: '50%',
							height: '0.25rem',
							width: '0.25rem',
							transform: 'scaleX(1) scaleY(1)',
							bgcolor: 'rgb(68 86 108)',
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
