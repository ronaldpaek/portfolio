import React, { useState, useContext } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, Icon } from '@mui/material';
import { Menu } from '@mui/icons-material';

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
import { navLinks } from '../constants';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ColorModeContext } from '../contexts';

const Header = () => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const { toggleColorMode } = useContext(ColorModeContext);
	// console.log(toggleColorMode);
	// const lightMode = theme.palette.mode === 'light';
	// console.log(toggleColorMode());

	return (
		<StyledHeader component='header'>
			<StyledHeaderLogoContainer>
				<StyledHeaderLinkAndMobileContainer>
					<StyledHeaderLogoLink
						sx={{ backgroundColor: 'transparent' }}
						component={RouterLink}
						to='/'
						onClick={() => setOpen(prev => !prev)}>
						<StyledHeaderImage component='img' src={logo} alt='logo' />
					</StyledHeaderLogoLink>
					<StyledMobileMenuContainer>
						<StyledThemeMobileToggle onClick={toggleColorMode}>
							{theme.palette.mode === 'light' ? (
								<Icon component={FaMoon} sx={{ color: 'black' }} />
							) : (
								<Icon component={FaSun} sx={{ color: 'white' }} />
							)}
						</StyledThemeMobileToggle>
						<StyledMenuToggle onClick={() => setOpen(prev => !prev)}>
							<Menu />
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
					{navLinks.map(({ title, path, component }, i) => (
						<Box key={i} component='li'>
							<StyledHeaderLink
								component={RouterLink}
								to={path}
								sx={{
									'&:hover': {
										backgroundImage:
											'linear-gradient(to right, #DD2476, #FA5252)'
									},
									'&.active': {
										backgroundImage:
											'linear-gradient(to right, #DD2476, #FA5252)',
										color: '#fff'
									}
								}}>
								<Icon component={component} sx={{ marginRight: 1 }} />
								{title}
							</StyledHeaderLink>
						</Box>
					))}
					<Box component='li'>
						<StyledThemeModeButton
							sx={{
								'&:hover': {
									backgroundImage: 'linear-gradient(to right, #DD2476, #FA5252)'
								}
							}}
							onClick={toggleColorMode}>
							{theme.palette.mode === 'light' ? (
								<Icon component={FaMoon} sx={{ color: 'black' }} />
							) : (
								<Icon component={FaSun} sx={{ color: 'white' }} />
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
					{navLinks.map(({ title, path, component }, i) => (
						<Box key={i} component='li' onClick={() => setOpen(prev => !prev)}>
							<StyledHeaderLink
								component={RouterLink}
								to={path}
								sx={{
									marginInline: 0,
									borderRadius: 0,
									paddingLeft: 2,
									'&:hover': {
										color: 'rgb(250 82 82)'
									},
									'&.active': {
										color: 'rgb(250 82 82)'
									}
								}}>
								<Icon
									component={component}
									sx={{ fontSize: 20, marginRight: 1 }}
								/>
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
