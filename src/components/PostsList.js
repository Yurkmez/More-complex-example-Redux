import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';
import styles from './postList.module.css';

const PostsList = () => {
    const posts = useSelector((state) => state.posts);

    // Публикации в  Redux Store хранятся в порядке поступления, но логично отображать свежие
    // публикации сначала, пэтому - сортируем
    // Но array.sort() изменяет существующий массив,
    // поэтому необходимо создать копию state.posts
    // и отсортировать ее.
    // Т. к. post.date поля хранятся в виде строк даты
    // и временных меток, можно напрямую сравнить их,
    // для сортировки записей в правильном порядке

    const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map((post) => {
        return (
            <div className={styles.boxPost} key={post.id}>
                <h3>{post.title}</h3>
                <div>
                    <PostAuthor userId={post.user} />
                    <TimeAgo timestamp={post.date} />
                </div>
                <p>{post.content.substring(0, 100)}</p>
                <ReactionButton post={post} />
                <Link to={`/posts/${post.id}`}>Viev Post</Link>
            </div>
        );
    });

    return (
        <div>
            <h2 className={styles.header}>Posts List</h2>
            {renderedPosts}
        </div>
    );
};

export default PostsList;
