import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { buttons } from '../../constants';

const Knowledges = () => {
	return (
		<Box gridColumn='span 1'>
			<Typography
				component='h4'
				sx={{
					fontWeight: 500,
					fontSize: '1.625rem',
					mb: 8,
					color: theme => theme.custom.neutral.main
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
							color: 'secondary.main',
							bgcolor: theme =>
								theme.palette.mode === 'light' ? '#EDF2F2' : '#1C1C1C',
							px: '1.25rem',
							py: '.5rem',
							fontSize: 'inherit',
							fontWeight: 'inherit'
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
