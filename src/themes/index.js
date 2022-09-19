// export const customTheme = {
//   breakpoints,
// 	typography: {
// 		fontFamily: ['Poppins', 'sans-serif', 'Roboto'].join(','),
// 		// h2: {
// 		// 	fontSize: theme => theme.palette.pxToRem(40),
// 		// 	fontWeight: 700
// 		// }
// 	}
// 	// palette: {
// 	// 	mode,
// 	// 	primary: {
// 	// 		main: mode === 'light' ? '#44566C' : '#A6A6A6'
// 	// 	}
// 	// },
// 	// components: {
// 	// 	MuiLink: {
// 	// 		styleOverrides: {
// 	// 			root: {
// 	// 				backgroundColor: mode === 'light' ? '#FFF' : '#212425'
// 	// 			}
// 	// 		}
// 	// 	},
// 	// 	MuiButtonBase: {
// 	// 		styleOverrides: {
// 	// 			root: {
// 	// 				backgroundColor: mode === 'light' ? '#FFF' : 'rgb(59, 64, 65)',
// 	// 				'&:hover': {
// 	// 					backgroundImage: 'linear-gradient(to right, #DD2476, #FA5252)'
// 	// 				}
// 	// 			}
// 	// 		}
// 	// 	}
// 	// }
// };

// import breakpoints from './breakpoints';
// import customTheme from './customTheme';
import { AppThemeProvider, ColorModeContext } from './AppThemeProvider';

export { AppThemeProvider, ColorModeContext };
