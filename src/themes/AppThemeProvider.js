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

		gradient: {
			one: '#DD2476',
			two: '#FA5252'
		},
		...(mode === 'light'
			? {
					// LIGHT MODE
					neutral: { primary: '#000', secondary: '#F3F6F6' },
					toggle: { bgcolor: '#FFF' },
					mobileMenu: { bgcolor: '#FFF', color: '#44566C' },
					footer: { main: '#F8FBFB' }
			  }
			: {
					// DARK MODE
					neutral: { primary: '#FFF', secondary: '#212425' },
					toggle: { bgcolor: '#4D4D4D', color: '#FFF' },
					mobileMenu: { bgcolor: '#1D1D1D', color: '#FFF' },
					footer: { main: '#212425' }
			  }),

		palette: {
			mode,
			...(mode === 'light'
				? {
						// LIGHT MODE
						primary: { main: '#FFF' },
						secondary: { main: '#44566C' }
				  }
				: {
						// DARK MODE
						primary: { main: '#212425' },
						secondary: { main: '#A6A6A6' }
				  })
		},
		typography: {
			allVariants: {
				fontFamily: 'Poppins'
			},
			h2: {
				fontFamily: 'Roboto Slab, serif',
				fontSize: '2.5rem',
				fontWeight: 700
			}
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					img: {
						display: 'block',
						width: '100%',
						maxWidth: '100%'
					},
					ul: {
						padding: 0,
						margin: 0,
						listStyle: 'none'
					}
				}
			},
			MuiLink: {
				styleOverrides: {
					root: {
						textDecoration: 'none',
						fontSize: '.8125rem',
						fontWeight: 500
					}
				}
			},
			MuiContainer: {
				defaultProps: {
					disableGutters: true
				}
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
