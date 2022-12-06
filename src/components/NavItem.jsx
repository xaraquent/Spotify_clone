import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem({ active, Icon, name, target }) {
    return (
        <Link to={target} style={{ textDecoration: 'none' }}>
            <Box
                px={3}
                py={1}
                sx={{
                    color: active ? 'text.primary' : 'text.secondary',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: 14,
                    transition: 'color 0.2 ease-in-out',
                    '&:hover': { color: 'text.primary' },
                }}
            >
                {Icon && <Icon sx={{ fontSize: 28, marginRight: 1 }} />}
                {name}
            </Box>
        </Link>
    );
}
