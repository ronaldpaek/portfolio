import React from 'react';
import { IconButton } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

const MobileMenuToggleButton = ({ handleMenuToggle, open }) => {
	return (
		<IconButton
			onClick={handleMenuToggle}
			sx={{
				color: 'primary.main',
				ml: 3,
				height: 40,
				alignItems: 'center',
				justifyContent: 'center',
				width: { xs: 40, lg: 50 },
				display: { xs: 'flex', lg: 'none' },
				bgcolor: '#FFF',
				'&:hover': {
					backgroundImage: 'linear-gradient(to right, #DD2476, #FA5252)'
				}
			}}>
			<Menu sx={{ display: !open ? 'block' : 'none' }} />
			<Close sx={{ display: open ? 'block' : 'none' }} />
		</IconButton>
	);
};

export default MobileMenuToggleButton;
