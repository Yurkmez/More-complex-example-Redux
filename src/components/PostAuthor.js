// Необходим способ отображать имя автора записи
// внутри элементов списка записей и <SinglePostPage>.
// Поскольку информация должна отображаться
// более чем в одном месте, можно создать компонент (PostAuthor),
// который принимает идентификатор пользователя в качестве
// реквизита, ищет нужный объект user
// и форматирует имя пользователя.

import { useSelector } from 'react-redux';

const PostAuthor = ({ userId }) => {
    const author = useSelector((state) => {
        state.users.find((user) => user.id === userId);
    });

    // console.log(userId);
    // console.log(author);
    return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
// Import в PostsList.js и SinglePostPage.js
// отображаясь как <PostAuthor userId={post.user} />,
// и каждый раз, когда добавляется запись post,
// имя выбранного пользователя будет отображаться
// внутри отображаемой записи.
