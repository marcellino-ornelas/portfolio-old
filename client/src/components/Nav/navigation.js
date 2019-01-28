export const NAVIGATION = [
	{
		link: '/',
		name: 'Home',
		icon: 'home',
		exact: true
	},
	{
		link: '/projects',
		name: 'Projects',
		icon: 'folder-open',
		exact: false
	},
	{
		link: '/contact-me',
		name: 'Contact Me',
		icon: 'phone',
		exact: true
	},
	{
		link: '/about-me',
		name: 'Profile',
		icon: 'user',
		exact: true
	}
];

export const SIGNED_IN_NAVIGATION = [
	{
		link: '/keystone',
		name: 'Admin',
		icon: 'home',
		exact: true
	},
	{
		link: '/auth/sign-out',
		name: 'Sign Out',
		icon: 'folder-open',
		exact: true,
		isLink: true
	}
];
