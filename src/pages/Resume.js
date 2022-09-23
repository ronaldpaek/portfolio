import React from 'react';
import { Box, Container } from '@mui/material';

import Footer from '../components/Footer';
import { resumeData } from '../constants';
import { PageTitle } from '../components';
import {
	ColumnTitle,
	ColumnItem,
	WorkingSkills,
	Knowledges
} from '../components/Resume';

const Resume = () => {
	return (
		<Box
			component='section'
			sx={{
				bgcolor: theme => (theme.palette.mode === 'light' ? 'white' : '#111'),
				borderRadius: { lg: '1rem' }
			}}
		>
			<Box>
				<Container sx={{ px: { sm: 5, md: 10, lg: 20 } }}>
					<Box px={4} py={12}>
						<PageTitle pageTitle='Resume' mb='40px' />
						<Box
							display='grid'
							gap={6}
							sx={{
								gridTemplateColumns: {
									xs: 'repeat(1, 1fr)',
									md: 'repeat(2, 1fr)',
									lg: 'repeat(3, 1fr)'
								}
							}}
						>
							{resumeData.map(({ title, icon, items }, _) => (
								<Box key={title}>
									<ColumnTitle title={title} icon={icon} />

									{items.map((item, i) => (
										<ColumnItem key={i} {...item} />
									))}
								</Box>
							))}
						</Box>
					</Box>
				</Container>
				<Container
					sx={{
						px: { sm: 5, md: 10, lg: 20 },
						bgcolor: theme =>
							theme.palette.mode === 'light' ? '#F8FBFB' : '#0D0D0D'
					}}
				>
					<Box
						display='grid'
						gap={8}
						sx={{
							gridTemplateColumns: {
								xs: 'repeat(1, 1fr)',
								md: 'repeat(2, 1fr)'
							}
						}}
					>
						<WorkingSkills />
						<Knowledges />
					</Box>
				</Container>
				<Footer />
			</Box>
		</Box>
	);
};

export default Resume;
