import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { ResumeTitle, ResumeItem } from './';
import { fetchData } from '@utils';

const ResumeColumn = ({ title, icon }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchData(title.toLowerCase(), setItems);
	}, []);

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
