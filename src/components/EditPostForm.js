import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postUpdated } from '../store/reducer/postSlise';
import { useNavigate } from 'react-router-dom';
import styles from './addPostForm.module.css';

const EditPostForm = () => {
    const { postId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const post = useSelector((state) =>
        state.posts.find(({ id }) => id === postId)
    );

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const savePost = () => {
        if (title && content) {
            dispatch(
                postUpdated({
                    id: postId,
                    title: title,
                    content: content,
                })
            );
            navigate(`/posts/${postId}`);
        }
    };

    return (
        <div>
            <p className={styles.header}>Edit Post</p>

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

export default EditPostForm;
