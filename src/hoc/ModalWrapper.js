import React from 'react';
import { Card, CardContent } from '@mui/material';
import { Close } from '@mui/icons-material';

const ModalWrapper = Component => props => {
	return (
		<Card
			sx={{
				position: 'absolute',
				display: 'flex',
				flexDirection: 'column',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				maxHeight: {
					xs: '80vh'
				},
				minWidth: {
					lg: '800px'
				},
				width: {
					xs: '100%',
					sm: '84%',
					md: '100%'
				},
				maxWidth: {
					xs: '800px'
				},
				bgcolor: 'background.paper',
				borderRadius: 3,
				outline: 'none',
				p: {
					xs: 2,
					md: 4
				}
			}}>
			<Close
				variant='contained'
				onClick={props.handleClose}
				sx={{
					position: 'absolute',
					right: 0,
					top: 0,
					backgroundColor: 'white',
					borderRadius: '50%',
					height: 25,
					width: 25,
					cursor: 'pointer'
				}}
			/>
			<CardContent
				sx={{
					padding: 0,
					paddingRight: '10px',
					'&:last-child': {
						paddingBottom: 0
					},
					overflowY: 'auto',
					width: '100%'
				}}>
				<Component {...props} />
			</CardContent>
		</Card>
	);
};

export default ModalWrapper;
