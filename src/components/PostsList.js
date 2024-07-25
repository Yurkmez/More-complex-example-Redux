import { useSelector } from 'react-redux';
import styles from './postList.module.css';

const PostsList = () => {
    const posts = useSelector((state) => state.posts);

    const mapingPosts = posts.map((post) => (
        <div className={styles.boxPost}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    ));
    return (
        <>
            <h2 className={styles.header}>Posts List</h2>
            {mapingPosts}
        </>
    );
};

export default PostsList;
