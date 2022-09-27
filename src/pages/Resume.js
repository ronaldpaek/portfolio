import React from 'react';
import { Box, Container } from '@mui/material';

import { Section } from '@styles';
import { resumeData } from '@constants';
import { PageTitle, Footer } from '@components';
import { WorkingSkills, Knowledges, ResumeColumn } from '@components/Resume';

const Resume = () => {
	return (
		<Section>
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
						{resumeData.map((item, i) => (
							<ResumeColumn key={i} {...item} />
						))}
					</Box>
				</Box>
			</Container>
			<Container
				sx={{
					px: { xs: 4, sm: 5, md: 10, lg: 20 },
					py: 12,
					bgcolor: 'resume.skills.bgcolor'
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
		</Section>
	);
};

export default Resume;
