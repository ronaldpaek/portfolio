import React from 'react';
import { Box, Typography, Stack, Modal } from '@mui/material';
import { Masonry } from '@mui/lab';

import { BlogCard, Footer } from '../components';
import {
	bimage1,
	bimage2,
	bimage3,
	bimage4,
	bimage5,
	bimage6
} from '../assets/images';

const blogsList = [
	{
		image: bimage1,
		date: '17 April',
		tag: 'Inspiration',
		title: 'How to Own Your Audience by Creating an Email List.',
		id: 'blog1',
		color: '#FCF5FF'
	},
	{
		image: bimage2,
		date: '10 April',
		tag: 'Inspiration',
		title: 'Everything You Need to Know About Web Accessibility.',
		id: 'blog2',
		color: '#EEFBFF'
	},
	{
		image: bimage3,
		date: '21 April',
		tag: 'Web Design',
		title: 'he window know to say beside youT',
		id: 'blog3',
		color: '#FCF4FF'
	},
	{
		image: bimage4,
		date: '27 April',
		tag: 'Inspiration',
		title: 'Top 10 Toolkits for Deep Learning in 2021.',
		id: 'blog4',
		color: '#FCF4FF'
	},
	{
		image: bimage5,
		date: '27 April',
		tag: 'Inspiration',
		title: 'How to Own Your Audience by Creating an Email List.',
		id: 'blog5',
		color: '#FCF4FF'
	},
	{
		image: bimage6,
		date: '27 April',
		tag: 'Inspiration',
		title: 'Everything You Need to Know About Web Accessibility.',
		id: 'blog6',
		color: '#FCF4FF'
	}
];

const Blogs = () => {
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

				<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
					{blogsList.map(({ image, title, date, tag, id, color }) => (
						<BlogCard
							key={id}
							{...{
								image,
								title,
								id,
								date,
								tag,
								color
							}}
						/>
					))}
				</Masonry>
			</Box>
			{/* <Modal open={open} onClose={handleClose}>
				<PortfolioModalCard {...card} handleClose={handleClose} ref={ref} />
			</Modal> */}
			<Footer backgroundColor='white' borderRadius={20} />
		</Box>
	);
};

export default Blogs;
