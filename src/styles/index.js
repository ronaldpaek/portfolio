import { Container, Box, Stack, Link, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledHeader = styled(Box)(({ theme }) => ({
	top: 0,
	left: 0,
	backgroundColor: 'hsl(45, 29%, 90%)',
	display: 'flex',
	width: '100%',
	justifyContent: 'space-between',
	alignItems: 'center',
	zIndex: 999,
	[theme.breakpoints.down('md')]: {
		position: 'fixed'
	},
	[theme.breakpoints.up('md')]: {
		position: 'static'
	}
}));

export const StyledHeaderItem = styled(Box)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	paddingBlock: 0,
	[theme.breakpoints.down('md')]: {
		paddingInline: theme.spacing(2)
	}
}));

export const StyledHeaderImage = styled(Box)(({ theme }) => ({
	maxWidth: '100%',
	display: 'block',
	height: theme.spacing(3.25),
	[theme.breakpoints.up('md')]: {
		height: theme.spacing(4)
	}
}));

export const StyledNavList = styled(Stack)(({ theme }) => ({
	flexDirection: 'row',
	listStyle: 'none',
	marginBlock: theme.spacing(6),
	padding: 0
}));

export const StyledImageContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	[theme.breakpoints.up('md')]: {
		marginBlock: theme.spacing(4)
  },
  [theme.breakpoints.down('md')]: {
    marginBlock: theme.spacing(2.5)
  }
}));

export const StyledHeaderLink = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	color: theme.palette.grey,
}));

export const StyledNavButton = styled(Button)(({ theme }) => ({
	textTransform: 'capitalize',
	marginInline: theme.spacing(1.25),
	paddingInline: 0,
	paddingBlock: theme.spacing(1.25),
	[theme.breakpoints.up('sm')]: {
		paddingInline: theme.spacing(2)
	},
	[theme.breakpoints.up('lg')]: {
		paddingInline: theme.spacing(2.5)
	}
}));

export const StyledMobileMenuContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(2)
}));

export const StyledThemeMobileToggle = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: theme.spacing(.5),
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  padding: 0,
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  }
}));

export const StyledMenuToggle = styled(IconButton)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginLeft: theme.spacing(0.75),
	width: theme.spacing(5.5),
	height: theme.spacing(5.5),
	padding: 0,
	backgroundColor: theme.palette.common.white,
	[theme.breakpoints.up('md')]: {
		display: 'none'
	}
}));

export const StyledSection = styled(Box)(({ theme }) => ({
	bgcolor: theme.palette.primary,
	[theme.breakpoints.up('md')]: {
		borderRadius: theme.spacing(4)
	}
}));

export const StyledSectionContainer = styled(Container)(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		paddingInline: theme.spacing(5)
	},
	[theme.breakpoints.up('md')]: {
		paddingInline: theme.spacing(10)
	}
}));
