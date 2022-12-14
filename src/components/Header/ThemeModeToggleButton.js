import React from 'react';
import { IconButton, Icon } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useColorModeContext } from '@contexts';

const ThemeModeToggleButton = ({ displayMode }) => {
	const { handleToggleColorMode } = useColorModeContext();

	return (
		<IconButton
			onClick={handleToggleColorMode}
			sx={{
				display:
					displayMode === 'mobile'
						? { xs: 'inline-flex', lg: 'none' }
						: { xs: 'none', lg: 'inline-flex' },
				width: 44,
				height: 44,
				ml: 2,
				bgcolor: 'themeButton.bgcolor',
				color: 'themeButton.color',
				transition: theme =>
					theme.transitions.create(['background-color', 'color'], {
						duration: theme.transitions.duration.standard,
						easing: theme.transitions.easing.easeInOut
					}),

				'&:hover': {
					color: 'white',
					bgcolor: 'themeButton.hover'
				}
			}}
		>
			<Icon
				component={FaMoon}
				sx={theme => ({
					display: theme.palette.mode === 'light' ? 'block' : 'none',
					fontSize: '1.25rem'
				})}
			/>
			<Icon
				component={FaSun}
				sx={theme => ({
					display: theme.palette.mode === 'dark' ? 'block' : 'none',
					fontSize: '1.25rem'
				})}
			/>
		</IconButton>
	);
};

export default ThemeModeToggleButton;
