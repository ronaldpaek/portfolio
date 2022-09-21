import React, { useContext } from 'react';
import { Stack } from '@mui/material';

import {
	DesktopNavigation,
	Logo,
	MobileMenuToggleButton,
	MobileNavigation,
	ThemeModeToggleButton
} from './';
import { ColorModeContext } from '@themes';
import { OpenContext } from '../contexts';

const Header = () => {
	const handleMenuToggle = () => setOpen(open => !open);
	const toggleColorMode = useContext(ColorModeContext);
	const { open, setOpen } = useContext(OpenContext);

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
				position: { xs: 'fixed', lg: 'static' }
			}}
		>
			<Stack
				direction='row'
				justifyContent='space-between'
				sx={{
					width: 1,
					px: 4,
					bgcolor: theme => ({ xs: theme.neutral.secondary, lg: 'transparent' })
				}}
			>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{
						width: 1,
						my: { xs: 5, lg: 8 },
						'& > * + * ': {
							ml: 4
						}
					}}
				>
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
