import React, { useState, useContext } from 'react';
import { Stack } from '@mui/material';

import {
	DesktopNavigation,
	Logo,
	MobileMenuToggleButton,
	MobileNavigation,
	ThemeModeToggleButton
} from './';
import { ColorModeContext } from '@themes';

const Header = () => {
	const [open, setOpen] = useState(false);
	const handleMenuToggle = () => setOpen(open => !open);
	const toggleColorMode = useContext(ColorModeContext);

	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			component='header'
			sx={{
				top: 0,
				left: 0,
				width: 1,
				zIndex: 9999,
				position: { xs: 'fixed', lg: 'static' }
			}}>
			<Stack
				direction='row'
				justifyContent='space-between'
				sx={{
					width: 1,
					px: 4,
					bgcolor: { xs: 'secondary.main', lg: 'transparent' }
				}}>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					spacing={4}
					sx={{
						width: 1,
						my: { xs: 5, lg: 8 }
					}}>
					<Logo />
					<Stack direction='row' alignItems='center'>
						<ThemeModeToggleButton
							handleToggleColorMode={toggleColorMode}
							displayMode='mobile'
						/>
						<MobileMenuToggleButton
							handleMenuToggle={handleMenuToggle}
							open={open}
						/>
					</Stack>
				</Stack>
			</Stack>
			<DesktopNavigation handleToggleColorMode={toggleColorMode} />
			<MobileNavigation open={open} handleMenuToggle={handleMenuToggle} />
		</Stack>
	);
};

export default Header;
