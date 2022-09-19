import React from 'react';
import { IconButton, Icon } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeModeToggleButton = ({ handleToggleColorMode, displayMode }) => {
	return (
		<IconButton
			onClick={handleToggleColorMode}
			sx={{
				display:
					displayMode === 'mobile'
						? { xs: 'flex', lg: 'none' }
						: { xs: 'none', lg: 'flex' },
				alignItems: 'center',
				justifyContent: 'center',
				width: 44,
				height: 44,
				ml: 2,
				bgcolor: theme => (theme.palette.mode === 'light' ? '#FFF' : '#4D4D4D'),
				'&:hover': {
					backgroundImage: 'linear-gradient(to right, #DD2476, #FA5252)'
				}
			}}>
			<Icon
				component={FaSun}
				sx={{
					display: theme => (theme.palette.mode === 'light' ? 'block' : 'none'),
					color: '#000',
					fontSize: '1.25rem'
				}}
			/>
			<Icon
				component={FaMoon}
				sx={{
					display: theme => (theme.palette.mode === 'dark' ? 'block' : 'none'),
					color: '#FFF',
					fontSize: '1.25rem'
				}}
			/>
		</IconButton>
	);
};

export default ThemeModeToggleButton;
