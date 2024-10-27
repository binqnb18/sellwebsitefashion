import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

interface MenuProps {
    content: string;
    href: string;
    userInfo?: { username: string };
    handleLogOut?: () => void;
}

const Menu: React.FC<MenuProps> = ({ content, href, userInfo, handleLogOut }) => {
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);

    const handleRenderText = (content: string) => {
        if (content === 'Sign in' && userInfo) {
            return `Hello: ${userInfo.username}`;
        }
        return content;
    };

    return (
        <Box>
            
        </Box>
    );
};

export default Menu;
