import React from 'react';
import { Box, Stack } from '@mui/material';

import { navLinks } from '@constants';
import { ThemeModeToggleButton, DesktopLink } from './';

const DesktopNavigation = () => {
	return (
		<Box component='nav' sx={{ display: { xs: 'none', lg: 'block' } }}>
			<Stack direction='row' my={12} component='ul'>
				{navLinks.map((link, i) => (
					<DesktopLink key={i} {...link} />
				))}
				<Box component='li'>
					<ThemeModeToggleButton displayMode='desktop' />
				</Box>
			</Stack>
		</Box>
	);
};

export default DesktopNavigation;
