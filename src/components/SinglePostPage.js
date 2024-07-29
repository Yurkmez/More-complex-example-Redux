import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactionButton from './ReactionButton';
import styles from './singlePostPage.module.css';

const SinglePostPage = () => {
    const { postId } = useParams();
    // Сюда мы попадаем по ссылке из PostsList - <Link to={`/posts/${post.id}`}>Viev Post</Link>
    // В app.js по данной ссылке как раз и расположен настоящий компонент - SinglePostPage
    // Но как же получить id?
    // Для этого используется хук - useParams, который достает этот id в виде объекта, и чтобы
    // получить значение id - мы деструктурируем его - const { postId }
    const post = useSelector((state) =>
        state.posts.find(({ id }) => id === postId)
    );

    if (!post) {
        return (
            <div>
                <h2>Post not found!</h2>
            </div>
        );
    }

    return (
        <div className={styles.marginTop}>
            <p>
                <strong>Title: </strong>
                {post.title}
            </p>
            <p>
                <strong>Content: </strong>
                {post.content}
            </p>
            <p>
                <strong>Id: </strong>
                {post.id}
            </p>
            <ReactionButton post={post} />
            <Link to={`/editPost/${post.id}`}>Edit Post</Link>
        </div>
    );
};

export default SinglePostPage;
