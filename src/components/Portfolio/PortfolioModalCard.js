import React from 'react';
import { Typography, Box } from '@mui/material';

import { ModalColumns } from './';
import { ModalWrapper } from '@hoc';

const PortfolioModalCard = ({ title, column1, column2, body, img }) => {
	return (
		<>
			<Typography
				component='h2'
				fontWeight='700'
				fontSize='1.5625rem'
				color='themeButton.hover'
				textAlign='center'
			>
				{title}
			</Typography>
			<ModalColumns column1={column1} column2={column2} />
			<Typography fontSize={15}>{body}</Typography>
			<Box pr={3}>
				<Box
					component='img'
					src={img}
					alt=''
					sx={{
						height: { xs: 'auto', md: '450px' },
						mt: 6,
						objectFit: 'cover',
						borderRadius: '.75rem'
					}}
				/>
			</Box>
		</>
	);
};

export default ModalWrapper(PortfolioModalCard);
