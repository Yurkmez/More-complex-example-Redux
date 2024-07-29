import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../store/reducer/postSlise';
import styles from './addPostForm.module.css';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onChangeUser = (e) => {
        setUserId(e.target.value);
    };

    const savePost = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
        }
    };

    const enableSavePost =
        Boolean(title) && Boolean(content) && Boolean(userId);

    // ?? выпадающий список???
    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));
    // ??___________________??

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
                        {/* ???????????????????????????????????  */}
                        <label htmlFor="postAuthor">Author:</label>
                        <select
                            id="postAuthor"
                            value={userId}
                            onChange={onChangeUser}
                        >
                            <option value=""></option>
                            {usersOptions}
                        </select>
                        {/* ???????????????????????????????????  */}
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
                            disabled={!enableSavePost}
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
