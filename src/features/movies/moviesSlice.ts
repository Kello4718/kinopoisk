import { createSlice } from '@reduxjs/toolkit';
type MoviesState = {
    user: {
        login: string;
        password: string;
        isAuth: boolean;
    };
    page: number;
    limit: number;
};

const initialState: MoviesState = {
    user: {
        login: '',
        password: '',
        isAuth: false,
    },
    page: 1,
    limit: 10,
};

export const MoviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        updateUserData: (state, action) => {
            state.user = action.payload;
        },
        updatePage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export const { updateUserData, updatePage } = MoviesSlice.actions;

export default MoviesSlice.reducer;
