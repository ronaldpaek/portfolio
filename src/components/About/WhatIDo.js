import React from 'react';
import { Box, Typography } from '@mui/material';

import { Skill } from './';

const WhatIDo = ({ skills }) => {
	return (
		<Box pb={12}>
			<Typography
				component='h3'
				sx={{
					fontSize: '35px',
					pb: 5,
					color: 'text.header'
				}}
			>
				What I do!
			</Typography>
			<Box
				display='grid'
				gap={8}
				sx={{
					gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }
				}}
			>
				{skills.map((skill, i) => (
					<Skill key={i} {...skill} />
				))}
			</Box>
		</Box>
	);
};

export default WhatIDo;
