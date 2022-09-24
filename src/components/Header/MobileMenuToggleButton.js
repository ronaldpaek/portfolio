import React from 'react';
import { IconButton } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

import { useOpenContext } from '../../contexts';

const MobileMenuToggleButton = () => {
	const { open, toggleOpenMenu } = useOpenContext();

	return (
		<IconButton
			onClick={toggleOpenMenu}
			sx={{
				color: 'black',
				ml: 3,
				height: 40,
				width: { xs: 40, lg: 50 },
				display: { lg: 'none' },
				bgcolor: 'white',
				'&:hover': {
					bgcolor: 'themeButton.hover'
				}
			}}
		>
			<Menu sx={{ display: !open ? 'block' : 'none' }} />
			<Close sx={{ display: open ? 'block' : 'none' }} />
		</IconButton>
	);
};

export default MobileMenuToggleButton;
