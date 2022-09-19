import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Link, Icon } from '@mui/material';

import { navLinks } from '@data';

const MobileNavigation = ({ open, handleMenuToggle }) => {
	return (
		<Box component='nav' sx={{ display: { xs: 'block', lg: 'none' } }}>
			<Box
				component='ul'
				sx={{
					display: open ? 'block' : 'none',
					boxShadow:
						'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
					borderBottomRightRadius: 20,
					borderBottomLeftRadius: 20,
					width: 1,
					position: 'absolute',
					left: 0,
					top: '5rem',
					bgcolor: theme =>
						theme.palette.mode === 'light' ? '#FFF' : '#1D1D1D'
				}}>
				{navLinks.map(({ title, path, icon }, i) => (
					<Box key={i} component='li' onClick={handleMenuToggle}>
						<Link
							to={path}
							component={RouterLink}
							sx={{
								display: 'flex',
								alignItems: 'center',
								color: theme =>
									theme.palette.mode === 'light' ? '#44566C' : '#FFF',
								fontSize: '.8125rem',
								fontWeight: 500,
								py: '0.625rem',
								pl: '1rem',
								px: { md: '1rem', xl: '1.25rem' },
								'&:hover': {
									color: '#FA5252'
								},
								'&.active': {
									color: '#FA5252'
								}
							}}>
							<Icon component={icon} sx={{ mr: 2, fontSize: '1.25rem' }} />
							{title}
						</Link>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default MobileNavigation;
