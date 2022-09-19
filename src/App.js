import React from 'react';
import { Container, Box, CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, About, Resume, Portfolio, Blogs, Contact } from './pages';
import { bg, bgDark } from './assets';

function App() {
	const theme = useTheme();

	return (
		<Box
			sx={{
				minHeight: '100vh',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				pb: { md: 16 },
				backgroundImage: `url(${theme.palette.mode === 'light' ? bg : bgDark})`
			}}>
			<Box>
				<CssBaseline />
				<Container sx={{ maxWidth: { xl: 1280, lg: 1024} }} disableGutters>
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
			</Box>
		</Box>
	);
}

export default App;
