import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const BlogCardMainContent = ({
	largeImage,
	date,
	tag,
	title,
	pText1,
	pText2,
	pText3
}) => {
	return (
		<Box pr={3} pb={2}>
			<Box
				component='img'
				src={largeImage}
				alt='blog image'
				sx={{
					objectFit: 'cover',
					borderRadius: '.75rem',
					mt: 6
				}}
			/>
			<Stack
				direction='row'
				sx={{
					mt: 4,
					fontSize: '.875rem'
				}}
			>
				<Box component='span'>{date}</Box>
				<Box
					component='span'
					sx={{
						position: 'relative',
						transform: 'scaleX(1) scaleY(1)',
						pl: '1.5rem',
						'&:after': {
							position: 'absolute',
							left: '.5rem',
							top: '50%',
							height: '0.25rem',
							width: '0.25rem',
							transform: 'translate(0, 1)',
							content: `''`,
							bgcolor: 'rgb(68 86 108)'
						}
					}}
				>
					{tag}
				</Box>
			</Stack>
			<Typography
				component='h2'
				sx={{
					fontSize: { sm: '1.5rem' },
					mt: 2
				}}
			>
				{title}
			</Typography>
			<Typography my={4} fontSize={15}>
				{pText1}
			</Typography>
			<Typography my={4} fontSize={15}>
				{pText2}
			</Typography>
			<Typography my={4} fontSize={15}>
				{pText3}
			</Typography>
		</Box>
	);
};

export default BlogCardMainContent;
