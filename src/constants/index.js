import {
	MdPhoneIphone,
	MdLocationOn,
	MdEmail,
	MdCalendarToday,
	MdHome,
	MdPersonOutline,
	MdOutlineDescription,
	MdBusinessCenter,
	MdCode
} from 'react-icons/md';
import {
	FaBlogger,
	FaFacebookF,
	FaTwitter,
	FaDribbble,
	FaLinkedinIn,
	FaGraduationCap,
	FaAward
} from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';

import {
	smallImage1,
	smallImage2,
	smallImage3,
	smallImage4,
	smallImage5,
	smallImage6,
	largeImage1,
	largeImage2,
	largeImage3,
	largeImage4,
	largeImage5,
	largeImage6,
	icon,
	icon1,
	icon2,
	icon3,
	icon4,
	icon5,
	brand,
	brand1,
	brand2,
	brand3,
	brand4,
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	banner1,
	banner2,
	banner3,
	banner4,
	banner5,
	banner6,
	banner7,
	banner8,
	banner9,
	email,
	map,
	phoneCall
} from '../assets';

export const infoList = [
	{
		title: 'Phone',
		description: '323-555-5555',
		component: MdPhoneIphone,
		color: 'rgb(202, 71, 121)'
	},
	{
		title: 'Location',
		description: 'Los Angeles, California',
		component: MdLocationOn,
		color: 'rgb(228, 103, 125)'
	},
	{
		title: 'Email',
		description: 'helloworld@gmail.com',
		component: MdEmail,
		color: 'rgb(74, 197, 200)'
	},
	{
		title: 'Birthday',
		description: 'Jan 23, 1949',
		component: MdCalendarToday,
		color: 'rgb(193 124 235)'
	}
];

export const navLinks = [
	{ title: 'Home', path: '/', icon: MdHome },
	{ title: 'About', path: '/about', icon: MdPersonOutline },
	{ title: 'Resume', path: '/resume', icon: MdOutlineDescription },
	{ title: 'Works', path: '/works', icon: MdBusinessCenter },
	{ title: 'Blogs', path: '/blogs', icon: FaBlogger },
	{ title: 'Contact', path: '/contact', icon: RiContactsBookFill }
];

export const links = [
	{
		url: 'https://www.facebook.com',
		color: '#1773EA',
		icon: FaFacebookF
	},
	{
		url: 'https://twitter.com',
		color: '#139CEA',
		icon: FaTwitter
	},
	{
		url: 'https://dribbble.com',
		color: '#E14A84',
		icon: FaDribbble
	},
	{
		url: 'https://www.linkedin.com',
		color: '#0072B1',
		icon: FaLinkedinIn
	}
];

export const skillsList = [
	{
		title: 'Ui/Ux Design',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon
	},
	{
		title: 'App Development',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon1
	},
	{
		title: 'Photography',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon2
	},
	{
		title: 'Photography',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon3
	},
	{
		title: 'Managment',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon4
	},
	{
		title: 'Web Development',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
		icon: icon5
	}
];

export const brands = [
	brand,
	brand1,
	brand2,
	brand3,
	brand4,
	brand,
	brand1,
	brand2,
	brand3,
	brand4
];

export const resumeData = [
	{
		title: 'Education',
		icon: FaGraduationCap
	},
	{
		title: 'Experience',
		icon: MdBusinessCenter
	},
	{
		title: 'Awards',
		icon: FaAward
	}
];

export const skills = [
	{ title: 'WebDesign', value: 65, color: '#FF6464' },
	{ title: 'Mobile App', value: 85, color: '#9272D4' },
	{ title: 'Illustrator', value: 75, color: '#5185D4' },
	{ title: 'Photoshop', value: 90, color: '#CA56F2' }
];

export const buttons = [
	'Digital Design',
	'Marketing',
	'Social Media',
	'Print',
	'Time Management',
	'Flexiblity',
	'Print',
	'Print',
	'Time Management',
	'Flexiblity',
	'Print'
];

export const navList = ['All', 'Video', 'Web Design', 'Logo', 'Graphic Design'];

