import React, { useState } from 'react';
import { Box, Typography, Stack, Modal, Grid } from '@mui/material';

import { BlogCard, Footer, BlogModalCard } from '../components';
import {
	smallImage1,
	smallImage2,
	smallImage3,
	smallImage4,
	smallImage5,
	smallImage6,
	largeImage1,
	largeImage2,
	largeImage3,
	largeImage4,
	largeImage5,
	largeImage6,
	about
} from '../assets';

const items = [
	{
		smallImage: smallImage1,
		largeImage: largeImage1,
		date: '17 April',
		tag: 'Inspiration',
		title: 'How to Own Your Audience by Creating an Email List.',
		id: 'blog1',
		color: '#FCF5FF'
	},
	{
		smallImage: smallImage2,
		largeImage: largeImage2,
		date: '10 April',
		tag: 'Inspiration',
		title: 'Everything You Need to Know About Web Accessibility.',
		id: 'blog2',
		color: '#FCF4FF'
	},
	{
		smallImage: smallImage3,
		largeImage: largeImage3,
		date: '21 April',
		tag: 'Web Design',
		title: 'he window know to say beside youT',
		id: 'blog3',
		color: '#FCF4FF'
	},
	{
		smallImage: smallImage4,
		largeImage: largeImage4,
		date: '27 April',
		tag: 'Inspiration',
		title: 'Top 10 Toolkits for Deep Learning in 2021.',
		id: 'blog4',
		color: '#FCF4FF'
	},
	{
		smallImage: smallImage5,
		largeImage: largeImage5,
		date: '27 April',
		tag: 'Inspiration',
		title: 'How to Own Your Audience by Creating an Email List.',
		id: 'blog5',
		color: '#FCF4FF'
	},
	{
		smallImage: smallImage6,
		largeImage: largeImage6,
		date: '27 April',
		tag: 'Inspiration',
		title: 'Everything You Need to Know About Web Accessibility.',
		id: 'blog6',
		color: '#FCF4FF'
	}
];

const loremText = {
	pText1:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.',
	pText2:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur.',
	pText3:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.',
	pText4:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nam ad, unde vel aut soluta atque consequatur. Omnis, debitis nihil?',
	name: 'Rafia Ana',
	time: 15
};

const Blogs = () => {
	const [card, setCard] = useState({});
  const [open, setOpen] = useState(false);
  
	const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleModalCard = id => {
    const card = items.find(item => item.id === id);
    setCard(card);
    handleOpen();
  };

	return (
		<Box
			component='section'
			sx={{
				backgroundColor: 'palegoldenrod',
				borderRadius: 5
			}}>
			<Box
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
						Blogs
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
						}}></Stack>
				</Box>

				<Grid container spacing={2}>
					{items.map(({ smallImage, title, date, tag, id, color }) => (
						<BlogCard
							key={id}
							{...{
								smallImage,
								title,
								id,
								date,
								tag,
								color
							}}
							handleModalCard={() => handleModalCard(id)}
						/>
					))}
				</Grid>
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
			<Footer backgroundColor='white' borderRadius={20} />
		</Box>
	);
};

export default Blogs;
