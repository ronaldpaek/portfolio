import {
	Container,
	Box,
	Stack,
	Link,
	IconButton,
	SvgIcon
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * App 
 */

export const StyledRootContainer = styled(Box)(({ theme }) => ({
	minHeight: '100vh',
	width: '100%',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	[theme.breakpoints.up('sm')]: {
		paddingBottom: theme.spacing(8)
	}
}));

/**
 * Header
 */

export const StyledHeader = styled(Box)(({ theme }) => ({
	top: 0,
	left: 0,
	display: 'flex',
	width: '100%',
	justifyContent: 'space-between',
	alignItems: 'center',
	zIndex: 999,
	[theme.breakpoints.down('md')]: {
		position: 'fixed',
	},
	[theme.breakpoints.up('md')]: {
		position: 'static'
	}
}));

export const StyledHeaderLogoContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	[theme.breakpoints.down('md')]: {
		paddingInline: theme.spacing(2),
		backgroundColor: 'rgb(243 246 246)'
	}
}));

export const StyledHeaderLinkAndMobileContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBlock: theme.spacing(2.5),
	[theme.breakpoints.up('md')]: {
		marginBlock: theme.spacing(4)
	}
}));

export const StyledHeaderLogoLink = styled(Link)(({ theme }) => ({
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

export const StyledImageLink = styled(Box)(({ theme }) => ({
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
  fontSize: theme.spacing(1.75),
  fontWeight: 600,
	backgroundColor: theme.palette.common.white,
	borderRadius: theme.spacing(0.75),
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

export const StyledNavSpan = styled(Box)(({ theme }) => ({
	textTransform: 'capitalize'
}));

export const StyledSvgIcon = styled(SvgIcon)(({ theme }, props) => ({}));

export const StyledMobileMenuContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	marginLeft: theme.spacing(2)
}));

export const StyledThemeMobileToggle = styled(IconButton)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginLeft: theme.spacing(0.5),
	width: theme.spacing(5.5),
	height: theme.spacing(5.5),
	padding: 0,
	backgroundColor: theme.palette.common.white,
	[theme.breakpoints.up('md')]: {
		display: 'none'
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

export const StyledThemeModeButton = styled(IconButton)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: theme.spacing(5.5),
	width: theme.spacing(5.5),
	marginLeft: theme.spacing(1),
	backgroundColor: theme.palette.common.white
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

export const StyledMobileNavList = styled(Box)(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  overflow: 'hidden',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  borderBottomLeftRadius: theme.spacing(2.5),
  borderBottomRightRadius: theme.spacing(2.5),
  width: '100%',
  display: 'block',
  position: 'absolute',
  top: theme.spacing(10),
  left: 0
}));

/**
 * Home 
 */

