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
					sx={{
						bgcolor: 'social.bgcolor',
						borderRadius: '.5rem'
					}}
				>
					<Box
						key={i}
						component='span'
						sx={theme => ({
							display: 'flex',
							height: '2.5rem',
							width: '2.5rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '.5rem',
							'&:hover': {
								backgroundImage: theme.backgroundImage.nav,
								'&:hover > svg': {
									color: 'white'
								}
							}
						})}
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
