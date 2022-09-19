import {
	Container,
	Box,
	Stack,
	Link,
	IconButton,
	SvgIcon
} from '@mui/material';
import { styled } from '@mui/material/styles';

import {
	appWrapper,
	searchBar,
	appBar,
	toolbarWrapper,
	logoText,
	sideListWrapper,
	shortsWrapper,
	shortsCard,
	shortsHeader,
	notificationWrapper,
	appCardList,
	appContentWrapper,
	flexAlignCenter,
	flexColumnGrow,
	flexColumnCenter,
	inlineText,
	flex,
	scrollWrapper,
	hideOnMobile
} from './styles';

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
		position: 'fixed'
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

export const StyledHeaderLogoLink = styled(Link)(({ theme }) => ({}));

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
	fontSize: 13,
	fontWeight: 600,
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
	marginLeft: theme.spacing(1)
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

/**
 * About
 */

export const style = {
	sectionContainer: {
		backgroundColor: 'rgb(255, 255, 255)',
		maxWidth: {
			md: 992,
			lg: 1280
		},
		px: {
			xs: 2,
			sm: 5,
			md: 10
		},
		borderRadius: {
			md: 4
		},
		'@media (min-width: 640px) and (max-width: 767px)': {
			px: 2.5
		}
	},
	sectionTitle: {
		fontWeight: 700,
		fontFamily: 'Roboto Slab, serif',
		fontSize: '2.5rem',
		display: 'inline-flex',
		alignItems: 'center',
		mt: {
			xs: 6,
			md: 0
		}
	},
	titleLine: {
		background:
			'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
		height: 2,
		width: '11rem',
		ml: '1.5rem',
		display: {
			xs: 'none',
			sm: 'inline'
		}
	},
	aboutMeContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: {
			sm: 5
		},
		pt: {
			xs: 2,
			sm: 5
		}
	},
	aboutMeImgContainer: {
		flexBasis: {
			xs: '100%',
			sm: 0
		},
		flexGrow: {
			sm: 4
		}
	},
	aboutMeImg: {
		maxWidth: '100%',
		objectFit: 'cover',
		display: 'block',
		borderRadius: 8,
		overflow: 'hidden',
		width: {
			xs: '100%',
			sm: 330
		},
		height: {
			xs: 'auto',
			sm: 400
		}
	},
	whoAmIContainer: {
		flexBasis: {
			xs: '100%',
			sm: 0
		},
		flexGrow: {
			sm: 8
		}
	},
	whoAmITitle: {
		fontWeight: 500,
		fontSize: '1.5625rem',
		mb: 1.25
	},
	whoAmIBody: {
		color: 'rgb(68, 86, 108)'
	},
	gridContainer: {
		display: 'grid',
		gap: '1.5rem',
		gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
		'@media (min-width: 640px)': {
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
		}
	},
	infoItem: {
		display: 'flex'
	},
	infoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		mr: '.625rem',
		borderRadius: '.375rem',
		width: '3rem',
		color: 'rgb(233 59 129)'
	},
	whatIdoGrid: {
		display: 'grid',
		gap: '2rem',
		gridTemplateColumns: {
			xs: 'repeat(1, minmax(0, 1fr))',
			sm: 'repeat(2, minmax(0, 1fr))',
			lg: 'repeat(3, minmax(0, 1fr))'
		}
	}
};

export {
	appWrapper,
	searchBar,
	appBar,
	toolbarWrapper,
	logoText,
	sideListWrapper,
	shortsWrapper,
	shortsCard,
	shortsHeader,
	notificationWrapper,
	appCardList,
	appContentWrapper,
	flexAlignCenter,
	flexColumnGrow,
	flexColumnCenter,
	inlineText,
	flex,
	scrollWrapper,
	hideOnMobile
};
