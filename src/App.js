import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, About, Resume, Portfolio, Blogs, Contact } from './pages';
import { StyledRootContainer } from './styles';
import { bg, bgDark } from './assets';

function App() {
	const theme = useTheme();
	const lightMode = theme.palette.mode === 'light';
	// const [mode, setMode] = useState('light');

	// const theme = createTheme({
	// 	breakpoints: {
	// 		values: {
	// 			xs: 0,
	// 			sm: 768,
	// 			md: 1024,
	// 			lg: 1280,
	// 			xl: 1536
	// 		}
	// 	},
	// 	typography: {
	// 		fontFamily: ['Poppins', 'sans-serif', 'Roboto'].join(','),
	// 		h2: {
	// 			fontSize: theme => theme.palette.pxToRem(40),
	// 			fontWeight: 700
	// 		}
	// 	},
	// 	palette: {
	// 		mode,
	// 		primary: {
	// 			main: mode === 'light' ? '#44566C' : '#A6A6A6'
	// 		}
	// 	},
	// 	components: {
	// 		MuiLink: {
	// 			styleOverrides: {
	// 				root: {
	// 					backgroundColor: mode === 'light' ? '#FFF' : '#212425'
	// 				}
	// 			}
	// 		},
	// 		MuiButtonBase: {
	// 			styleOverrides: {
	// 				root: {
	// 					backgroundColor: mode === 'light' ? '#FFF' : 'rgb(59, 64, 65)',
	// 					'&:hover': {
	// 						backgroundImage: 'linear-gradient(to right, #DD2476, #FA5252)'
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// });

	// const handleToggleTheme = () => {
	// 	setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
	// };
	return (
		<Box>
			<CssBaseline />
			<StyledRootContainer
				sx={{
					backgroundImage: `url(${lightMode ? bg : bgDark})`
				}}>
				<Container sx={{ maxWidth: { lg: 1280, md: 992 } }} disableGutters>
					<Header />
					<Routes>
						<Route
							path='/'
							element={<Home name='Monalisa Ashley' title='Ui/Ux Designer' />}
						/>
						<Route path='about' element={<About />} />
						<Route path='resume' element={<Resume />} />
						<Route path='works' element={<Portfolio />} />
						<Route path='blogs' element={<Blogs />} />
						<Route path='contact' element={<Contact />} />
					</Routes>
				</Container>
			</StyledRootContainer>
		</Box>
	);
}

export default App;
