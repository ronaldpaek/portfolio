import React from 'react';
import { Stack } from '@mui/material';

import {
	DesktopNavigation,
	Logo,
	MobileMenuToggleButton,
	MobileNavigation,
	ThemeModeToggleButton
} from '@header';

const Header = () => {
	return (
		<Stack
			component='header'
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{
				top: 0,
				left: 0,
				width: 1,
				zIndex: 1,
				position: { xs: 'fixed', lg: 'static' }
			}}
		>
			<Stack
				direction='row'
				justifyContent='space-between'
				sx={{
					width: 1,
					px: 4,
					bgcolor: {
						xs: 'menuBar.bgcolor',
						lg: 'transparent'
					}
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
						<ThemeModeToggleButton displayMode='mobile' />
						<MobileMenuToggleButton />
					</Stack>
				</Stack>
			</Stack>
			<DesktopNavigation />
			<MobileNavigation />
		</Stack>
	);
};

export default Header;
