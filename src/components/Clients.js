import React from 'react';
import { Box, Typography } from '@mui/material';
import Marquee from 'react-fast-marquee';

import { brands } from '../constants';

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
						color: theme => theme.neutral.primary,
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
						<Box key={i} sx={{ p: '30px', width: 164 }}>
							<Box
								component='img'
								src={brand}
								alt=''
								sx={{
									maxWidth: '100%',
									display: 'block',
									objectFit: 'cover'
								}}
							/>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Clients;

{/* <Box
	textAlign='center'
	py={'2.5rem'}
	sx={{ bgcolor: 'rgb(248 251 251)', borderRadius: '.75rem' }}
>
	<Typography variant='h5' component='h3' fontWeight='800'>
		Clients
	</Typography>
	<Box
		component={Marquee}
		pauseOnHover={true}
		gradient={false}
		sx={{
			pt: '2rem',
			px: pxToRem(8)
		}}
	>
		{brands.map((brand, i) => (
			<Box key={i} sx={{ p: '30px', width: 164 }}>
				<Box
					component='img'
					src={brand}
					alt=''
					sx={{
						maxWidth: '100%',
						display: 'block',
						objectFit: 'cover'
					}}
				/>
			</Box>
		))}
	</Box>
</Box>; */}
