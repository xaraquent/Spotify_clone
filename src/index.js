import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/system';
import { themeOptions } from './theme/material-theme';
import { BrowserRouter } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import { redirectURL } from './config/config';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    redirectUri: redirectURL,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={themeOptions}>
            <BrowserRouter>
                <App spotifyApi={spotifyApi} />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
