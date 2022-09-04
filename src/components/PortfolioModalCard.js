import React, { forwardRef } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { Person, Feed, Code, Preview } from '@mui/icons-material';
import { TrapFocus } from '@mui/base';

const PortfolioModalCard = forwardRef(
	({ title, project, client, languages, preview, body, img }, ref) => {
		return (
			<TrapFocus open>
				<Card
					ref={ref}
					tabIndex={-1}
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 1000,
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24,
						p: 4,
						tabIndex: -1
					}}>
					<CardContent>
						<Typography variant='h4' component='h3'>
							{title}
						</Typography>
						<Grid container columns={{ xs: 6 }}>
							<Grid item>
								<Feed />
								<Typography>Project: {project}</Typography>
							</Grid>
							<Grid item>
								<Person />
								<Typography>Client: {client}</Typography>
							</Grid>
							<Grid item>
								<Code />
								<Typography>Languages: {languages}</Typography>
							</Grid>
							<Grid item>
								<Preview />
								<Typography>Preview: {preview}</Typography>
							</Grid>
						</Grid>
						<Typography>{body}</Typography>
						<Box>
							<img src={img} alt='' />
						</Box>
					</CardContent>
				</Card>
			</TrapFocus>
		);
	}
);

export default PortfolioModalCard;
