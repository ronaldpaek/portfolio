import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

import { contactData } from '@constants';

const MessageBox = () => {
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
					noValidate
					autoComplete='off'
					sx={{
						'& > :first-of-type': {
							mt: '40px'
						}
					}}
				>
					{contactData.map(({ title, color }, i) => (
						<TextField
							required
							key={i}
							label={title}
							variant='standard'
							color={color}
							sx={{
								width: 1,
								mb: 8
							}}
						/>
					))}

					<Box display='inline-block' borderRadius='.5rem' mt='.75rem'>
						<Button
							fontWeight='600'
							py={2}
							px={6}
							bordercolor='rgb(166 166 166)'
							variant='containeed'
							sx={{
								border: '2px solid rgb(166 166 166)',
								borderRadius: '.5rem',
								color: 'text.header',
								cursor: 'pointer',
								fontSize: '1rem',
								fontWeight: 600,
								textTransform: 'capitalize',
								'&:hover': {
									backgroundImage: theme => theme.backgroundImage.button,
									color: 'white'
								}
							}}
						>
							Submit
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MessageBox;

// <Box
// 			key={i}
// 			width={1}
// 			mt='40px'
// 			mb={8}
// 		></Box>

/* <Box
								component='input'
								width={1}
								display='block'
								sx={{
									borderWidth: 0,
									borderBottomWidth: 2,
									backgroundColor: 'transparent',
									color: 'blogs.input.border.color',
									py: 2,
									px: 0
								}}
							/>
							<Box
								component='label'
								sx={{
									transform: 'scaleX(1) scaleY(1)',
									transitionDuration: '300ms',
									transformOrigin: 0,
									top: '.75rem',
									position: 'absolute'
								}}
							>
								{title} *
							</Box>
						</Box> */
