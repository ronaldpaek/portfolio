import React from 'react';
import { Stack, Typography, Icon } from '@mui/material';

const ResumeTitle = ({ title, icon }) => {
	return (
		<Stack
			direction='row'
			alignContent='center'
			mb={4}
			sx={{
				'& > svg + h4': { ml: 2 }
			}}
		>
			<Icon
				component={icon}
				sx={{ color: 'resume.columnTitle.color', fontSize: '2rem' }}
			/>
			<Typography component='h4' sx={{ fontSize: '1.625rem' }}>
				{title}
			</Typography>
		</Stack>
	);
};

export default ResumeTitle;
