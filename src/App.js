import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { getAccessToken } from './utils/getAccessToken';
import { getAccessTokenFromStorage } from './utils/getAccessTokenFromStorage';

function App({ spotifyApi }) {
    const [token, setToken] = useState(getAccessTokenFromStorage);

    useEffect(() => {
        let accessToken = getAccessTokenFromStorage() || getAccessToken();

        if (accessToken) {
            setToken(accessToken);
            sessionStorage.setItem('spotifyToken', accessToken);
            window.location.hash = '';
        }
    }, []);

    return (
        <Box className='App'>
            {token ? (
                <Dashboard spotifyApi={spotifyApi} />
            ) : (
                <Routes>
                    <Route path='*' element={<Login />} />
                </Routes>
            )}
        </Box>
    );
}

export default App;
