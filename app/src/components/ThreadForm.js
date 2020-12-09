import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import queryCache from "../constants/queryCache";

function ThreadForm({mode, article}) {

    const [form, setForm] = useState({
        text: "",
        name: "익명"
    });

    function changeText(fieldName) {
        return (e) => {
            setForm(form => ({...form, [fieldName]: e.target.value}));
        }
    }
    function onSubmit(e) {
        e.preventDefault();

        const url = mode === "comment" ? "/api/comment/" : "/api/article/";
        if (!form.text) alert("텍스트를 입력해주세요.");
        if (!form.name) alert("닉네임을 입력해주세요.");
        if (mode === "comment" && !article) alert("오류가 발생했습니다.");

        axios.post(url, {...form, article})
            .then(() => {
                setForm({
                    text: "",
                    name: "익명"
                });

                queryCache.refetchQueries(mode === "comment" ? ["comments", article]: ['thread_list']).then(() => console.log("Thread Refreshed"));
            })
            .catch(() => {
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            });
    }
    return (
        <Form onSubmit={onSubmit} >
            <textarea className="box-style text" placeholder="이 곳에 글을 남겨보세요." onChange={changeText("text")} value={form.text} />
            <div className="row">
                <input type="text" className="box-style input" onChange={changeText("name")} value={form.name} />
                <button className="button-style">올리기</button>
            </div>
        </Form>
    )
}

const Form = styled.form`
  & > .text {
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
  }
  & > .text:focus {
    outline: 0;
    font-size: 1rem;
  }
  
  & > .row {
    display: flex;
    margin-top: 1em;
    
    justify-content: flex-end;
    .input {
      padding: .5em;
    }
    .button-style {
      margin-left: 8px;
    }
  }
`;

export default ThreadForm;