import { configureStore } from '@reduxjs/toolkit';
import postReduser from './reducer/postSlise';

const store = configureStore({
    reducer: {
        posts: postReduser,
    },
});

export default store;
