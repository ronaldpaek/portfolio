import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Stack, Link, Icon } from '@mui/material';

import { navLinks } from '@data';
import { ThemeModeToggleButton } from './';

const DesktopNavigation = () => {
	return (
		<Box component='nav' sx={{ display: { xs: 'none', lg: 'block' } }}>
			<Stack direction='row' my={12} component='ul'>
				{navLinks.map(({ title, path, icon }, i) => (
					<Box key={i} component='li'>
						<Link
							component={RouterLink}
							to={path}
							sx={theme => ({
								display: 'flex',
								alignItems: 'center',
								mx: '0.625rem',
								borderRadius: '0.375rem',
								py: '0.625rem',
								px: {
									md: '1rem',
									xl: '1.25rem'
								},
								bgcolor: 'primary.main',
								color: 'secondary.main',
								'&:hover': {
									backgroundImage: theme.gradient.main,
									color: 'white'
								},
								'&.active': {
									backgroundImage: theme.gradient.main,
									color: 'white'
								}
							})}
						>
							<Icon component={icon} sx={{ mr: 2 }} />
							{title}
						</Link>
					</Box>
				))}
				<Box component='li'>
					<ThemeModeToggleButton displayMode='desktop' />
				</Box>
			</Stack>
		</Box>
	);
};

export default DesktopNavigation;
