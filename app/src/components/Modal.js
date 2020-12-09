import React, {useEffect, useState} from 'react';
import styled from "styled-components";

function Modal({open, children, setClose}) {
    const [appearance, setAppearance] = useState(open);

    useEffect(() => {
        if (open === true) {
            setAppearance(true);
            return;
        };

        const id = setTimeout(() => setAppearance(open), 500);
        return () => clearTimeout(id);
    }, [open]);

    if (!appearance) return null;

    return (
        <Background className={open ? "open" : "close"} onClick={setClose}>
            <div className="contents" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </Background>
    )
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &.open > .contents {
    animation: openAnim .5s;
  }
  &.close > .contents {
    animation: closeAnim .5s;
  }
  &.close {
    background: rgba(0,0,0,0);
    transition: background .5s;
  }
  
  @keyframes openAnim {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes closeAnim {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

export function useModal(contents) {
    const [open, setOpen] = useState(false);
    const element = (
        <Modal open={open} setClose={() => setOpen(false)}>
            {contents}
        </Modal>
    );

    return {
        open, setOpen, element
    }
}