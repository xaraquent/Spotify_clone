import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './SideNav';
import { Box } from '@mui/material';
import Home from '../pages/Home';
import { useDispatch } from 'react-redux';
import { getPlaylist } from '../store/playlistSlice';
import { getAccessTokenFromStorage } from '../utils/getAccessTokenFromStorage';
import Playlist from '../pages/Playlist';
import Player from './Player';
import MobileNav from './MobileNav';
import Library from '../pages/Library';

export default function Dashboard({ spotifyApi }) {
    const [token, setToken] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = getAccessTokenFromStorage();

        const onMount = async () => {
            await spotifyApi.setAccessToken(accessToken);
            dispatch(getPlaylist(spotifyApi));
        };

        if (accessToken) {
            setToken(accessToken);
            onMount();
        }
    }, []);

    return (
        <Box
            sx={{
                height: '90vh',
                // width: '100vw',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                }}
            >
                <SideNav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/library' element={<Library />} />
                    <Route path='/playlist/:id' element={<Playlist spotifyApi={spotifyApi} />} />
                </Routes>
            </Box>
            {token && <Player spotifyApi={spotifyApi} />}
            <MobileNav />
        </Box>
    );
}
