import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

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
		<Grid item xs={12} sm={6} md={4} p={2}>
			<Box
				p={3}
				mb={1}
				sx={{
					backgroundColor: color,
          borderRadius: 4,
          minHeight: '100%'
				}}>
				<img
					src={smallImage}
					alt=''
					style={{
						borderRadius: 8,
						display: 'block',
						width: '100%',
						maxWidth: '100%'
					}}
					onClick={() => handleModalCard(id)}
				/>
				<Typography>
					{date} &#8226; {tag}{' '}
				</Typography>
				<Typography
					variant='h6'
					component='h3'
					pt={2.5}
					pr={2}
					fontWeight={700}>
					{title}
				</Typography>
			</Box>
		</Grid>
	);
};

export default BlogCard;
