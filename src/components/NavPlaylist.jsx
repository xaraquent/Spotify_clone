import { Link } from 'react-router-dom';
import { Box, Skeleton } from '@mui/material';

export default function NavPlaylist({ loading, name, id }) {
    return (
        <Link to={loading ? '' : `/playlist/${id}`} style={{ textDecoration: 'none' }}>
            <Box
                px={3}
                py={1}
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    fontSize: 14,
                    '&:hover': { color: 'text.primary' },
                }}
            >
                {loading ? <Skeleton variant={'text'} height={'14px'} width={'70px'} /> : name}
            </Box>
        </Link>
    );
}
