import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './postList.module.css';

const PostsList = () => {
    const posts = useSelector((state) => state.posts);

    const mapingPosts = posts.map((post) => (
        <div className={styles.boxPost}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`}>Viev Post</Link>
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
