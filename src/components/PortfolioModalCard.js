import React, { forwardRef } from 'react';
import { Card, CardContent, Typography, Grid, Box, Link } from '@mui/material';
import { Person, Feed, Code, Preview, Close } from '@mui/icons-material';
import { TrapFocus } from '@mui/base';

const PortfolioModalCard = forwardRef(
	({ title, project, client, languages, preview, body, img, handleClose }, ref) => {
		return (
			<TrapFocus open>
				<Card
					ref={ref}
					tabIndex={-1}
					sx={{
						position: 'absolute',
						display: 'block',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						maxHeight: {
							xs: '60vh'
						},
						minWidth: {
							lg: '800px'
						},
						width: {
							xs: '100%',
							sm: '84%',
							md: '100%'
						},
						maxWidth: {
							xs: '800px'
						},
						bgcolor: 'background.paper',
						borderRadius: 4,
						outline: 'none',
						p: {
							xs: 2,
							md: 4
						},
						overflowY: 'auto'
					}}>
					<Box
						onClick={handleClose}
						sx={{
							borderRadius: '50%',
							backgroundColor: 'black',
							position: 'absolute',
							width: '50px !important',
							height: '50px !important',
							top: '-25px !important',
							right: '-25px !important',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							color: 'background.paper',
							cursor: 'pointer'
						}}>
						<Close />
					</Box>
					<CardContent
						sx={{
							padding: '0 !important',
							'&:last-child': {
								paddingBottom: '0 !important'
							}
						}}>
						<Typography
							variant='h5'
							component='h3'
							fontWeight='700'
							color='red'
							textAlign='center'>
							{title}
						</Typography>
						<Grid
							container
							sx={{
								my: {
									xs: 3
								}
							}}>
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
									}}>
									Project:{' '}
									<Box
										component='span'
										sx={{ fontSize: 'inherit', fontWeight: 700 }}>
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
								<Typography variant='subtitle2' sx={{
									fontSize: {
										md: '1rem'
									},
									ml: 1
								}}>
									Client:{' '}
									<Box
										component='span'
										sx={{ fontSize: 'inherit', fontWeight: 700 }}>
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
								<Typography variant='subtitle2' sx={{
									ml: 1,
									fontSize: {
										md: '1rem'
									}
								}}>
									Languages:{' '}
									<Box
										component='span'
										sx={{ fontSize: 'inherit', fontWeight: 700 }}>
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
								<Typography variant='subtitle2' sx={{
									ml: 1,
									fontSize: {
										md: '1rem'
									}
								}}>
									Preview:{' '}
									<Box
										component='span'
										sx={{ fontSize: 'inherit', fontWeight: 700 }}>
										<Link
											href='#'
											color='inherit'
											underline='none'
											sx={{
												'&:hover': {
													color: 'red !important'
												}
											}}>
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
									md: '1rem',
								}
							}}>
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
					</CardContent>
				</Card>
			</TrapFocus>
		);
	}
);

export default PortfolioModalCard;
