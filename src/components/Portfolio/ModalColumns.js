import React from 'react';
import { Box } from '@mui/material';

import { LeftCol, RightCol } from './';

const ModalColumns = ({ column1, column2 }) => {
	return (
		<Box
			display='grid'
			sx={{
				gridTemplateColumns: { xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' },
				my: 6,
				pr: 3
			}}
		>
			<LeftCol column1={column1} />
			<RightCol column2={column2} />
		</Box>
	);
};

export default ModalColumns;
