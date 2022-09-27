import React from 'react';
import { Stack, Typography } from '@mui/material';

import { SocialMediaLinks } from '@components';

const BlogCardSocial = () => {
	return (
		<Stack
			flexDirection='row'
			alignItems='center'
			sx={{
				justifyContent: { md: 'flex-end' },
				mt: 8,
				mr: 3,
				'& > * + *': {
					ml: 4
				}
			}}
		>
			<Typography component='h6' fontSize={20}>
				Login width:
			</Typography>
			<SocialMediaLinks />
		</Stack>
	);
};

export default BlogCardSocial;
