// import React, { createContext, useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// // export const ColorModeContext = createContext(null);

// export const ColorModeProvider = ({ children }) => {
// 	const [mode, setMode] = useState('light');

// 	const toggleColorMode = () => {
// 		setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
// 	};

// 	const theme = createTheme({
// 		breakpoints: {
// 			values: {
// 				xs: 0,
// 				sm: 640,
// 				md: 768,
// 				lg: 1024,
// 				xl: 1280
// 			}
// 		},
// 		palette: {
// 			mode,
// 			primary: {
// 				main: mode === 'light' ? '#44566C' : '#A6A6A6',
// 				secondary: mode === 'light' ? '#FFFFFF' : '#212425'
// 			}
// 		},
// 	});

// 	return (
// 		<ColorModeContext.Provider value={{ toggleColorMode }}>
// 			<ThemeProvider theme={theme}>{children}</ThemeProvider>
// 		</ColorModeContext.Provider>
// 	);
// };
