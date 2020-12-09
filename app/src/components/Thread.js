import React from 'react';
import styled from 'styled-components';
import {useModal} from "./Modal";
import ThreadCommentList from "./ThreadCommentList";

function Thread({by, contents, ip, date, id}) {
    const commentModal = useModal(<ThreadCommentList article={id}/>)
    return (
        <Wrap>
            <div className="content" dangerouslySetInnerHTML={{__html: contents}}/>
            <hr />
            <p className="information">
                {date.toString()} / {by} ({ip.split(".").slice(0,2).join(".") + ".*.*"})
            </p>
            {commentModal.element}
            <button className="comment-btn" onClick={() => commentModal.setOpen(true)}>댓글</button>
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
    margin: 0;
    font-size: .75em;
  }
  
  .comment-btn {
    appearance: none;
    border: 0;
    background: #d4d6ff;
    font-size: 1rem;
    padding: .5em 1em;
    border-radius: 1em;
    margin-top: 1em;
  }
`;

export default Thread;