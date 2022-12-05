import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import { getAccessToken } from './utils/getAccessToken';
import { getAccessTokenFromStorage } from './utils/getAccessTokenFromStorage';

function App({ spotifyApi }) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        let accessToken = getAccessTokenFromStorage() || getAccessToken();

        if (accessToken) {
            setToken(accessToken);
            window.sessionStorage.setItem('spotifyToken', accessToken);
            window.location.hash = '';
        }
    }, []);

    return <Box className='App'>{token ? <Dashboard /> : <Login />}</Box>;
}

export default App;
