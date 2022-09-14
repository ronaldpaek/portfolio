import React from 'react';
import { Box, Typography } from '@mui/material';


const Footer = ({ backgroundColor, borderRadius }) => {
	return (
		<Box
			py={3}
			component='footer'
			textAlign='center'
			sx={{
				backgroundColor,
				borderBottomLeftRadius: borderRadius,
				borderBottomRightRadius: borderRadius
			}}>
			<Typography componenet='p'>
				© 2022 All Rights Reserved by ib-themes.
			</Typography>
		</Box>
	);
};

export default Footer;
