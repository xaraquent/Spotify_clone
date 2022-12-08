import React, { useState, useEffect, useCallback } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import SongTable from '../components/SongTable';

export default function Playlist({ spotifyApi }) {
    const [playlistInfo, setPlaylistInfo] = useState();
    const [songs, setSongs] = useState([]);
    const [status, setStatus] = useState({ isLoading: false, isError: null });
    const { id } = useParams();

    const formatSongData = useCallback(
        (songs) => {
            return songs.map((song, i) => {
                const { track } = song;
                track.contextUri = `spotify:playlist:${id}`;
                track.position = i;
                return track;
            });
        },
        [id]
    );

    useEffect(() => {
        const getData = async () => {
            setStatus((prev) => ({ ...prev, isLoading: true }));
            try {
                const playlistDetail = await spotifyApi.getPlaylist(id);
                setPlaylistInfo({
                    image: playlistDetail.body.images[0].url,
                    name: playlistDetail.body.name,
                });

                const { tracks } = playlistDetail.body;
                const formattedSongs = formatSongData(tracks.items);
                setSongs(formattedSongs);
            } catch (error) {
                setStatus((prev) => ({ ...prev, isError: error }));
            }
        };

        getData().finally(() => {
            setStatus((prev) => ({ ...prev, isLoading: false }));
        });
    }, [formatSongData, id, spotifyApi]);

    return (
        <Box
            sx={{
                color: '#fff',
                bgcolor: 'background.paper',
                flex: 1,
                overflowY: 'auto,',
            }}
        >
            <Box
                p={{ xs: 3, md: 4 }}
                sx={{
                    width: '100%',
                    background: 'linear-gradient(#121212, #A000F070)',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: {
                        xs: 'flex-start',
                        md: 'flex-end',
                        xl: 'center',
                    },
                    boxSizing: 'border-box',
                    gap: 3,
                }}
            >
                <Avatar
                    src={playlistInfo?.image}
                    variant='square'
                    sx={{
                        width: { xs: '100%', md: 235 },
                        height: { xs: '100%', md: 235 },
                        maxWidth: 235,
                    }}
                />
                <Box>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'text.primary' }}>Playlist</Typography>
                    <Typography sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 'bold', color: 'text.primary' }}>
                        {playlistInfo?.name}
                    </Typography>
                </Box>
            </Box>
            <SongTable songs={songs} loading={status.isLoading} spotifyApi={spotifyApi} />
        </Box>
    );
}
