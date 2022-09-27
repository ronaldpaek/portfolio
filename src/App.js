import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './app.css';

// Imported the header straight from the component
import Header from '@components/Header/Header';
import OpenContextProvider from './contexts/OpenContextProvider';
import { Home, About, Resume, Portfolio, Blogs, Contact } from '@pages';
import { StyledAppBox } from '@styles';

function App() {
	return (
		<OpenContextProvider>
			<CssBaseline />
			<StyledAppBox>
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
			</StyledAppBox>
		</OpenContextProvider>
	);
}

export default App;
