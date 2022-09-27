import React from 'react';
import { Box, Stack, Icon, Typography } from '@mui/material';

import { contactInfo } from '@constants';

const PersonalContact = () => {
	return (
		<Box
			sx={{
				width: {
					xs: 1,
					lg: '40%',
					xl: '30%'
				},
				'& > div + div': {
					mt: 6
				}
			}}
		>
			{contactInfo.map(({ icon, title, info, bgcolor }) => (
				<Stack
					key={title}
					direction='row'
					flexWrap='wrap'
					sx={{
						bgcolor,
						p: '30px',
						borderRadius: '.75rem',
						gap: 2
					}}
				>
					<Icon component={icon} sx={{ width: '2rem', mt: 2 }} />
					<Box
						sx={{
							'& > p + p': {
								my: 2
							}
						}}
					>
						<Typography>{title}:</Typography>
						<Typography>{info}</Typography>
					</Box>
				</Stack>
      ))}
		</Box>
	);
};

export default PersonalContact;
