import React, { useState } from 'react';
import { Box, Typography, Stack, Modal } from '@mui/material';
import { Masonry } from '@mui/lab';

import { navList, itemData, projects } from '../constants';
import { Footer, PortfolioModalCard, PortfolioCard } from '../components';

const Portfolio = () => {
	const [card, setCard] = useState({});
	const [open, setOpen] = useState(false);
	const [filterChoice, setFilterChoice] = useState('all');
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleRenderCard = id => {
		const card = projects.find(card => card.id === id);
		setCard(card);
		handleOpen();
	};

	const handleFilter = item => {
		if (filterChoice === null || filterChoice === 'all') return true;
		return item.category.includes(filterChoice);
	};

	return (
		<Box
			component='section'
			sx={{
				backgroundColor: 'palegoldenrod',
				borderRadius: 5
			}}>
      <Box
        mb={2.5}
				sx={{
					paddingInline: {
						xs: 2,
						sm: 5,
						md: 7.5
					}
				}}>
				<Box py={6}>
					<Typography
						variant='h3'
						component='h2'
						fontWeight='800'
						sx={{
							display: 'inline-flex',
							alignItems: 'center',
							marginTop: {
								xs: 5,
								md: 0
							}
						}}>
						Portfolio
						<Box
							component='span'
							sx={{
								background:
									'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
								height: 2,
								width: '11rem',
								marginLeft: '1.5rem',
								display: {
									xs: 'none',
									sm: 'inline'
								}
							}}></Box>
					</Typography>
					<Stack
						direction='row'
						component='ul'
						flexWrap='wrap'
						m={0}
						p={0}
						mt={3.5}
						sx={{
							justifyContent: {
								xs: 'flex-start',
								sm: 'flex-end'
							}
						}}>
						{navList.map(item => (
							<Box
								key={item}
								onClick={() => {
									setFilterChoice(item.toLowerCase());
								}}
								component='li'
								fontWeight='700'
								color='gray'
								sx={{
									p: 0,
									listStyle: 'none',
									mx: {
										sm: 2
									},
									marginRight: {
										xs: 2
									}
								}}>
								{item}
							</Box>
						))}
					</Stack>
				</Box>

				<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
					{itemData
						.filter(handleFilter)
						.map(({ image, title, subtitle, color, id }) => (
							<PortfolioCard
								key={id}
								{...{
									image,
									title,
									subtitle,
									color,
									handleRenderCard,
									id
								}}
							/>
						))}
				</Masonry>
			</Box>
			<Modal open={open} onClose={handleClose}>
				<Box>
					<PortfolioModalCard {...card} handleClose={handleClose}/>
				</Box>
			</Modal>
			<Footer backgroundColor='white' borderRadius={20} />
		</Box>
	);
};

export default Portfolio;
