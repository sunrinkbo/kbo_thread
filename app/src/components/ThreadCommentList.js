import React from 'react';
import {useQuery} from "react-query";
import axios from 'axios';
import ThreadComment from "./ThreadComment";

function ThreadCommentList({article}) {
    const query = useQuery(["comments", article], () => axios.get("/api/comment?article=" + article));

    if (query.isLoading || !query.data || !query.data.data) {
        return null;
    }

    return (
        <div style={{background: 'white', padding: '2em', maxWidth: '60vh', overflowY: 'scroll'}}>
            {query.data.data.map(data => <ThreadComment key={data.id} {...data} />)}
            {query.data.data.length < 1 && <h1>댓글이 없습니다.</h1>}
        </div>
    );
}

export default ThreadCommentList;