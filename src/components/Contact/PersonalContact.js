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
			{contactInfo.map(({ line1, line2, title, img, bgcolor }) => (
				<Stack
					key={title}
					direction='row'
					flexWrap='wrap'
					sx={theme => ({
						p: '30px',
						borderRadius: '.75rem',
						gap: 2,
						bgcolor,
						...(theme.palette.mode === 'dark' && {
							bgcolor: 'transparent',
							border: theme.border
						})
					})}
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
						<Typography fontWeight={600} fontSize='20px'>
							{title}:
						</Typography>
						<Typography color='nav.color' fontSize='18px'>
							{line1}
						</Typography>
						<Typography color='nav.color' fontSize='18px'>
							{line2}
						</Typography>
					</Box>
				</Stack>
			))}
		</Box>
	);
};

export default PersonalContact;
