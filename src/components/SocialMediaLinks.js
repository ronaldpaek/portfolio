import React from 'react';
import { Stack, Box, Link, Icon } from '@mui/material';

import { links } from '@constants';

const SocialMediaLinks = () => {
	return (
		<Stack
			direction='row'
			sx={{
				'& > a + a': { ml: 3 }
			}}
		>
			{links.map(({ url, color, icon }, i) => (
				<Link
					key={i}
					href={url}
					target='_blank'
					rel='noopener noreferrer'
					sx={theme => ({
						bgcolor: 'social.bgcolor',
						borderRadius: '.5rem',
						transition: theme.transitions.create('background-image', {
							duration: theme.transitions.duration.standard,
							easing: theme.transitions.easeInOut
						}),
						'&:hover': {
							backgroundImage: theme.backgroundImage.nav
						}
					})}
				>
					<Box
						key={i}
						component='span'
						sx={{
							display: 'flex',
							height: '2.5rem',
							width: '2.5rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '.5rem',
							'&:hover > svg': {
								transition: theme =>
									theme.transitions.create('color', {
										duration: theme.transitions.duration.standard,
										easing: theme.transitions.easeInOut
									}),
								color: 'white'
							}
						}}
					>
						<Icon
							sx={{
								fontSize: '1rem',
								color
							}}
							component={icon}
						/>
					</Box>
				</Link>
			))}
		</Stack>
	);
};

export default SocialMediaLinks;
