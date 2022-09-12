import React, { useState } from 'react';
import { Container, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, About, Resume, Portfolio, Blogs, Contact } from './pages';

function App() {
	const [mode, setMode] = useState('light');

	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 768,
				md: 1024,
				lg: 1280,
				xl: 1536
			}
		},
		palette: {
			mode: mode
		}, 
		typography: {
			fontFamily: 'Roboto Slab, serif',
			h2: {
				fontSize: '2.5rem',
			}
		}
	});

	const handleToggleTheme = () => {
		setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ minHeight: '100vh', bgcolor: 'lightgray' }}>
				<Container
					sx={{ maxWidth: { lg: 1280, md: 992 } }} disableGutters >
					<Header handleToggleTheme={handleToggleTheme} />
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
			</Box>
		</ThemeProvider>
	);
}

export default App;
