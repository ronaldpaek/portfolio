import React from 'react';
import { Box, Typography } from '@mui/material';

import { Info } from './';
import { infoList } from '@constants';

const PersonalInfo = () => {
	return (
		<Box>
			<Typography
				component='h3'
				sx={{
					fontSize: '1.5625rem',
					my: 5,
					color: 'text.header'
				}}
			>
				Personal Info
			</Typography>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)'
					},
					gap: 6
				}}
			>
				{infoList.map((info, i) => (
					<Info key={i} {...info} />
				))}
			</Box>
		</Box>
	);
};

export default PersonalInfo;
