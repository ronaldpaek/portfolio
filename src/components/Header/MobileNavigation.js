import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Link, Icon } from '@mui/material';

import { navLinks } from '@data';
import { useOpenContext } from '../../contexts';

const MobileNavigation = () => {
	const { open, toggleOpenMenu } = useOpenContext();

	return (
		<Box
			component='nav'
			sx={{
				display: { xs: 'block', lg: 'none' }
			}}
		>
			<Box
				component='ul'
				sx={{
					display: open ? 'block' : 'none',
					boxShadow: '0 4px 4px rgb(0 0 0 / 0.2)',
					borderBottomRightRadius: 20,
					borderBottomLeftRadius: 20,
					width: 1,
					position: 'absolute',
					left: 0,
					top: '5rem',
					bgcolor: 'mobileMenu.bgcolor'
				}}
			>
				{navLinks.map(({ title, path, icon }, i) => (
					<Box key={i} component='li' onClick={toggleOpenMenu}>
						<Link
							to={path}
							component={RouterLink}
							sx={{
								display: 'flex',
								alignItems: 'center',
								color: 'mobileMenu.nav.color',
								py: '0.625rem',
								pl: '1rem',
								px: { md: '1rem', xl: '1.25rem' },
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
				))}
			</Box>
		</Box>
	);
};

export default MobileNavigation;
