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
		<Box p={5} borderRadius='.5rem' mb={2} height={1} bgcolor={color}>
			<Box borderRadius='.5rem'>
				<Box
					component='img'
					src={smallImage}
					alt=''
					borderRadius='.5rem'
					onClick={() => handleModalCard(id)}
				/>
			</Box>
			<Stack direction='row' mt={4}>
				<Typography component='span'>{date}</Typography>
				<Typography
					component='span'
					sx={{
						position: 'relative',
						pl: '1.5rem',
						'&:after': {
							content: '""',
							position: 'absolute',
							left: '0.5rem',
							top: '50%',
							height: '0.25rem',
							width: '0.25rem',
							transform: 'translate(0, -50%)',
							color: '#44566C'
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
					pr: 4,
					mt: 3
				}}
			>
				{title}
			</Typography>
		</Box>
	);
};

export default BlogCard;
