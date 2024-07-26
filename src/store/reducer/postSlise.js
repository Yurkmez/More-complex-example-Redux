import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'First Post', content: 'I am the first to post' },
    { id: '2', title: 'Second Post', content: 'I am the second to post' },
];

const postSlise = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        },
    },
    postUpdated(state, action) {
        const { id, title, content } = action.payload;
        const existingPost = state.find((post) => post.id === id);
        if (existingPost) {
            existingPost.title = title;
            existingPost.content = content;
        }
    },
});

export const { postAdded, postUpdated } = postSlise.actions;
export default postSlise.reducer;
