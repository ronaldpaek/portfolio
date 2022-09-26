import React from 'react';
import { Stack } from '@mui/material';

import { PortfolioLink } from './';
import { navList } from '@constants';

const PortfolioLinks = ({ setFilterChoice }) => {
	return (
		<Stack
			direction='row'
			component='ul'
			sx={{
				mt: '30px',
				justifyContent: { xs: 'flex-start', md: 'flex-end' },
				flexWrap: 'wrap',
				width: 1
			}}
		>
			{navList.map((link, i) => (
				<PortfolioLink key={i} link={link} setFilterChoice={setFilterChoice} />
			))}
		</Stack>
	);
};

export default PortfolioLinks;
