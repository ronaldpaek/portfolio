import React from 'react'
import { Stack, Typography, Icon } from '@mui/material';

const ColumnTitle = ({ title, icon }) => {
  return (
		<Stack
			direction='row'
			alignContent='center'
			mb={4}
			sx={{
				'& > svg + h4': { ml: 2 }
			}}
		>
			<Icon component={icon} sx={{ color: '#F95054', fontSize: '2rem' }} />
			<Typography component='h4' sx={{ fontWeight: 500, fontSize: '1.625rem' }}>
				{title}
			</Typography>
		</Stack>
	);
}

export default ColumnTitle;