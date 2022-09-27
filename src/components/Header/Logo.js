import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Box } from '@mui/material';

import { logo } from '@assets';

const Logo = () => {
	return (
		<Link to='/' component={RouterLink}>
			<Box
				component='img'
				src={logo}
				alt='logo'
				sx={{ height: { xs: 26, lg: 32 } }}
			/>
		</Link>
	);
};

export default Logo;
