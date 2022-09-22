import React from 'react';
import { Typography } from '@mui/material';
import { useOpenContext } from '../contexts';

const PageTitle = ({ pageTitle }) => {
	const { open } = useOpenContext();

	return (
		<Typography
			component='h2'
			variant='h2'
			sx={theme => ({
				mt: { xs: 12, lg: 0 },
				position: 'relative',
				display: 'inline-block',
				zIndex: open ? -1 : 0,
				'&:after': {
					content: '""',
					left: '13rem',
					position: 'absolute',
					top: '50%',
					height: '0.125rem',
					borderRadius: '.375rem',
					backgroundImage: theme.gradient.main,
					'@media (min-width: 768px)': {
						width: '12rem'
					}
				}
			})}
		>
			{pageTitle}
		</Typography>
	);
};

export default PageTitle;
