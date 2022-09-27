import React, { useState } from 'react';
import { Container, Box, Modal } from '@mui/material';

import { about } from '@assets';
import { dummyData, loremText } from '@constants';
import { Section } from '@styles';
import { PageTitle, Footer, BlogModalCard, BlogCard } from '@components';

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
		<Section>
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
					<Box
						display='grid'
						sx={{
							gridTemplateColumns: {
								xs: 'repeat(1, 1fr)',
								sm: 'repeat(2, 1fr)',
								lg: 'repeat(3, 1fr)'
							},
							mt: '30px',
							mb: 6,
							columnGap: 10,
							rowGap: 7
						}}
					>
						{dummyData.map((blog, i) => (
							<BlogCard
								key={i}
								{...blog}
								handleModalCard={() => handleModalCard(blog.id)}
							/>
						))}
					</Box>
				</Box>
			</Container>
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
			<Footer />
		</Section>
	);
};

export default Blogs;
