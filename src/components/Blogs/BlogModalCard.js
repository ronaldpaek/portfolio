import React from 'react';
import { Stack, Typography } from '@mui/material';

import { BlogCardMainContent, BlogCardComment, BlogCardReply } from '.';
import { ModalWrapper } from '@hoc';
import { SocialMediaLinks } from '@components';

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
	about
}) => {
	return (
		<>
			<BlogCardMainContent
				{...{ largeImage, date, tag, title, pText1, pText2, pText3 }}
			/>
			<BlogCardComment {...{ about, pText4, name, time }} />
			<Stack
				flexDirection='row'
				alignItems='center'
				sx={{
					justifyContent: { md: 'flex-end' },
					mt: 8,
					mr: 3,
					'& > * + *': {
						ml: 4
					}
				}}
			>
				<Typography component='h6' fontSize={20}>
					Login width:
				</Typography>
				<SocialMediaLinks />
			</Stack>
			<BlogCardReply />
		</>
	);
};

export default ModalWrapper(BlogModalCard);
