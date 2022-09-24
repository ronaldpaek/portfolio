import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { urlFor } from '../../client';
import { useColorModeContext } from '../../themes';

const WhatIDo = ({ skills }) => {
	const { mode } = useColorModeContext();

	return (
		<Box pb={12}>
			<Typography
				component='h3'
				sx={{
					fontWeight: 500,
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
				{skills.map(({ name, bgcolor, icon }, i) => (
					<Stack
						direction='row'
						key={i}
						sx={[
							{
								gap: '1rem',
								borderRadius: '.75rem',
								borderColor: 'transparent',
								p: '1.5rem',
								bgcolor
							},
							(mode === 'dark') && {
								bgcolor: 'transparent',
								border: theme => theme.border
							}
						]}
					>
						<Box
							component='img'
							src={urlFor(icon)}
							alt='icon'
							sx={{
								objectFit: 'contain',
								width: '2.5rem',
								height: '2.5rem'
							}}
						/>
						<Box sx={{ '& > * + *': { my: 2 } }}>
							<Typography
								component='h3'
								sx={{
									color: 'text.header',
									fontWeight: 600,
									fontSize: '1.375rem'
								}}
							>
								{name}
							</Typography>
							<Typography lineHeight='2rem' color='#text.p.home'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam euismod volutpat.
							</Typography>
						</Box>
					</Stack>
				))}
			</Box>
		</Box>
	);
};

export default WhatIDo;
