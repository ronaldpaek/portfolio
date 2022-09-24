import React, { createContext, useState, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
	customTheme,
	customLightModePalette,
	customDarkModePalette
} from '../styles';

export const AppThemeProvider = ({ children }) => {
	const [mode, setMode] = useState('light');

	const toggleColorMode = () => {
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
		<ColorModeContext.Provider value={{ mode, toggleColorMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

const ColorModeContext = createContext(null);

export const useColorModeContext = () => useContext(ColorModeContext);
