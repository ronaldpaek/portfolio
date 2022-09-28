import React from 'react';
import { Box, Typography } from '@mui/material';
import Marquee from 'react-fast-marquee';

import { brands } from '@constants';
import { Brand } from './';

const Clients = () => {
	return (
		<Box>
			<Box
				sx={{
					bgcolor: theme =>
						theme.palette.mode === 'light' ? '#F8F8F8' : '#0D0D0D',
					maxWidth: 1,
					py: 10,
					borderRadius: '.75rem',
					height: 'auto'
				}}
			>
				<Typography
					component='h3'
					sx={{
						color: 'text.header',
						textAlign: 'center',
						fontSize: '1.75rem',
						fontWeight: 600,
						mb: 3
					}}
				>
					Clients
				</Typography>
				<Box
					component={Marquee}
					pauseOnHover={true}
					gradient={false}
					sx={{
						pt: '2rem',
						px: 2
					}}
				>
					{brands.map((brand, i) => (
						<Brand key={i} brand={brand} />
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Clients;