export const itemData = [
	{
		image: image1,
		title: 'UI/UX',
		subtitle: 'Chul urina',
		color: '#FFF0F0',
		category: ['web design', 'graphic design'],
		id: 'card1'
	},
	{
		image: image2,
		title: 'Logo',
		subtitle: 'Chul urina',
		color: '#FFF3FC',
		category: ['video', 'logo'],
		id: 'card2'
	},
	{
		image: image3,
		title: 'Ui/UX',
		subtitle: 'T-Shirt Design',
		color: '#FFF3FC',
		category: ['web design'],
		id: 'card3'
	},
	{
		image: image4,
		title: 'UI/UX',
		subtitle: 'Packaging Box',
		color: '#E9FAFF',
		category: ['video', 'graphic design'],
		id: 'card4'
	},
	{
		image: image5,
		title: 'Video',
		subtitle: 'Modern Bag Design',
		color: '#F4F4FF',
		category: ['logo'],
		id: 'card5'
	},
	{
		image: image6,
		title: 'Web Desgin',
		subtitle: 'Aura Dione',
		color: '#FFFAE9',
		category: ['logo'],
		id: 'card6'
	},
	{
		image: image7,
		title: 'Video',
		subtitle: 'Chul urina',
		color: '#F4F4FF',
		category: ['video', 'logo'],
		id: 'card7'
	},
	{
		image: image8,
		title: 'Web Design',
		subtitle: 'Aura Dione',
		color: '#FFF0F8',
		category: ['web design', 'graphic design'],
		id: 'card8'
	},
	{
		image: image9,
		title: 'Video',
		subtitle: 'Chul urina',
		color: '#F4F4FF',
		category: ['web design'],
		id: 'card9'
	}
];

export const projects = [
	{
		title: 'UI/UX Project',
		column1: [
			{
				icon: MdOutlineDescription,
				title: 'Project',
				desc: 'Website'
			},
			{
				icon: MdCode,
				title: 'Languages',
				desc: 'Photoshop, Figma'
			}
		],
		column2: [
			{
				icon: MdPersonOutline,
				title: 'Client',
				desc: 'Envato'
			},
			{
				icon: FiExternalLink,
				title: 'Preview',
				desc: 'www.envato.com'
			}
		],
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner1,
		category: ['web design', 'graphic design'],
		id: 'card1'
	},
	{
		title: 'Logo Project',
		column1: [
			{
				icon: MdOutlineDescription,
				title: 'Project',
				desc: 'Website'
			},
			{
				icon: MdCode,
				title: 'Languages',
				desc: 'Photoshop, Figma'
			}
		],
		column2: [
			{
				icon: MdPersonOutline,
				title: 'Client',
				desc: 'Envato'
			},
			{
				icon: FiExternalLink,
				title: 'Preview',
				desc: 'www.envato.com'
			}
		],
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner2,
		category: ['video', 'logo'],
		id: 'card2'
	},
	{
		title: 'T-Shirt Design Project',
		column1: [
			{
				icon: MdOutlineDescription,
				title: 'Project',
				desc: 'Website'
			},
			{
				icon: MdCode,
				title: 'Languages',
				desc: 'Photoshop, Figma'
			}
		],
		column2: [
			{
				icon: MdPersonOutline,
				title: 'Client',
				desc: 'Envato'
			},
			{
				icon: FiExternalLink,
				title: 'Preview',
				desc: 'www.envato.com'
			}
		],
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner3,
		category: ['web design'],
		id: 'card3'
	},
	{
		title: 'Packaging Box Project',
		column1: [
			{
				icon: MdOutlineDescription,
				title: 'Project',
				desc: 'Website'
			},
			{
				icon: MdCode,
				title: 'Languages',
				desc: 'Photoshop, Figma'
			}
		],
		column2: [
			{
				icon: MdPersonOutline,
				title: 'Client',
				desc: 'Envato'
			},
			{
				icon: FiExternalLink,
				title: 'Preview',
				desc: 'www.envato.com'
			}
		],
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner4,
		category: ['video', 'graphic design'],
		id: 'card4'
	},
	{
		title: 'Modern Bag Design Project',
		column1: [
			{
				icon: MdOutlineDescription,
				title: 'Project',
				desc: 'Website'
			},
			{
				icon: MdCode,
				title: 'Languages',
				desc: 'Photoshop, Figma'
			}
		],
		column2: [
			{
				icon: MdPersonOutline,
				title: 'Client',
				desc: 'Envato'
			},
			{
				icon: FiExternalLink,
				title: 'Preview',
				desc: 'www.envato.com'
			}
		],
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner5,
		category: ['logo'],
		id: 'card5'
	},
	{
		title: 'Aura Dione Project',
		column1: [
			{
				icon: MdOutlineDescription,
				title: 'Project',
				desc: 'Website'
			},
			{
				icon: MdCode,
				title: 'Languages',
				desc: 'Photoshop, Figma'
			}
		],
		column2: [
			{
				icon: MdPersonOutline,
				title: 'Client',
				desc: 'Envato'
			},
			{
				icon: FiExternalLink,
				title: 'Preview',
				desc: 'www.envato.com'
			}
		],
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner6,
		category: ['logo'],
		id: 'card6'
	},
	{
		title: 'UI/UX Project',
		column1: [
			{
				icon: MdOutlineDescription,
				title: 'Project',
				desc: 'Website'
			},
			{
				icon: MdCode,
				title: 'Languages',
				desc: 'Photoshop, Figma'
			}
		],
		column2: [
			{
				icon: MdPersonOutline,
				title: 'Client',
				desc: 'Envato'
			},
			{
				icon: FiExternalLink,
				title: 'Preview',
				desc: 'www.envato.com'
			}
		],
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner7,
		category: ['video', 'logo'],
		id: 'card7'
	},
	{
		title: 'Aura Dione Project',
		column1: [
			{
				icon: MdOutlineDescription,
				title: 'Project',
				desc: 'Website'
			},
			{
				icon: MdCode,
				title: 'Languages',
				desc: 'Photoshop, Figma'
			}
		],
		column2: [
			{
				icon: MdPersonOutline,
				title: 'Client',
				desc: 'Envato'
			},
			{
				icon: FiExternalLink,
				title: 'Preview',
				desc: 'www.envato.com'
			}
		],
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner8,
		category: ['web design', 'graphic design'],
		id: 'card8'
	},
	{
		title: 'UI/UX Project',
		column1: [
			{
				icon: MdOutlineDescription,
				title: 'Project',
				desc: 'Website'
			},
			{
				icon: MdCode,
				title: 'Languages',
				desc: 'Photoshop, Figma'
			}
		],
		column2: [
			{
				icon: MdPersonOutline,
				title: 'Client',
				desc: 'Envato'
			},
			{
				icon: FiExternalLink,
				title: 'Preview',
				desc: 'www.envato.com'
			}
		],
		body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
		img: banner9,
		category: ['web design'],
		id: 'card9'
	}
];

