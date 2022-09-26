import React from 'react';
import { Box } from '@mui/material';

import { ResumeTitle, ResumeItem } from './';

const ResumeColumn = ({ title, icon, items }) => {
	return (
		<Box>
			<ResumeTitle title={title} icon={icon} />
			{items.map((item, i) => (
				<ResumeItem key={i} {...item} />
			))}
		</Box>
	);
};

export default ResumeColumn;
