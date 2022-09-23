import React from 'react';
import { Container, Box, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

// Imported the header straight from the component
import Header from './components/Header/Header';
import { OpenContextProvider } from './contexts';
import { Home, About, Resume, Portfolio, Blogs, Contact } from './pages';
import { bg, bgDark } from './assets';

function App() {
	return (
		<OpenContextProvider>
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
				<Box>
					<CssBaseline />
					<Container>
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
