import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, Icon } from '@mui/material';
import { client } from '../client';
import { DarkMode, LightMode } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

import {
	StyledHeader,
	StyledHeaderLogoContainer,
	StyledHeaderLogoLink,
	StyledHeaderImage,
	StyledHeaderLinkAndMobileContainer,
	StyledNavList,
	StyledHeaderLink,
	StyledMobileNavList,
	StyledThemeModeButton,
	StyledMobileMenuContainer,
	StyledThemeMobileToggle,
	StyledMenuToggle
} from '../styles';
import { logo } from '../assets';

const Header = ({ handleToggleTheme }) => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [links, setLinks] = useState([]);

	useEffect(() => {
		const query = `*[_type == 'links'] | order(_createdAt asc)`;

		client.fetch(query).then(data => {
			console.log(data);
			setLinks(data);
		});
	}, []);
	return (
		<StyledHeader component='header'>
			<StyledHeaderLogoContainer>
				<StyledHeaderLinkAndMobileContainer>
					<StyledHeaderLogoLink
						component={RouterLink}
						to='/'
						onClick={() => setOpen(prev => !prev)}>
						<StyledHeaderImage component='img' src={logo} alt='logo' />
					</StyledHeaderLogoLink>
					<StyledMobileMenuContainer>
						<StyledThemeMobileToggle onClick={handleToggleTheme}>
							{theme.palette.mode === 'dark' ? (
								<LightMode sx={{ fontSize: 20 }} />
							) : (
								<DarkMode sx={{ fontSize: 20 }} />
							)}
						</StyledThemeMobileToggle>
						<StyledMenuToggle onClick={() => setOpen(prev => !prev)}>
							<MenuIcon sx={{ fontSize: 20 }} />
						</StyledMenuToggle>
					</StyledMobileMenuContainer>
				</StyledHeaderLinkAndMobileContainer>
			</StyledHeaderLogoContainer>
			<Box
				component='nav'
				sx={{
					display: {
						xs: 'none',
						md: 'block'
					}
				}}>
				<StyledNavList component='ul'>
					{links.map(({ title, path, icon }, i) => (
						<Box key={i} component='li'>
							<StyledHeaderLink component={RouterLink} to={path}>
								<Icon sx={{ fontSize: 20, marginRight: 1 }}>{icon}</Icon>
								{title}
							</StyledHeaderLink>
						</Box>
					))}
					<Box component='li'>
						<StyledThemeModeButton onClick={handleToggleTheme}>
							{theme.palette.mode === 'dark' ? (
								<DarkMode sx={{ fontSize: 20 }} />
							) : (
								<LightMode sx={{ fontSize: 20 }} />
							)}
						</StyledThemeModeButton>
					</Box>
				</StyledNavList>
			</Box>
			<Box
				component='nav'
				sx={{
					display: {
						xs: 'block',
						md: 'none'
					}
				}}>
				<StyledMobileNavList
					component='ul'
					sx={{ display: open ? 'block' : 'none' }}>
					{links.map(({ title, path, icon }, i) => (
						<Box key={i} component='li' onClick={() => setOpen(prev => !prev)}>
							<StyledHeaderLink
								component={RouterLink}
								to={path}
								sx={{ marginInline: 0, borderRadius: 0 }}>
								<Icon sx={{ fontSize: 20, marginRight: 1 }}>{icon}</Icon>
								{title}
							</StyledHeaderLink>
						</Box>
					))}
				</StyledMobileNavList>
			</Box>
		</StyledHeader>
	);
};

export default Header;
