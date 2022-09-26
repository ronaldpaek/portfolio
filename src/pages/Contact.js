import React from 'react';
import { Box, Container } from '@mui/material';

import { Footer, PageTitle } from '@components';
import { PersonalContact, MessageBox } from '@components/Contact';
import { StyledSection } from '@styles';

const Contact = () => {
	return (
		<StyledSection>
			<Container
				sx={{
					px: {
						xs: 4,
						sm: 5,
						md: 10,
						lg: 20
					}
				}}
			>
				<Box py={12}>
					<PageTitle pageTitle='Contact' mb='40px' />
					<Box
						sx={{
							columnGap: 20,
							display: {
								lg: 'flex'
							}
						}}
					>
						<PersonalContact />
						<MessageBox />
					</Box>
				</Box>
			</Container>
			<Footer />
		</StyledSection>
	);
};

export default Contact;
