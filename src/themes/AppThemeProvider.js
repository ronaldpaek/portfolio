import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
	customTheme,
	customLightModePalette,
	customDarkModePalette
} from '../styles';
import { ColorModeContext } from '../contexts';

const AppThemeProvider = ({ children }) => {
	const [mode, setMode] = useState('light');

	const handleToggleColorMode = () => {
		setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
	};

	const theme = createTheme({
		...customTheme,
		...(mode === 'light' ? customLightModePalette : customDarkModePalette),
		backgroundImage: {
			nav: 'linear-gradient(to right, #FA5252, #DD2476)',
			button: 'linear-gradient(to right, #DD2476, #FA5252)'
		},
		border: '2px solid rgb(33 36 37)'
	});

	return (
		<ColorModeContext.Provider value={{ mode, handleToggleColorMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default AppThemeProvider;
