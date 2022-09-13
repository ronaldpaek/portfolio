import React from 'react';
import { Box, Typography, Stack, Grid } from '@mui/material';
import { Phone, Email, Map } from '@mui/icons-material';

import { Footer } from '../components';

const contactInfo = [
	{ title: 'Phone', info: '+452 666 386', Icon: Phone },
	{ title: 'Email', info: 'support@gmail.com', Icon: Email },
	{ title: 'Address', info: 'Maount View, Oval Road, New York, USA', Icon: Map }
];

const Contact = () => {
	return (
		<Box
			component='section'
			sx={{
				backgroundColor: 'palegoldenrod',
				borderRadius: 5
			}}>
			<Box
				sx={{
					paddingInline: {
						xs: 2,
						sm: 5,
						md: 7.5
					}
				}}>
				<Box py={6}>
					<Typography
						variant='h3'
						component='h2'
						fontWeight='800'
						sx={{
							display: 'inline-flex',
							alignItems: 'center',
							marginTop: {
								xs: 5,
								md: 0
							}
						}}>
						Contact
						<Box
							component='span'
							sx={{
								background:
									'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
								height: 2,
								width: '11rem',
								marginLeft: '1.5rem',
								display: {
									xs: 'none',
									sm: 'inline'
								}
							}}
						/>
					</Typography>
				</Box>
				<Grid container>
					<Grid item>
						<Stack>
							{contactInfo.map(({ Icon, title, info }) => (
								<Box key={title}>
									<Icon />
									<Typography>{title}:</Typography>
									<Typography>{info}</Typography>
								</Box>
							))}
						</Stack>
          </Grid>
          <Grid item>
            <Box>
              <Typography>I'm always open to discussing product <Box component='span'>design work or partnerships.</Box></Typography>
            </Box>
          </Grid>
				</Grid>
			</Box>
			<Footer backgroundColor='white' borderRadius={20} />
		</Box>
	);
};

export default Contact;
