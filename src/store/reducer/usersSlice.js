import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '0', name: 'Alis Jenkins' },
    { id: '1', name: 'Kevin Grant' },
    { id: '2', name: 'Madison Price' },
];

const userSlise = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export default userSlise.reducer;
