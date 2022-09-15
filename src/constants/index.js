import {
	MdPhoneIphone,
	MdLocationOn,
	MdEmail,
	MdCalendarToday
} from 'react-icons/md';

const infoList = [
	{
		title: 'Phone',
		description: '323 555 5555',
		component: MdPhoneIphone
	},
	{
		title: 'Location',
		description: 'Los Angeles, California',
		component: MdLocationOn
	},
	{
		title: 'Email',
		description: 'helloworld@gmail.com',
		component: MdEmail
	},
	{
		title: 'Birthday',
		description: 'Jan 23, 1949',
		component: MdCalendarToday
	}
];

export { infoList };