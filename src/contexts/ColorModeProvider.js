import React, { createContext, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext(null);

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  // const theme = useTheme();

	const toggleColorMode = () => {
		setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
	};

	// const styles = {
	// 	breakpoints: {
	// 		values: {
	// 			xs: 0,
	// 			sm: 640,
	// 			md: 768,
	// 			lg: 1024,
	// 			xl: 1536
	// 		}
	// 	},
	// 	palette: {
	// 		mode,
	// 		primary: {
	// 			main: mode === 'light' ? '#44566C' : '#A6A6A6'
	// 		}
	// 	},
	// 	components: {
	// 		MuiLinkBase: {
	// 			styleOverrides: {
	// 				root: {
	// 					color: theme => theme.palette.primary.main
	// 				}
	// 			}
	// 		}
	// 	}
	// };

	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 640,
				md: 768,
				lg: 1024,
				xl: 1536
			}
		},
		palette: {
			mode,
			primary: {
				main: mode === 'light' ? '#44566C' : '#A6A6A6',
				secondary: mode === 'light' ? '#FFFFFF' : '#212425'
			}
		},
		components: {
			MuiLink: {
				styleOverrides: {
					root: ({ theme }) => ({
						backgroundColor: theme.palette.primary.secondary
					})
				}
			},
			MuiIconButton: {
				styleOverrides: {
					root: ({ theme }) => ({
						color: theme.palette.common[mode === 'light' ? 'black' : 'white'],
						backgroundColor: mode === 'light' ? '#FFFFFF' : '#4D4D4D'
					})
				}
			}
		}
	});

	return (
		<ColorModeContext.Provider value={{ toggleColorMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
