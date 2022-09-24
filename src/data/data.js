import {
	MdHome,
	MdPersonOutline,
	MdOutlineDescription,
	MdBusinessCenter
} from 'react-icons/md';
import { FaBlogger } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';

export const navLinks = [
	{ title: 'Home', path: '/', icon: MdHome },
	{ title: 'About', path: '/about', icon: MdPersonOutline },
	{ title: 'Resume', path: '/resume', icon: MdOutlineDescription },
	{ title: 'Works', path: '/works', icon: MdBusinessCenter },
	{ title: 'Blogs', path: '/blogs', icon: FaBlogger },
	{ title: 'Contact', path: '/contact', icon: RiContactsBookFill }
];
