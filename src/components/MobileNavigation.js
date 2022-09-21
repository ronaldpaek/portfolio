import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Link, Icon } from '@mui/material';

import { navLinks } from '@data';

const MobileNavigation = ({ open, handleMenuToggle }) => {
	return (
    <Box component='nav' sx={{
      display: { xs: 'block', lg: 'none' }
    }}>
			<Box
				component='ul'
				sx={{
					display: open ? 'block' : 'none',
					boxShadow: 3,
					borderBottomRightRadius: 20,
					borderBottomLeftRadius: 20,
					width: 1,
          position: 'absolute',
					left: 0,
          top: '5rem',
					bgcolor: theme => theme.mobileMenu.bgcolor
				}}>
				{navLinks.map(({ title, path, icon }, i) => (
					<Box key={i} component='li' onClick={handleMenuToggle}>
						<Link
							to={path}
							component={RouterLink}
							sx={theme => ({
								display: 'flex',
								alignItems: 'center',
								color: theme.mobileMenu.color,
								py: '0.625rem',
								pl: '1rem',
								px: { md: '1rem', xl: '1.25rem' },
								'&:hover': {
									color: theme.gradient.two
								},
								'&.active': {
									color: theme.gradient.two
								}
							})}>
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
