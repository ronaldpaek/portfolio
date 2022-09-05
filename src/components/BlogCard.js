import React from 'react'
import { Typography, Box } from '@mui/material';

const BlogCard = ({
  image,
  title,
  subtitle,
  color,
  id,
  handleRenderCard,
  date,
  tag
}) => {
  return (
		<Box p={3} sx={{ backgroundColor: color, borderRadius: 4 }}>
			<img
				src={image}
				alt=''
				style={{ borderRadius: 8, display: 'block', width: '100%' }}
				onClick={() => handleRenderCard(id)}
			/>
			<Typography>
				{date} &#8226; {tag}{' '}
			</Typography>
			<Typography variant='body1' component='h3' pt={2.5} fontWeight={700}>
				{title}
			</Typography>
		</Box>
	);
};

export default BlogCard