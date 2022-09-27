import React from 'react';
import { Box } from '@mui/material';

import { AboutMeImage, WhoAmI, PersonalInfo } from './';
import { PageTitle } from '@components';

const AboutMe = () => {
	return (
		<Box py={12}>
			<PageTitle pageTitle='About Me' />
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(12, 1fr)',
					alignItems: 'center',
					pt: { xs: 4, md: '40px' },
					gap: { md: 10 }
				}}
			>
				<AboutMeImage />
				<Box
					sx={{
						gridColumn: { xs: 'span 12', md: 'span 8' },
						'& > * + *': { my: 2.5 }
					}}
				>
					<WhoAmI />
					<PersonalInfo />
				</Box>
			</Box>
		</Box>
	);
};

export default AboutMe;
