import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './SideNav';
import { Box } from '@mui/material';
import Home from '../pages/Home';
import { useDispatch } from 'react-redux';
import { getPlaylist } from '../store/playlistSlice';
import { getAccessTokenFromStorage } from '../utils/getAccessTokenFromStorage';
import Playlist from '../pages/Playlist';

export default function Dashboard({ spotifyApi }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = getAccessTokenFromStorage();

        const onMount = async () => {
            await spotifyApi.setAccessToken(accessToken);
            dispatch(getPlaylist(spotifyApi));
        };

        if (accessToken) {
            onMount();
        }
    }, []);

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
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
                    <Route path='/library' element={<h1>Library</h1>} />
                    <Route path='/playlist/:id' element={<Playlist spotifyApi={spotifyApi} />} />
                </Routes>
            </Box>
        </Box>
    );
}
