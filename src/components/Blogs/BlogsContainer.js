import React from 'react';
import { Box } from '@mui/material';

import { dummyData } from '@constants';
import { BlogCard } from '@components';

const BlogsContainer = ({ handleModalCard }) => {
	return (
		<Box
			display='grid'
			sx={{
				gridTemplateColumns: {
					xs: 'repeat(1, 1fr)',
					sm: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)'
				},
				mt: '30px',
				mb: 6,
				columnGap: 10,
				rowGap: 7
			}}
		>
			{dummyData.map((blog, i) => (
				<BlogCard
					key={i}
					{...blog}
					handleModalCard={() => handleModalCard(blog.id)}
				/>
			))}
		</Box>
	);
};

export default BlogsContainer;
