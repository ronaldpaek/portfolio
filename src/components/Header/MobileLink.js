import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Icon, Link } from '@mui/material';

import { useOpenContext } from '@contexts';

const MobileLink = ({ path, icon, title }) => {
	const { handleToggleOpenMenu } = useOpenContext();
	return (
		<Box component='li' onClick={handleToggleOpenMenu}>
			<Link
				to={path}
				component={RouterLink}
				sx={{
					display: 'flex',
					alignItems: 'center',
					color: 'mobileMenu.nav.color',
					fontSize: 13,
					py: '0.625rem',
					pl: '1rem',
					px: { md: '1rem', xl: '1.25rem' },
					transition: theme =>
						theme.transitions.create('color', {
							duration: theme.transitions.duration.standard,
							easing: theme.transitions.easing.easeInOut
						}),
					'&:hover': {
						color: 'active.mobile.color'
					},
					'&.active': {
						color: 'active.mobile.color'
					}
				}}
			>
				<Icon component={icon} sx={{ mr: 2, fontSize: '1.75rem' }} />
				{title}
			</Link>
		</Box>
	);
};

export default MobileLink;
