import React from 'react';
import Box from '@mui/material/Box';
import fbIcon from '../../../../../assets/icons/svgs/fbIcon.svg';
import insIcon from '../../../../../assets/icons/svgs/insIcon.svg';
import ytbIcon from '../../../../../assets/icons/svgs/ytbIcon.svg';
import { BoxIconProps } from '../constants';


const BoxIcon: React.FC<BoxIconProps> = ({ type, href }) => {
    const handleRenderIcon = (type: 'fb' | 'ins' | 'ytb'): string => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'ytb':
                return ytbIcon;
            default:
                return '';
        }
    };
    return(
        <Box
            component="a"   
            href={href}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                height: 20,
                backgroundColor: '#2E2E2E',
                borderRadius: 5,
                padding: "8px",
                cursor: 'pointer',
                
            }}
            >
                <img src={handleRenderIcon(type)} alt={type} style={{ width: '100%'}} />
        </Box>
        )
}

export default BoxIcon;