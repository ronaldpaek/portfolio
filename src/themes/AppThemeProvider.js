import React, { createContext, useState, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
	customTheme,
	customLightMode,
	customDarkMode,
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
		palette: {
			mode,
			...(mode === 'light' ? customLightModePalette : customDarkModePalette)
		},
		...(mode === 'light' ? customLightMode : customDarkMode),
		gradient: {
			main: 'linear-gradient(to right, #FA5252, #DD2476)',
			secondary: 'linear-gradient(to right, #DD2476, #FA5252)'
		}
	});

	return (
		<ColorModeContext.Provider value={{ mode, toggleColorMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

const ColorModeContext = createContext(null);

export const useColorModeContext = () => useContext(ColorModeContext);
