import React from 'react';
import { Box, Typography, Icon, Stack } from '@mui/material';

import { infoList } from '../../constants';

const PersonalInfo = () => {
	return (
		<Box>
			<Typography
				component='h3'
				sx={{
					fontWeight: 500,
					fontSize: '1.5625rem',
					my: 5,
					color: 'text.header',
				}}
			>
				Personal Info
			</Typography>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)'
					},
					gap: 6
				}}
			>
				{infoList.map(({ title, description, component }, i) => (
					<Stack key={i} direction='row'>
						<Stack
							direciton='row'
							component='span'
							sx={{
								alignItems: 'center',
								justifyContent: 'center',
								mr: 2.5,
								borderRadius: '.375rem',
								width: '3rem',
								boxShadow: 3
							}}
						>
							<Icon component={component} />
						</Stack>
						<Box sx={{ '& > * + *': { my: 1 } }}>
							<Typography
								sx={{
									fontSize: '.75rem',
									color: 'text.p.home'
								}}
							>
								{title}
							</Typography>
							<Typography component='h6' fontWeight={500}>
								{description}
							</Typography>
						</Box>
					</Stack>
				))}
			</Box>
		</Box>
	);
};

export default PersonalInfo;
