// Показ описание относительной временной метки в <PostsList> и
//  в <SinglePostPage> компонентах.
// <TimeAgo> компонент обрабатывает форматирование строки
// временной метки с испоьзованием библиотеки date-fns.
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
    let timeAgo = '';
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    );
};

export default TimeAgo;
