import React, { createContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ColorModeContext = createContext(null);

const AppThemeProvider = ({ children }) => {
	const [mode, setMode] = useState('light');

	const toggleColorMode = () => {
		setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
	};

	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 640,
				md: 768,
				lg: 1024,
				xl: 1280
			}
		},
		spacing: 4,
		palette: {
			mode,
			...(mode === 'light'
				? {
						primary: { main: '#44566C' },
						secondary: { main: '#FFF' }
				  }
				: {
						primary: { main: '#A6A6A6' },
						secondary: { main: '#212425' }
				  })
		},
		typography: {
			allVariants: {
				fontFamily: 'Poppins'
			}
		}
	});

	return (
		<ColorModeContext.Provider value={toggleColorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export { AppThemeProvider, ColorModeContext };
