import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

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
				<Typography component='h3'>
					<Box component='span'>I'm always open to discussing product</Box>
					<br />
					<Box component='span'>design work or partnerships.</Box>
				</Typography>
				<Box component='form'>
					<Box width={1} mt='40px' mb={8}>
						<TextField label='Name' variant='standard' />
					</Box>
					<Box width={1} mt='40px' mb={8}>
						<TextField label='Email' variant='standard' />
					</Box>
					<Box width={1} mt='40px' mb={8}>
						<TextField label='Message' variant='standard' />
					</Box>
					<Box mt={3} borderRadius='.5rem'>
						<Button
							sx={{
								px: 6,
								py: 2,
								borderRadius: '.5rem',
								borderWidth: '2px'
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
