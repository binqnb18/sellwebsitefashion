import React, { useEffect, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { dataBoxIcon, dataMenu } from './constants';
import BoxIcon from './Boxlcon/Boxlcon';
import Menu from './Menu/Menu';
// import { TfiReload } from 'react-icons/tfi';
// import { BsHeart } from 'react-icons/bs';
// import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '../hooks/useScrollHandling';



const MyHeader: React.FC = () => {
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);

    // // Open Sidebar Handler
    // const handleOpenSideBar = (type: string) => {
    //     setIsOpen(true);
    //     setType(type);
    // };

    // Effect to handle scroll position
    useEffect(() => {
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: fixedPosition ? '#ffffffe6' : 'transparent',
                boxShadow: fixedPosition ? '0px 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
                transition: 'transform 0.7s ease',
                transform: fixedPosition ? 'translateY(0)' : 'translateY(-83px)',
                backdropFilter: 'blur(5px)',
            }}
        >
            <Toolbar>
                <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {dataBoxIcon.map((item) => (
                                <BoxIcon key={item.type} type={item.type} href={item.href} />
                            ))}
                        </Box>

                        <Box sx={{ display: 'flex', gap: 4, ml: 4 }}>
                            {dataMenu.slice(0, 3).map((item) => (
                                <Menu key={item.content} content={item.content} href={item.href} />
                            ))}
                        </Box>
                    </Box>

                    {/* <Box component="img" src={Logo} alt="Logo" sx={{ width: 153, height: 53 }} /> */}

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 4, mr: 4 }}>
                            {dataMenu.slice(3).map((item) => (
                                <Menu key={item.content} content={item.content} href={item.href} />
                            ))}
                        </Box>

                        {/* <Box sx={{ display: 'flex', gap: 2 }}>
                            <IconButton onClick={() => handleOpenSideBar('compare')}>
                                <TfiReload style={{ fontSize: '20px' }} />
                            </IconButton>
                            <IconButton onClick={() => handleOpenSideBar('wishlist')}>
                                <BsHeart style={{ fontSize: '20px' }} />
                            </IconButton>
                            <IconButton onClick={() => handleOpenSideBar('cart')}>
                                <PiShoppingCart style={{ fontSize: '25px' }} />
                            </IconButton>
                        </Box> */}
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default MyHeader;
