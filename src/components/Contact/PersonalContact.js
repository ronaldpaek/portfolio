import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

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
			{contactInfo.map(({ info, title, img, bgcolor }) => (
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
					<Box component='span' width='2rem' mt={2}>
						<Box
							component='img'
							src={img}
							alt='icon'
							sx={{ fontSize: '1.5625rem' }}
						/>
					</Box>
					<Box
						sx={{
							'& > p + p': {
								my: 2
							}
						}}
					>
						<Typography fontWeight={600} fontSize='1.25rem'>
							{title}:
						</Typography>
						<Typography color='rgb(68 86 108)' fontSize='1.25rem'>
							{info}
						</Typography>
					</Box>
				</Stack>
			))}
		</Box>
	);
};

export default PersonalContact;
