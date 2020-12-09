import React from 'react';
import {useQuery} from 'react-query';
import Thread from "./Thread";
import axios from 'axios';

function ThreadList() {
    const list = useQuery('thread_list', () => axios.get('/api/article'));

    if (list.isLoading || !list.data) {
        return null;
    }

    return (
        <div style={{}}>
            {list.data.data.sort((a,b) => new Date(b.time).getTime() - new Date(a.time).getTime()).map(data => (
                <Thread key={data.id} id={data.id} by={data.name} ip={data.ip} date={new Date(data.time)} contents={data.text} />
            ))}
        </div>
    )
}

export default ThreadList;