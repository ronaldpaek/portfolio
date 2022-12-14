import React from 'react';
import { Box, Button } from '@mui/material';

const BlogCardReply = () => {
	return (
		<Box pt={3}>
			<Box pr={3} pb={4}>
				<Box component='form' width={1}>
					<Box component='label' mb={2}>
						<Box component='span' fontSize={25}>
							Leave a Reply
						</Box>
						<Box
							component='textarea'
							p={3}
							mt={3}
							rows={3}
							sx={{
								borderRadius: '.25rem',

								'&:hover': {
									outline: 'none'
								},
								'&:focus': {
									outline: 'none'
								},
								border: 0,
								width: 1,
								bgcolor: 'blogs.textArea.bgcolor'
							}}
						></Box>
					</Box>
					<Button
						variant='contained'
						sx={theme => ({
							mt: '1.5rem',
							display: 'flex',
							alignItems: 'center',
							borderRadius: '35px',
							textTransform: 'capitalize',
							transition: theme.transitions.create('background-image', {
								duration: theme.transitions.duration.standard,
								easing: theme.transitions.easing.easeInOut
							}),
							backgroundImage: theme.backgroundImage.button,
							'&:hover': {
								backgroundPosition: '100% 0',
								transition: 'all .4 ease-in-out',
								backgroundImage: theme.backgroundImage.nav
							},
							px: '2rem',
							py: '.75rem',
							color: '#FFF',
							fontSize: '1.125rem'
						})}
					>
						Comment
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default BlogCardReply;
