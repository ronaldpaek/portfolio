import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Stack, Link, Icon } from '@mui/material';

import { navLinks } from '@data';
import { ThemeModeToggleButton } from './';
import { StayPrimaryLandscape } from '@mui/icons-material';

const DesktopNavigation = ({ handleToggleColorMode }) => {
	return (
		<Box component='nav' sx={{ display: { xs: 'none', lg: 'block' } }}>
			<Stack direction='row' my={12} component='ul'>
				{navLinks.map(({ title, path, icon }, i) => (
					<Box key={i} component='li'>
						<Link
							component={RouterLink}
							to={path}
							sx={{
								display: 'flex',
								alignItems: 'center',
								fontWeight: 500,
								fontSize: '.8125rem',
								mx: '0.625rem',
								borderRadius: '0.375rem',
								py: '0.625rem',
								px: {
									md: '1rem',
									xl: '1.25rem'
                },
                bgcolor: 'secondary.main',
								'&:hover': {
									backgroundImage: 'linear-gradient(to right, #DD2476, #FA5252)'
								},
								'&.active': {
									backgroundImage:
										'linear-gradient(to right, #DD2476, #FA5252)',
									color: '#FFF'
								}
							}}>
							<Icon component={icon} sx={{ mr: 2 }} />
							{title}
						</Link>
					</Box>
				))}
				<Box component='li'>
					<ThemeModeToggleButton
						displayMode='desktop'
						handleToggleColorMode={handleToggleColorMode}
					/>
				</Box>
			</Stack>
		</Box>
	);
};

export default DesktopNavigation;
