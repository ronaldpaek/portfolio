import React from 'react';
import { Box, Typography, Button } from '@mui/material';

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
				sx={{
					p: { xs: 4, md: '48px' },
					mb: { xs: '30px', md: '60px' },
					borderRadius: '.75rem'
				}}
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
				<Box component='form'>
					{contactData.map((title, i) => (
						<Box
							key={i}
							width={1}
							mt='40px'
							mb={8}
							sx={{ position: 'relative' }}
						>
							<Box
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
						</Box>
					))}

					<Box display='inline-block' borderRadius='.5rem' mt='.75rem'>
						<Button
							fontWeight='600'
							py={2}
							px={6}
							borderColor='rgb(166 166 166)'
							borderRadius='.5rem'
							variant='containeed'
							sx={{
								border: '2px solid rgb(166 166 166)',
								color: 'text.header',
								cursor: 'pointer',
								fontSize: '1rem',
								'&:hover': {
									backgroundImage: theme => theme.backgroundImage.button
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
