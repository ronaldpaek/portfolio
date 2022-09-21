import React from 'react';
import { IconButton } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

const MobileMenuToggleButton = ({ handleMenuToggle, open }) => {
	return (
		<IconButton
			onClick={handleMenuToggle}
			sx={theme => ({
				color: 'black',
				ml: 3,
				height: 40,
				width: { xs: 40, lg: 50 },
				display: { lg: 'none' },
				bgcolor: 'white',
				'&:hover': {
					backgroundImage: `linear-gradient(to right,${theme.gradient.one}, ${theme.gradient.two})`
				}
			})}>
			<Menu sx={{ display: !open ? 'block' : 'none' }} />
			<Close sx={{ display: open ? 'block' : 'none' }} />
		</IconButton>
	);
};

export default MobileMenuToggleButton;
