import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Header } from '@components';
import OpenContextProvider from '@contexts/OpenContextProvider';
import { Home, About, Resume, Portfolio, Blogs, Contact } from '@pages';
import { AppContainer } from '@styles';

function App() {
	return (
		<OpenContextProvider>
			<CssBaseline />
			<AppContainer>
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
			</AppContainer>
		</OpenContextProvider>
	);
}

export default App;
