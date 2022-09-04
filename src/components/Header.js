import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Button, IconButton } from '@mui/material';
import {
	Home,
	Person,
	Description,
	BusinessCenter,
	DarkMode,
	Clear
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaBlogger } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';

import { logo } from '../assets/images';

const navList = [
	{ name: 'Home', to: '/', StartIcon: Home },
	{ name: 'About', to: '/about', StartIcon: Person },
	{ name: 'Resume', to: '/resume', StartIcon: Description },
	{ name: 'Works', to: '/works', StartIcon: BusinessCenter },
	{ name: 'Blogs', to: '/blogs', StartIcon: FaBlogger },
	{ name: 'Contact', to: '/contact', StartIcon: RiContactsBookFill }
];

const Header = ({ handleToggleTheme }) => {
	return (
		<>
			<MobileNavBar handleToggleTheme={handleToggleTheme} />
			<DesktopNavBar handleToggleTheme={handleToggleTheme} />
		</>
	);
};

const MobileNavBar = ({ handleToggleTheme }) => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(prevToggle => !prevToggle);
	};

	return (
		<Box
			component='header'
			sx={{
				position: 'fixed',
				left: 0,
				right: 0,
				backgroundColor: 'hsl(45, 29%, 90%)',
				display: {
					xs: 'block',
					md: 'none'
				}
			}}>
			<Box px={2} direction='row'>
				<Stack
					direction='row'
					py={2.5}
					justifyContent='space-between'
					alignItems='center'>
					<Link to='/' onClick={handleClick}>
						<Box
							component='img'
							src={logo}
							alt='logo'
							style={{ maxWidth: '80%' }}
						/>
					</Link>
					<Stack direction='row'>
						<IconButton
							onClick={handleToggleTheme}
							sx={{ bgcolor: 'white', marginLeft: 2 }}>
							<DarkMode />
						</IconButton>
						<IconButton
							sx={{ bgcolor: 'white', marginLeft: 2 }}
							onClick={handleClick}>
							{toggle ? <Clear /> : <MenuIcon />}
						</IconButton>
					</Stack>
				</Stack>
			</Box>
			{toggle && (
				<Box
					component='nav'
					sx={{ position: 'absolute', top: 64, left: 0, right: 0 }}>
					<Stack
						component='ul'
						sx={{
							bgcolor: 'white',
							borderBottomLeftRadius: 20,
							borderBottomRightRadius: 20,
							padding: 0
						}}>
						{navList.map(({ name, to, StartIcon }, i) => (
							<Box component='li' key={i} sx={{ listStyle: 'none' }}>
								<Link
									to={to}
									onClick={handleClick}
									style={{
										textDecoration: 'none',
										display: 'flex',
										alignItems: 'center',
										color: 'black',
										paddingBlock: '.65rem',
										paddingLeft: '1rem'
									}}>
									<span style={{ fontSize: '1.25rem', marginRight: '.5rem' }}>
										{<StartIcon />}
									</span>
									{name}
								</Link>
							</Box>
						))}
					</Stack>
				</Box>
			)}
		</Box>
	);
};

const DesktopNavBar = ({ handleToggleTheme }) => {
	return (
		<Stack
			component='header'
			direction='row'
			justifyContent='space-between'
			paddingBlock={6}
			sx={{
				display: {
					xs: 'none',
					md: 'flex'
				}
			}}>
			<Box>
				<img src={logo} alt='logo' />
			</Box>
			<Stack direction='row' spacing={2} component='nav'>
				{navList.map(({ name, to, StartIcon }, i) => (
					<Link key={i} to={to} style={{ textDecoration: 'none' }}>
						<Button
							variant='contained'
							sx={{ height: 44, textTransform: 'capitalize' }}
							startIcon={<StartIcon style={{ fontSize: '20px' }} />}>
							{name}
						</Button>
					</Link>
				))}
				<Button
					variant='contained'
					onClick={handleToggleTheme}
					sx={{ borderRadius: 100, minWidth: 40, padding: 0 }}>
					<DarkMode />
				</Button>
			</Stack>
		</Stack>
	);
};

export default Header;
