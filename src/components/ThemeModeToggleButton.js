import React from 'react';
import { IconButton, Icon } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeModeToggleButton = ({ handleToggleColorMode, displayMode }) => {
	return (
		<IconButton
			onClick={handleToggleColorMode}
			sx={theme => ({
				display:
					displayMode === 'mobile'
						? { xs: 'inline-flex', lg: 'none' }
						: { xs: 'none', lg: 'inline-flex' },
				width: 44,
				height: 44,
				ml: 2,
				bgcolor: theme.toggle.bgcolor,
				color: theme.palette.mode === 'light' ? 'black' : 'white',
				'&:hover': {
					backgroundImage: `linear-gradient(${theme.gradient.one}, ${theme.gradient.two})`,
					color: 'white'
				}
			})}>
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
