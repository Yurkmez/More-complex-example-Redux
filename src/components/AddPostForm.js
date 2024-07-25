import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { postAdded } from '../store/reducer/postSlise';
import styles from './addPostForm.module.css';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const savePost = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title: title,
                    content: content,
                })
            );
        }
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <p className={styles.header}>Add a new Post</p>

            <form>
                <div className={styles.formBorder}>
                    <div className={styles.formLayout}>
                        <label htmlFor="postTitle" className={styles.label}>
                            Title:
                        </label>
                        <input
                            className={styles.inputSizeFont}
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={onChangeTitle}
                        />
                        <label htmlFor="postContent" className={styles.label}>
                            Content:
                        </label>
                        <textarea
                            className={styles.inputSizeFont}
                            type="text"
                            id="postContent"
                            name="postContent"
                            value={content}
                            onChange={onChangeContent}
                        />
                        <button
                            type="button"
                            className={styles.button}
                            onClick={savePost}
                        >
                            Save Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddPostForm;
