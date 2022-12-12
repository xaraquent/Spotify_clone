import { Box, Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import NavPlaylist from './NavPlaylist';
import NavItem from './NavItem';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ListIcon from '@mui/icons-material/List';
import { useMatch } from 'react-router-dom';

export default function SideNav() {
    const { status, albumList } = useSelector((state) => state.playlist);

    const renderPlaylist = () => {
        if (status.isLoading) {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
                return <NavPlaylist key={index} loading={status.isLoading} />;
            });
        }
        return albumList.map((playlist, index) => {
            return <NavPlaylist key={index} id={playlist.id} name={playlist.name} loading={status.isLoading} />;
        });
    };

    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                width: 230,
                height: '100%',
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
            }}
        >
            <Box p={3}>
                <img src='/Spotify_Logo.png' width={'75%'} alt='Spotify' />
            </Box>
            <NavItem name='Hem' Icon={HomeRoundedIcon} target='/' active={useMatch('/')} />
            <NavItem name='Ditt bibliotek' Icon={ListIcon} target='/library' active={useMatch('/library')} />
            <Box px={3} py={1}>
                <Divider sx={{ backgroundColor: '#a000f0' }} />
            </Box>
            <Box sx={{ overflowY: 'auto', flex: 1 }}>{renderPlaylist()}</Box>
        </Box>
    );
}
