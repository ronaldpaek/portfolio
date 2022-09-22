export const customLightMode = {
	custom: {
		// LIGHT MODE
		neutral: { primary: '#000', secondary: '#F3F6F6' },
		toggle: { bgcolor: '#FFF' },
		mobileMenu: { bgcolor: '#FFF', color: '#44566C' },
		footer: { main: '#F8FBFB' }
	}
};
export const customDarkMode = {
	custom: {
		// DARK MODE
		neutral: { primary: '#FFF', secondary: '#212425' },
		toggle: { bgcolor: '#4D4D4D', color: '#FFF' },
		mobileMenu: { bgcolor: '#1D1D1D', color: '#FFF' },
		footer: { main: '#212425' }
	}
};

/* customLightModePalette  */

export const customLightModePalette = {
	primary: { main: '#FFF' },
	secondary: { main: '#44566C' }
};

/* customDarkModePalette  */

export const customDarkModePalette = {
	primary: { main: '#212425' },
	secondary: { main: '#A6A6A6' }
};

/* customBreakPoints  */

export const customBreakpoints = {
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280
		}
	}
};

/* customSpacing  */

export const customSpacing = { spacing: 4 };

/* customTypography */

export const customTypography = {
	typography: {
		allVariants: {
			fontFamily: 'Poppins'
		},
		h2: {
			fontFamily: 'Roboto Slab, serif',
			fontSize: '2.5rem',
			fontWeight: 700
		}
	}
};

/* customComponents  */

export const customComponents = {
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
};

export const customTheme = {
	...customBreakpoints,
	...customSpacing,
	...customTypography,
	...customComponents
};
