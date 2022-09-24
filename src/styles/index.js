// export const customLightMode = {
// 	custom: {
// 		// LIGHT MODE
// 		neutral: { primary: '#000', secondary: '#F3F6F6' },
// 		toggle: { bgcolor: '#FFF' },
// 		mobileMenu: { bgcolor: '#FFF', color: '#44566C' },
// 		footer: { main: '#F8FBFB' }
// 	}
// };
// export const customDarkMode = {
// 	custom: {
// 		// DARK MODE
// 		neutral: { primary: '#FFF', secondary: '#212425' },
// 		toggle: { bgcolor: '#4D4D4D', color: '#FFF' },
// 		mobileMenu: { bgcolor: '#1D1D1D', color: '#FFF' },
// 		footer: { main: '#212425' }
// 	}
// };

/* customLightModePalette  */

// export const customLightModePalette = {
// 	primary: { main: '#FFF' },
// 	secondary: { main: '#44566C' }
// };

export const customLightModePalette = {
	palette: {
		mode: 'light',
		container: { bgcolor: 'white' },
		mobileMenu: {
			bgcolor: 'white',
			nav: {
				color: '#44566C'
			}
		},
		active: { mobile: '#FAF2F2' },
		menuBar: { bgcolor: '#F3F6F6' },
		nav: {
			color: '#44566C',
			bgcolor: 'white'
		},
		social: {
			bgcolor: '#F3F6F6'
		},
		themeButton: {
			color: 'black',
			bgcolor: 'white',
			hover: '#EF4060'
		},
		menuButton: {
			color: 'black',
			bgcolor: 'white'
		},
		text: {
			header: 'black',
			p: {
				home: '#7B7B7B',
				about: '#44566C',
				resume: 'black'
			},
			span: {
				resume: '#44566C',
				skills: {
					title: '#526377',
					value: '#526377'
				}
			},
			button: {
				color: '#44566C',
				bgcolor: '#EDF2F2'
			}
		}
	}
};

export const customDarkModePalette = {
	palette: {
		mode: 'dark',
		container: { bgcolor: '#111' },
		mobileMenu: {
			bgcolor: '#1D1D1D',
			nav: {
				color: '#white'
			}
		},
		active: { mobile: { color: '#FAF2F2' } },
		menuBar: { bgcolor: '#F3F6F6' },
		nav: {
			color: '#A6A6A6',
			bgcolor: '#212425'
		},
		social: {
			bgcolor: '#212425'
		},
		themeButton: {
			color: 'black',
			bgcolor: '#4D4D4D',
			hover: '#EF4060'
		},
		menuButton: {
			color: 'black',
			bgcolor: 'white'
		},
		text: {
			header: 'white',
			p: {
				home: '#7B7B7B',
				about: '#A6A6A6',
				resume: '#B7B7B7'
			},
			span: {
				resume: '#B7B7B7',
				skills: {
					title: '#A6A6A6',
					value: '#526377'
				}
			},
			button: {
				color: '#A6A6A6',
				bgcolor: '#1C1C1C'
			}
		}
	}
};

// /* customDarkModePalette  */

// export const customDarkModePalette = {
// 	primary: { main: '#212425' },
// 	secondary: { main: '#A6A6A6' }
// };

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
				},
				button: {
					border: 0
				}
			}
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: 'none'
				}
			}
		},
		MuiContainer: {
			defaultProps: {
				disableGutters: true,
				maxWidth: false
			},
			styleOverrides: {
				root: {
					'@media (min-width: 992px && max-width: 1280px)': {
						maxWidth: 992
					},
					'@media (min-width: 1280px)': {
						maxWidth: 1280
					}
				}
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
