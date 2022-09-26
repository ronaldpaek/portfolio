import React from 'react';
import { Box } from '@mui/material';

import { navLinks } from '@constants';
import { MobileLink } from './';
import { useOpenContext } from '@contexts';

const MobileNavigation = () => {
	const { open } = useOpenContext();

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
				{navLinks.map((link, i) => (
					<MobileLink key={i} {...link} />
				))}
			</Box>
		</Box>
	);
};

export default MobileNavigation;
