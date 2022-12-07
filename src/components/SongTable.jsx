import React from 'react';
import { Box, Grid, Divider } from '@mui/material';
import { AccessTimeRounded } from '@mui/icons-material';
import SongRow from './SongRow';

export default function SongTable({ songs, loading, spotifyApi }) {
    const renderSongs = () => {
        if (loading) {
            return [1, 2, 3, 4, 5, 6].map((_, i) => <SongRow loading={loading} key={i} i={i} images={{}} />);
        }

        return songs.map((song, i) => {
            return (
                <SongRow
                    album={song.album.name}
                    images={song.album.images}
                    title={song.name}
                    artist={song.artists[0].name}
                    duration={song.duration_ms / 1000}
                    key={i}
                    i={i}
                    position={song.position}
                    contextUri={song.contextUri}
                    spotifyApi={spotifyApi}
                />
            );
        });
    };
    return (
        <Box
            p={{ xs: 3, md: 4 }}
            sx={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Grid container px={2} py={1} sx={{ fontSize: 14, colo: 'text.secondary' }}>
                <Grid
                    item
                    sx={{
                        width: 35,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    #
                </Grid>
                <Grid
                    item
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    Title
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        flex: 1,
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                    }}
                >
                    Album
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        width: 35,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    <AccessTimeRounded sx={{ width: 20, height: 20 }} />
                </Grid>
            </Grid>
            <Box pb={2}>
                <Divider sx={{ width: '100%', height: 1 }} />
            </Box>
            {renderSongs()}
        </Box>
    );
}
