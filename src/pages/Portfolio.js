import React, { useState } from 'react';
import { Box, Modal, Container } from '@mui/material';

import { PortfolioModalCard, Footer } from '@components';
import { projects } from '@constants';
import { PageTitle } from '@components';
import { PortfolioLinks, PortfolioGallery } from '@components/Portfolio';
import { StyledSection } from '@styles';

const Portfolio = () => {
	const [card, setCard] = useState({});
	const [open, setOpen] = useState(false);
	const [filterChoice, setFilterChoice] = useState('all');

	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	const handleRenderCard = id => {
		const card = projects.find(card => card.id === id);
		console.log('test');
		setCard(card);
		handleOpen();
	};

	const handleFilter = item => {
		if (filterChoice === null || filterChoice === 'all') return true;
		return item.category.includes(filterChoice);
	};

	return (
		<StyledSection>
			<Container
				sx={{
					mb: 8,
					px: { xs: 4, sm: 5, md: 10, lg: '60px' }
				}}
			>
				<Box py={12}>
					<PageTitle pageTitle='Portfolio' />
					<PortfolioLinks setFilterChoice={setFilterChoice} />
				</Box>
				<PortfolioGallery
					handleRenderCard={handleRenderCard}
					handleFilter={handleFilter}
				/>
			</Container>
			<Modal open={open} onClose={handleClose}>
				<Box>
					<PortfolioModalCard {...card} handleClose={handleClose} />
				</Box>
			</Modal>
			<Footer />
		</StyledSection>
	);
};

export default Portfolio;
