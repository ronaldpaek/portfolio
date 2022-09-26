import React from 'react';
import { Typography, Grid, Box, Link } from '@mui/material';
import { Person, Feed, Code, Preview } from '@mui/icons-material';

import { ModalWrapper } from '@hoc';

const PortfolioModalCard = ({
	title,
	project,
	client,
	languages,
	preview,
	body,
	img
}) => {
	return (
		<>
			<Typography
				variant='h5'
				component='h3'
				fontWeight='700'
				color='red'
				textAlign='center'
			>
				{title}
			</Typography>
			<Grid
				container
				sx={{
					my: {
						xs: 3
					}
				}}
			>
				<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
					<Feed
						sx={{
							display: {
								xs: 'none',
								sm: 'block'
							}
						}}
					/>
					<Typography
						variant='subtitle2'
						sx={{
							ml: 1,
							fontSize: {
								md: '1rem'
							}
						}}
					>
						Project:{' '}
						<Box component='span' sx={{ fontSize: 'inherit', fontWeight: 700 }}>
							{project}
						</Box>
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
					<Person
						sx={{
							display: {
								xs: 'none',
								sm: 'block'
							}
						}}
					/>
					<Typography
						variant='subtitle2'
						sx={{
							fontSize: {
								md: '1rem'
							},
							ml: 1
						}}
					>
						Client:{' '}
						<Box component='span' sx={{ fontSize: 'inherit', fontWeight: 700 }}>
							{client}
						</Box>
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: 'flex', mt: 1 }}>
					<Code
						sx={{
							display: {
								xs: 'none',
								sm: 'block'
							}
						}}
					/>
					<Typography
						variant='subtitle2'
						sx={{
							ml: 1,
							fontSize: {
								md: '1rem'
							}
						}}
					>
						Languages:{' '}
						<Box component='span' sx={{ fontSize: 'inherit', fontWeight: 700 }}>
							{languages}
						</Box>
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: 'flex', mt: 1 }}>
					<Preview
						sx={{
							display: {
								xs: 'none',
								sm: 'block'
							}
						}}
					/>
					<Typography
						variant='subtitle2'
						sx={{
							ml: 1,
							fontSize: {
								md: '1rem'
							}
						}}
					>
						Preview:{' '}
						<Box component='span' sx={{ fontSize: 'inherit', fontWeight: 700 }}>
							<Link
								href='#'
								color='inherit'
								underline='none'
								sx={{
									'&:hover': {
										color: 'red !important'
									}
								}}
							>
								{preview}
							</Link>
						</Box>
					</Typography>
				</Grid>
			</Grid>
			<Typography
				variant='body2'
				xs={{
					md: {
						my: 3
					},
					fontSize: {
						md: '1rem'
					}
				}}
			>
				{body}
			</Typography>
			<Box sx={{ borderRadius: 3, mt: 3 }}>
				<img
					src={img}
					alt=''
					style={{
						display: 'block',
						maxWidth: '100%',
						borderRadius: '1.5rem',
						objectFit: 'cover'
					}}
				/>
			</Box>
		</>
	);
};

export default ModalWrapper(PortfolioModalCard);
