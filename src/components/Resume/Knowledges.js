import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { buttons } from '@constants';

const Knowledges = () => {
	return (
		<Box gridColumn='span 1'>
			<Typography
				component='h4'
				sx={{
					fontSize: '1.625rem',
					mb: 8,
					color: 'text.header'
				}}
			>
				Knowledges
			</Typography>
			<Stack
				direction='row'
				flexWrap='wrap'
				columnGap={{ xs: 3, md: 4 }}
				rowGap={{ xs: 3, md: 6 }}
			>
				{buttons.map((title, i) => (
					<Box
						key={i}
						component='button'
						sx={{
							borderRadius: '.5rem',
							fontWeight: 500,
							color: 'text.p.about',
							bgcolor: 'resume.knowledges.button.bgcolor',
							px: '1.25rem',
							py: '.5rem',
							fontSize: 'inherit'
						}}
					>
						{title}
					</Box>
				))}
			</Stack>
		</Box>
	);
};

export default Knowledges;
