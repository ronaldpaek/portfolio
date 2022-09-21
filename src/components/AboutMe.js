import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';

import { AboutMeImage, WhoAmI, PersonalInfo } from './';
import { OpenContext } from '../contexts';

const AboutMe = () => {
	const { open } = useContext(OpenContext);

	return (
		<Box py={12}>
			<Typography
				component='h2'
				variant='h2'
				sx={theme => ({
					mt: { xs: 12, lg: 0 },
					position: 'relative',
					display: 'inline-block',
					zIndex: open ? -1 : 0,
					'&:after': {
						content: '""',
						left: '13rem',
						position: 'absolute',
						top: '50%',
						height: '0.125rem',
						borderRadius: '.375rem',
						backgroundImage: `linear-gradient(to right, ${theme.gradient.one}, ${theme.gradient.two})`,
						'@media (min-width: 768px)': {
							width: '12rem'
						}
					}
				})}
			>
				About Me
			</Typography>
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
