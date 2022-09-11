import React, { useState } from 'react';
import { Box, Typography, Stack, Modal } from '@mui/material';
import { Masonry } from '@mui/lab';

import {
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	banner1,
	banner2,
	banner3,
	banner4,
	banner5,
	banner6,
	banner7,
	banner8,
	banner9
} from '../assets';
import { Footer, PortfolioModalCard, PortfolioCard } from '../components';

const navList = ['All', 'Video', 'Web Design', 'Logo', 'Graphic Design'];

const itemData = [
	{
		image: image1,
		title: 'UI/UX',
		subtitle: 'Chul urina',
		color: '#FFF0F0',
		category: ['web design', 'graphic design'],
		id: 'card1'
	},
	{
		image: image2,
		title: 'Logo',
		subtitle: 'Chul urina',
		color: '#FFF3FC',
		category: ['video', 'logo'],
		id: 'card2'
	},
	{
		image: image3,
		title: 'Ui/UX',
		subtitle: 'T-Shirt Design',
		color: '#FFF3FC',
		category: ['web design'],
		id: 'card3'
	},
	{
		image: image4,
		title: 'UI/UX',
		subtitle: 'Packaging Box',
		color: '#E9FAFF',
		category: ['video', 'graphic design'],
		id: 'card4'
	},
	{
		image: image5,
		title: 'Video',
		subtitle: 'Modern Bag Design',
		color: '#F4F4FF',
		category: ['logo'],
		id: 'card5'
	},
	{
		image: image6,
		title: 'Web Desgin',
		subtitle: 'Aura Dione',
		color: '#FFFAE9',
		category: ['logo'],
		id: 'card6'
	},
	{
		image: image7,
		title: 'Video',
		subtitle: 'Chul urina',
		color: '#F4F4FF',
		category: ['video', 'logo'],
		id: 'card7'
	},
	{
		image: image8,
		title: 'Web Design',
		subtitle: 'Aura Dione',
		color: '#FFF0F8',
		category: ['web design', 'graphic design'],
		id: 'card8'
	},
	{
		image: image9,
		title: 'Video',
		subtitle: 'Chul urina',
		color: '#F4F4FF',
		category: ['web design'],
		id: 'card9'
	}
];

const projects = [
	{
		title: 'UI/UX Project',
		project: 'Website',
		client: 'Envato',
		languages: 'Photoshop, Figma',
		preview: 'www.envato.com',
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner1,
		category: ['web design', 'graphic design'],
		id: 'card1'
	},
	{
		title: 'Logo Project',
		project: 'Website',
		client: 'Envato',
		languages: 'Photoshop, Figma',
		preview: 'www.envato.com',
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner2,
		category: ['video', 'logo'],
		id: 'card2'
	},
	{
		title: 'T-Shirt Design Project',
		project: 'Website',
		client: 'Envato',
		languages: 'Photoshop, Figma',
		preview: 'www.envato.com',
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner3,
		category: ['web design'],
		id: 'card3'
	},
	{
		title: 'Packaging Box Project',
		project: 'Website',
		client: 'Envato',
		languages: 'Photoshop, Figma',
		preview: 'www.envato.com',
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner4,
		category: ['video', 'graphic design'],
		id: 'card4'
	},
	{
		title: 'Modern Bag Design Project',
		project: 'Website',
		client: 'Envato',
		languages: 'Photoshop, Figma',
		preview: 'www.envato.com',
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner5,
		category: ['logo'],
		id: 'card5'
	},
	{
		title: 'Aura Dione Project',
		project: 'Website',
		client: 'Envato',
		languages: 'Photoshop, Figma',
		preview: 'www.envato.com',
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner6,
		category: ['logo'],
		id: 'card6'
	},
	{
		title: 'UI/UX Project',
		project: 'Website',
		client: 'Envato',
		languages: 'Photoshop, Figma',
		preview: 'www.envato.com',
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner7,
		category: ['video', 'logo'],
		id: 'card7'
	},
	{
		title: 'Aura Dione Project',
		project: 'Website',
		client: 'Envato',
		languages: 'Photoshop, Figma',
		preview: 'www.envato.com',
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner8,
		category: ['web design', 'graphic design'],
		id: 'card8'
	},
	{
		title: 'UI/UX Project',
		project: 'Website',
		client: 'Envato',
		languages: 'Photoshop, Figma',
		preview: 'www.envato.com',
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner9,
		category: ['web design'],
		id: 'card9'
	}
];

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
