import { configureStore } from '@reduxjs/toolkit';
import postsReduser from './reducer/postSlise';
import usersReducer from './reducer/usersSlice';

const store = configureStore({
    reducer: {
        posts: postsReduser,
        users: usersReducer,
    },
});

export default store;
