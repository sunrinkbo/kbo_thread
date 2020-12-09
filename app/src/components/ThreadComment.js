import React from 'react';
import styled from 'styled-components';

function ThreadComment({id, name, ip, time, text}) {
    const date = new Date(time);
    return (
        <Comment>
            <div className="contents">{text}</div>
            <div className="information">
                {date.toString()} / {name}({ip.split(".").splice(0,2).join(".") + ".*.*"})
            </div>
        </Comment>
    )
}

const Comment = styled.div`
  padding: 1em;
  background: #eee;
  margin: 1em 0;
`;

export default ThreadComment;