import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const BlogCardComment = ({ about, time, pText4, name }) => {
	return (
		<Box
			sx={{
				borderRadius: '.5rem',
				mt: 6,
				backgroundImage: theme => theme.backgroundImage.nav,
				p: '1px',
				mr: 3
			}}
		>
			<Stack
				direction='row'
				sx={{
					bgcolor: 'blogs.box.bgcolor',
					p: 4,
					borderRadius: '.5rem'
				}}
			>
				<Box>
					<Box
						component='img'
						src={about}
						alt='about image'
						sx={{
							width: { md: 125 },
							borderRadius: '.75rem'
						}}
					/>
				</Box>
				<Box pl={5}>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<Typography component='h3' fontSize={22}>
							{name}
						</Typography>
						<Box component='span' fontSize='.875rem'>
							{time} min ago
						</Box>
					</Stack>
					<Typography pr={{ md: 16 }}>{pText4}</Typography>
					<Box
						component='button'
						sx={{
							fontSize: '.875rem',
              cursor: 'pointer',
              bgcolor: 'transparent',
							'&:hover': {
								color: 'themeButton.hover'
							}
						}}
					>
						Reply
					</Box>
				</Box>
			</Stack>
		</Box>
	);
};

export default BlogCardComment;
