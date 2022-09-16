import React from 'react';
import { Stack, Box, Link, Icon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
					sx={{ bgcolor: 'transparent' }}>
					<Box
						key={i}
						component='span'
						sx={{
							display: 'flex',
							height: theme => theme.spacing(5),
							width: theme => theme.spacing(5),
							alignItems: 'center',
							justifyContent: 'center',
							bgcolor: theme =>
								theme.mode === 'light' ? '#f3f6f6' : '#212425',
							borderRadius: 2,
							'&:hover': {
								backgroundImage: 'linear-gradient(to right, #DD2476, #FA5252)',
								'&:hover > *': {
									color: '#fff'
								}
							}
						}}>
						<Icon
							sx={{
								fontSize: '1rem',
								color: { color }
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
