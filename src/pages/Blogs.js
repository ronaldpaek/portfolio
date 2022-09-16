import React, { useState } from 'react';
import { Box, Typography, Stack, Modal, Grid } from '@mui/material';

import { BlogCard, Footer, BlogModalCard } from '../components';
import { dummyData, loremText } from '../constants';
import {
	about
} from '../assets';

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
					{dummyData.map(({ smallImage, title, date, tag, id, color }) => (
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
