import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    status: {
        isLoading: false,
        isError: null,
    },
    albumList: [],
};

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPlaylist.pending, (state, action) => {
                state.status.isLoading = true;
                state.status.isError = null;
            })
            .addCase(getPlaylist.fulfilled, (state, action) => {
                state.albumList = action.payload;
                state.status.isLoading = false;
                state.status.isError = null;
            })
            .addCase(getPlaylist.rejected, (state, action) => {
                state.status.isLoading = false;
                state.status.isError = action.payload;
            });
    },
});

export const getPlaylist = createAsyncThunk('getPlaylist', async (spotifyApi, thunkAPI) => {
    try {
        const data = await spotifyApi.getUserPlaylists();
        return data.body.items;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export default playlistSlice.reducer;
