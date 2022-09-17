import React from 'react';
import { Stack, Box, Link, Icon } from '@mui/material';
import {
	FaFacebookF,
	FaTwitter,
	FaDribbble,
	FaLinkedinIn
} from 'react-icons/fa';

const links = [
	{
		url: 'https://www.facebook.com',
		color: '#1773EA',
		component: FaFacebookF
	},
	{
		url: 'https://twitter.com',
		color: '#139CEA',
		component: FaTwitter
	},
	{
		url: 'https://dribbble.com',
		color: '#E14A84',
		component: FaDribbble
	},
	{
		url: 'https://www.linkedin.com',
		color: '#0072B1',
		component: FaLinkedinIn
	}
];

const SocialMediaLinks = () => {
	return (
		<Stack direction='row' spacing={1.5}>
			{links.map(({ url, color, component }, i) => (
				<Link
					key={i}
					href={url}
					target='_blank'
					rel='noopener noreferrer'
					sx={{
						bgcolor: theme => (theme.palette.light ? '#212425': '#F3F6F6'),
						borderRadius: 2
					}}>
					<Box
						key={i}
						component='span'
						sx={{
							display: 'flex',
							height: 40,
							width: 40,
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 2,
							'&:hover': {
								backgroundImage: 'linear-gradient(to right, #DD2476, #FA5252)',
								'&:hover > *': {
									color: '#FFF'
								}
							}
						}}>
						<Icon
							sx={{
								fontSize: '1rem',
								color
							}}
							component={component}
						/>
					</Box>
				</Link>
			))}
		</Stack>
	);
};

export default SocialMediaLinks;
