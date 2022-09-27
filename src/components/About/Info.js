import React from 'react';
import { Stack, Icon, Box, Typography } from '@mui/material';

const Info = ({ component, color, title, description }) => {
	return (
		<Stack direction='row'>
			<Stack
				direciton='row'
				component='span'
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					mr: 2.5,
					borderRadius: '.375rem',
					width: '3rem',
					boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.08)'
				}}
			>
				<Icon component={component} sx={{ color }} />
			</Stack>
			<Box sx={{ '& > * + *': { my: 1 } }}>
				<Typography
					sx={{
						fontSize: '.75rem',
						color: 'text.p.about'
					}}
				>
					{title}
				</Typography>
				<Typography component='h6' fontWeight={500}>
					{description}
				</Typography>
			</Box>
		</Stack>
	);
};

export default Info;
