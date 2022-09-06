import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Box,
	Stack,
  TextareaAutosize,
  Button,
} from '@mui/material';
import { Close, Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const BlogModalCard = ({
	title,
	largeImage,
	date,
	tag,
  time,
  pText1,
	pText2,
	name,
	pText3,
	pText4,
	about,
	handleClose
}) => {
	return (
		<Card
			sx={{
				position: 'absolute',
				display: 'flex',
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
				borderRadius: 4,
				outline: 'none',
				p: {
					xs: 2,
					md: 4
				}
			}}>
			<Close
				variant='contained'
				onClick={handleClose}
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
						paddingBottom: 0,
          },
					overflowY: 'auto',
					width: '100%',
				}}>
				<Stack>
					<img
						src={largeImage}
						alt=''
						style={{
							width: '100%',
							maxWidth: '100%',
							display: 'block',
							borderRadius: 15,
							marginTop: '1.5rem'
						}}
					/>
					<Typography mt={2}>
						{date} &#8226; {tag}
					</Typography>
					<Typography mt={1} variant='h5' component='h3' fontWeight={700}>
						{title}
					</Typography>
					<Typography my={2}>{pText1}</Typography>
					<Typography my={2}>{pText2}</Typography>
					<Typography my={2}>{pText3}</Typography>
					<Box sx={{ border: '1px solid red', display: 'grid', padding: '1rem', gridTemplateColumns: '20% 80%', borderRadius: 2 }}>
						<Box>
							<img
								src={about}
								alt=''
								style={{ display: 'block', maxWidth: '100%', width: '100%', objectFit: 'contain' }}
							/>
						</Box>
						<Box sx={{paddingLeft: '1.3rem'}}>
							<Stack direction='row' justifyContent='space-between'>
								<Typography>{name}</Typography>
								<Typography>{time} min ago</Typography>
							</Stack>
							<Typography sx={{paddingRight: 8}}>{pText4}</Typography>
						</Box>
          </Box>
          <Stack mt={3} direction='row' justifyContent='flex-end'>
            <Stack direction='row'>
              <Typography>Login With:</Typography>
              <Facebook />
              <Twitter />
              <LinkedIn />
            </Stack>
          </Stack>
          <Typography>Leave a Reply</Typography>
          <TextareaAutosize></TextareaAutosize>
        </Stack>
        <Button sx={{marginTop: 4}} variant='contained'>Comment</Button>
			</CardContent>
		</Card>
	);
};

export default BlogModalCard;
