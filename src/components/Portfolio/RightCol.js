import React from 'react';
import { Stack, Icon, Typography, Box, Link } from '@mui/material';

const RightCol = ({ column2 }) => {
	return (
		<Box
			sx={{
				'& > p + p': {
					mt: 2
				}
			}}
		>
			{column2.map(({ icon, title, desc }, i) => (
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
							color: 'text.header',
							mr: 2
						}}
					/>
					{title} :&nbsp;
					<Box component='span'>
						{title === 'Preview' ? (
							<Link href='#' sx={{ color: 'inherit' }}>
								www.envato.com
							</Link>
						) : (
							desc
						)}
					</Box>
				</Stack>
			))}
		</Box>
	);
};

export default RightCol;
