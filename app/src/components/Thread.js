import React from 'react';
import styled from 'styled-components';

function Thread({title, contents, ip, date}) {
    return (
        <Wrap>
            <h3 className="title">{title}</h3>
            <p className="information">
                {date.toString()} / {ip}
            </p>
            <hr />
            <div className="content" dangerouslySetInnerHTML={{__html: contents}}/>
            <button>대충 댓글 버튼</button>
        </Wrap>
    )
}

const Wrap = styled.div`
  padding: 2em;
  border: 1px solid #eee;
  border-radius: 7px;
  background: #eee;
  box-shadow: -3px 5px 5px #eee;
  margin-top: 24px;
  & > .title {
    font-size: 48px;
    margin: 0;
  }
  & > .information {
    color: #555;
  }
`;

export default Thread;