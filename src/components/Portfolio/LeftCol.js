import React from 'react';
import { Stack, Typography, Icon, Box } from '@mui/material';

const LeftCol = ({ column1 }) => {
	return (
		<Box
			sx={{
				'& > p + p': {
					mt: 2
				}
			}}
		>
			{column1.map(({ icon, title, desc }, i) => (
				<Stack
					key={i}
					component={Typography}
					flexDirection='row'
					alignItems='center'
					sx={{
						fontSize: { xs: '15px', sm: '1.125rem' },
						color: 'text.header'
					}}
				>
					<Icon
						component={icon}
						sx={{
							fontSize: { sm: '1.125rem', md: '1.25rem' },
							display: { xs: 'none', sm: 'block' },
							mr: 2,
							color: 'text.headeder'
						}}
					/>
					{title} :&nbsp;<Box component='span' color='text.header'>{desc}</Box>
				</Stack>
			))}
		</Box>
	);
};

export default LeftCol;
