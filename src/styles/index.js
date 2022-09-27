import { Box } from '@mui/material';
import { bg, bgDark } from '@assets';

/* custom styled components */

export const Section = ({ children }) => (
	<Box
		component='section'
		sx={{
			bgcolor: 'resume.bgcolor',
			borderRadius: { lg: '1rem' }
		}}
	>
		{children}
	</Box>
);

export const AppContainer = ({ children }) => (
	<Box
		sx={{
			minHeight: '100vh',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundAttachment: 'fixed',
			width: 1,
			pb: { md: 16 },
			backgroundImage: theme =>
				`url(${theme.palette.mode === 'light' ? bg : bgDark})`
		}}
	>
		{children}
	</Box>
);

/* custom palette */

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
		active: { mobile: { color: '#FA5252' } },
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
		},
		resume: {
			bgcolor: 'white',
			columnTitle: {
				color: '#F95054'
			},
			columnItem: {
				p: { color: 'black' }
			},
			knowledges: {
				button: { bgcolor: '#EDF2F2' }
			},
			skills: {
				one: { color: '#526377' },
				two: { color: '#526377' },
				bgcolor: '#F8FBFB'
			}
		},
		portfolio: {
			modal: {
				bgcolor: 'white'
			}
		},
		blogs: {
			box: {
				bgcolor: 'white'
			},
			textArea: {
				bgcolor: '#F3F6F6'
			},
			input: {
				border: {
					color: '#B5B5B5',
				}
			}
		},
		contact: {
			input: {
				bgcolor: '#F8FBFB'
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
				color: 'white'
			}
		},
		active: { mobile: { color: '#FA5252' } },
		menuBar: { bgcolor: 'black' },
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
		},
		resume: {
			bgcolor: '#111',
			columnTitle: {
				color: '#F95054'
			},
			columnItem: {
				p: { color: '#B7B7B7' }
			},
			knowledges: {
				button: { bgcolor: '#1C1C1C' }
			},
			skills: {
				one: { color: '#A6A6A6' },
				two: { color: '#526377' },
				bgcolor: '#0D0D0D'
			}
		},
		portfolio: {
			modal: {
				bgcolor: 'rgb(50 50 50)'
			}
		},
		blogs: {
			box: {
				bgcolor: '#232220'
			},
			textArea: {
				bgcolor: '#0B0B0B5E'
			},
			input: {
				border: {
					color: '#333'
				}
			}
		},
		contact: {
			input: {
				bgcolor: '#111'
			}
		}
	}
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
			fontFamily: 'Poppins, sans-serif',
			fontWeight: 500
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
					'@media (min-width: 992px)': {
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
