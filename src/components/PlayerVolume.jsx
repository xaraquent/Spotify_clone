import React, { useState } from 'react';
import { VolumeDown, VolumeUp, VolumeOff } from '@mui/icons-material';
import { Grid, Stack, Slider } from '@mui/material';

export default function PlayerVolume({ player }) {
    const defaultVolume = 50;
    const [volume, setVolume] = useState(defaultVolume);

    const handleVolumeChange = async (v) => {
        try {
            await player.setVolume(v / 200);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <Grid
            item
            xs={3}
            sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}
        >
            <Stack spacing={2} direction='row' alignItems='center' sx={{ width: 200, color: 'text.secondary' }}>
                {volume === 0 ? <VolumeOff /> : volume < 100 ? <VolumeDown /> : <VolumeUp />}
                <Slider
                    min={0}
                    max={200}
                    step={1}
                    value={volume}
                    onChange={(e, v) => setVolume(v)}
                    onChangeCommitted={async (_, value) => handleVolumeChange(value)}
                />
            </Stack>
        </Grid>
    );
}
