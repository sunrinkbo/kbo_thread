import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import viewport from "./constants/viewport";
import ThreadList from "./components/ThreadList";
import ThreadForm from "./components/ThreadForm";

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setTimeout(() => {
      setDate(new Date());
    }, (1000 * 60 * 60 * 24) - date.getMilliseconds());

      return () => {
          clearTimeout(id);
      }
  }, [date]);
  return (
    <Wrap>
      <h1 className="date-heading">
        안녕하세요!<br/>
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 {(["일", "월", "화", "수", "목", "금", "토"])[date.getDay()]}요일
      </h1>
        <ThreadForm />
      <ThreadList />
    </Wrap>
  );
}


const Wrap = styled.div`
  padding: 5vh 10vw;
  .date-heading {
    font-size: 3vw;
    margin: 0;
  }
  
  @media screen and (max-width: ${viewport.smDesktop}px) {
    .date-heading {
      font-size: 30px;
    }
  }
  
  @media screen and (max-width: ${viewport.mobile}px) {
    padding: 1.5em;
    .date-heading {
      font-size: 24px;
    }
  }
  
`;
export default App;
