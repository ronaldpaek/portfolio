import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';

import { WhatIDo, Clients, Footer } from '../components';
import { AboutMe } from '../components/About';
import { fetchData } from '../utils/fetchData';

const About = () => {
	const [skills, setSkills] = useState([]);
	useEffect(() => {
		fetchData('skills', setSkills);
	}, []);

	return (
		<Box component='section'>
			<Container
				sx={{
					px: {
						xs: 4,
						sm: 5,
						md: 10,
						lg: 20
					},
					borderRadius: { lg: '1rem' },
					bgcolor: 'primary.main',
					maxWidth: { xl: '1280px' },
					'@media (max-width: 992px)': {
						maxWidth: '992px'
					}
				}}
			>
				<Box>
					<AboutMe />
					<WhatIDo skills={skills} />
					<Clients />
					<Footer />
				</Box>
			</Container>
		</Box>
	);
};

export default About;
