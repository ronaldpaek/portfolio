import React from 'react';
import { Box, Link, Icon } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

const DesktopLink = ({ icon, title, path }) => {
	return (
		<Box component='li'>
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
					bgcolor: 'nav.bgcolor',
					color: 'nav.color',
					fontSize: 13,
					'&:hover': {
						backgroundImage: theme.backgroundImage.nav,
						color: 'white'
					},
					'&.active': {
						backgroundImage: theme.backgroundImage.nav,
						color: 'white'
					}
				})}
			>
				<Icon component={icon} sx={{ mr: 2 }} />
				{title}
			</Link>
		</Box>
	);
};

export default DesktopLink;
