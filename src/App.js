import React from 'react';
import { Container, Box, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { OpenContextProvider } from './contexts';
import { Header } from './components';
import { Home, About, Resume, Portfolio, Blogs, Contact } from './pages';
import { bg, bgDark } from './assets';

function App() {
	return (
		<OpenContextProvider>
			<Box
				sx={theme => ({
					minHeight: '100vh',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					width: 1,
					pb: { md: 16 },
					backgroundImage: `url(${
						theme.palette.mode === 'light' ? bg : bgDark
					})`
				})}
			>
				<Box>
					<CssBaseline />
					<Container
						sx={{
							'@media (max-width: 992px)': {
								maxWidth: '992px'
							},
							maxWidth: { xl: 1280 }
						}}
					>
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
		</OpenContextProvider>
	);
}

export default App;
