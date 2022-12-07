import React from 'react';
import { Box, Button } from '@mui/material';
import { accessUrl } from '../config/config';

export default function Login() {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <img
                src='/Spotify_Logo.png'
                alt='Spotify_clone'
                style={{ marginBottom: 50, width: '70%', maxWidth: 450 }}
            />
            <Button href={accessUrl} color='primary' variant='outlined' size='large'>
                Login to Spotify
            </Button>
        </Box>
    );
}
