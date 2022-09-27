import React, { useState } from 'react';
import { Container, Box, Modal } from '@mui/material';

import { about } from '@assets';
import { dummyData, loremText } from '@constants';
import { StyledSection } from '@styles';
import { PageTitle, Footer, BlogModalCard } from '@components';
import { BlogsContainer } from '@components/Blogs';

const Blogs = () => {
	const [card, setCard] = useState({});
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleModalCard = id => {
		const card = dummyData.find(item => item.id === id);
		setCard(card);
		handleOpen();
	};

	return (
		<StyledSection>
			<Container
				sx={{
					px: {
						xs: 4,
						sm: 5,
						md: 10,
						lg: '60px'
					}
				}}
			>
				<Box py={12}>
					<PageTitle pageTitle='Blogs' />
					<BlogsContainer handleModalCard={handleModalCard} />
				</Box>
				<Modal open={open} onClose={handleClose}>
					<Box>
						<BlogModalCard
							{...card}
							{...loremText}
							about={about}
							handleClose={handleClose}
						/>
					</Box>
				</Modal>
			</Container>
			<Footer />
		</StyledSection>
	);
};

export default Blogs;
