import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField } from '@mui/material';

import { contactData } from '@constants';

const MessageBox = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e, title) => {
		setFormData({ ...formData, [title]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await axios.post('https://formspree.io/f/myyvwabr', {
				...formData
			});
			setFormData({
				name: '',
				email: '',
				message: ''
			});
			window.location.assign('https://formspree.io/thanks');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Box
			sx={{
				width: {
					xs: 1,
					lg: '60%',
					xl: '70%'
				},
				mt: 8
			}}
		>
			<Box
				sx={theme => ({
					p: { xs: 4, md: '48px' },
					mb: { xs: '30px', md: '60px' },
					borderRadius: '.75rem',
					bgcolor: 'contact.input.bgcolor',
					...(theme.palette.mode === 'dark' && {
						border: theme.border
					})
				})}
			>
				<Typography component='h3' fontSize='1.5625rem'>
					<Box component='span' color='nav.color'>
						I'm always open to discussing product
					</Box>
					<br />
					<Box component='span' fontWeight={600} color='text.header'>
						design work or partnerships.
					</Box>
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit}
					autoComplete='off'
					sx={{
						'& > :first-of-type': {
							mt: '40px'
						}
					}}
				>
					{contactData.map(({ title, color, type }, i) => {
						const lowercased = title[0].toLowerCase() + title.slice(1);
						return (
							<TextField
								required
								key={i}
								label={title}
								type={type}
								variant='standard'
								color={color}
								value={formData[lowercased]}
								onChange={e => handleChange(e, lowercased)}
								sx={{
									width: 1,
									mb: 8
								}}
							/>
						);
					})}

					<Box display='inline-block' borderRadius='.5rem' mt='.75rem'>
						<Box
							component='button'
							type='submit'
							fontWeight='600'
							py={2}
							px={6}
							bordercolor='rgb(166 166 166)'
							variant='containeed'
							sx={theme => ({
								border: '2px solid rgb(166 166 166)',
								borderRadius: '.5rem',
								color: 'text.header',
								cursor: 'pointer',
								fontSize: '1rem',
								fontWeight: 600,
								textTransform: 'capitalize',
								bgcolor: 'transparent',
								transition: theme.transitions.create(
									['background-image', 'color', 'border-color'],
									{
										duration: theme.transitions.duration.standard,
										easing: theme.transitions.easing.easeInOut
									}
								),
								'&:hover': {
									backgroundImage: theme.backgroundImage.button,
									color: 'white',
									borderColor: 'transparent'
								}
							})}
						>
							Submit
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MessageBox;
