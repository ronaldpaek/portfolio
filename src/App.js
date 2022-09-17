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

	return (
		<Box>
			<CssBaseline enableColorScheme={true} />
			<StyledRootContainer
				sx={{
					backgroundImage: `url(${
						theme.palette.mode === 'light' ? bg : bgDark
					})`
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
