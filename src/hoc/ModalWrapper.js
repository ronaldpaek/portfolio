import React from 'react';
import { Box } from '@mui/material';
import { Close } from '@mui/icons-material';

const ModalWrapper = Component => props => {
	return (
		<Box
			display='inline-block'
			boxShadow={20}
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				maxWidth: 800,
				width: {
					xs: 1,
					md: '83%',
					lg: 800
				},
				mx: 'auto',
				alignItems: 'center',
				bgcolor: 'portfolio.modal.bgcolor',
				boxShadow: '0 0 15px 15px rgb(0 0 0 / 0.1)',
				borderRadius: '.75rem',
				outline: 'none',
				p: { xs: '1rem', md: '2rem' }
			}}
		>
			<Close
				onClick={props.handleClose}
				sx={{
					position: 'absolute',
					right: 0,
					top: 0,
					backgroundColor: 'white',
					borderRadius: '50%',
					cursor: 'pointer'
				}}
			/>
			<Box
				sx={{
					overflowY: 'auto',
					maxHeight: { xs: '60vh', lg: '80vh' }
				}}
			>
				<Component {...props} />
			</Box>
		</Box>
	);
};

export default ModalWrapper;
