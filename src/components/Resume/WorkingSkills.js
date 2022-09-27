import React from 'react';
import { Box, Typography, LinearProgress, Stack } from '@mui/material';

import { skills } from '@constants';

const WorkingSkills = () => {
	return (
		<Box gridColumn='span 1'>
			<Typography
				component='h4'
				sx={{
					color: 'text.header',
					fontSize: '1.625rem',
					mb: 6
				}}
			>
				Working Skills
			</Typography>
			{skills.map(({ title, value, color }, i) => (
				<Box key={i} mb={5}>
					<Stack direction='row' justifyContent='space-between' mb={1}>
						<Box
							component='span'
							sx={{
								fontWeight: 600,
								color: 'resume.skills.one.color'
							}}
						>
							{title}
						</Box>
						<Box
							component='span'
							sx={{
								fontWeight: 600,
								color: 'resume.skills.two.color'
							}}
						>
							{`${value}%`}
						</Box>
					</Stack>
					<Box sx={{ color }}>
						<LinearProgress
							variant='determinate'
							value={value}
							color='inherit'
						/>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default WorkingSkills;
