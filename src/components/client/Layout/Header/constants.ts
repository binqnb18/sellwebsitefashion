const dataBoxIcon = [
    { type: 'fb' as const, href: '#' },
    { type: 'ins' as const, href: '#' },
    { type: 'ytb' as const, href: '#' }
];

const dataMenu = [
    { content: 'Elements', href: '#' },
    { content: 'Our Shop', href: '#' },
    { content: 'About us', href: '#' },
    { content: 'Contacts', href: '#' },
    { content: 'Search', href: '#' },
    { content: 'Sign in', href: '#' }
];

export interface BoxIconProps {
    type: 'fb' | 'ins' | 'ytb';
    href: string;
}



export { dataBoxIcon, dataMenu };