export const dummyData = [
	{
		smallImage: smallImage1,
		largeImage: largeImage1,
		date: '17 April',
		tag: 'Inspiration',
		title: 'How to Own Your Audience by Creating an Email List.',
		id: 'blog1',
		color: '#FCF4FF'
	},
	{
		smallImage: smallImage2,
		largeImage: largeImage2,
		date: '10 April',
		tag: 'Inspiration',
		title: 'Everything You Need to Know About Web Accessibility.',
		id: 'blog2',
		color: '#EEFBFF'
	},
	{
		smallImage: smallImage3,
		largeImage: largeImage3,
		date: '21 April',
		tag: 'Web Design',
		title: 'he window know to say beside youT',
		id: 'blog3',
		color: '#FCF4FF'
	},
	{
		smallImage: smallImage4,
		largeImage: largeImage4,
		date: '27 April',
		tag: 'Inspiration',
		title: 'Top 10 Toolkits for Deep Learning in 2021.',
		id: 'blog4',
		color: '#FCF4FF'
	},
	{
		smallImage: smallImage5,
		largeImage: largeImage5,
		date: '27 April',
		tag: 'Inspiration',
		title: 'How to Own Your Audience by Creating an Email List.',
		id: 'blog5',
		color: '#FCF4FF'
	},
	{
		smallImage: smallImage6,
		largeImage: largeImage6,
		date: '27 April',
		tag: 'Inspiration',
		title: 'Everything You Need to Know About Web Accessibility.',
		id: 'blog6',
		color: '#FCF4FF'
	}
];

export const loremText = {
	pText1:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.',
	pText2:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur.',
	pText3:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.',
	pText4:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nam ad, unde vel aut soluta atque consequatur. Omnis, debitis nihil?',
	name: 'Rafia Ana',
	time: 15
};

export const contactInfo = [
	{
		title: 'Phone',
		line1: '+452 666 386',
		line2: '+452 666 386',
		img: phoneCall,
		bgcolor: '#FCF4FF'
	},
	{
		title: 'Email',
		line1: 'support@gmail.com',
		line2: 'example@gmail.com',
		img: email,
		bgcolor: '#EEFBFF'
	},
	{
		title: 'Address',
		line1: '5000 Stratford Cir',
		line2: 'Los Angeles, CA, USA',
		img: map,
		bgcolor: '#F2F4FF'
	}
];

export const contactData = [
	{
		title: 'Name',
		color: 'error',
		type: 'text'
	},
	{
		title: 'Email',
		color: 'success',
		type: 'email'
	},
	{
		title: 'Message',
		color: 'secondary',
		type: 'text'
	}
];
